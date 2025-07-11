import { useState, useEffect } from 'react';
import { db, auth } from './FirebaseConfig';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import type { User } from 'firebase/auth';

const fieldStyle = {
  padding: '0.75rem 1rem',
  borderRadius: '8px',
  border: '2px solid #e2e8f0',
  fontSize: '0.875rem',
  minWidth: '120px',
  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
  background: 'white',
  color: '#1a202c',
  fontWeight: '500'
};

const keyOptions: Record<keyof ConditionGroup, string[]> = {
  events: ['level_complete', 'level_failed', 'watch_ad'],
  user_properties: ['subscriber_segment', 'is_paying_user'],
  device: [
    'country', 'region', 'language', 'timezone',
    'os', 'os_version', 'device_model', 'is_vpn'
  ]
};

const defaultParamOptions: Record<string, string[]> = {
  level_failed: ['level'],
  level_complete: ['level'],
  watch_ad: ['ad_type'],
  subscriber_segment: ['tier'],
  is_paying_user: [],
  os: ['version'],
  country: [],
  region: [],
  language: [],
  timezone: [],
  os_version: [],
  device_model: [],
  is_vpn: []
};

const operatorOptions = ['==', '>=', '<=', '>', '<', 'in', 'not in'] as const;
const countOperatorOptions = ['==', '>=', '<=', '>', '<'] as const;

type MatchParam = { 
  key: string; 
  value: string; 
  operator: string;   
};

type Condition = {
  key: string;
  operator?: string;
  match: MatchParam[];
  count: string;
  countOperator: string;
  not?: boolean;
};

type ConditionGroup = {
  events: Condition[];
  user_properties: Condition[];
  device: Condition[];
};

type RuleSet = {
  value: string;
  sequential: boolean;
  conditions: ConditionGroup;
};

const prebuiltTemplates = [
  {
    featureName: 'example_feature',
    label: 'Example Feature Template',
    ruleSets: [
      {
        value: 'true',
        sequential: false,
        conditions: {
          events: [
            {
              key: 'level_complete',
              count: '1',
              countOperator: '>=',
              match: [{ key: 'level', value: '1', operator: '>=' }]
            }
          ],
          user_properties: [],
          device: []
        }
      }
    ]
  }
];

export default function RuleBuilder() {
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [allowedTenants, setAllowedTenants] = useState<string[]>([]);
  const [selectedTenant, setSelectedTenant] = useState('');
  const [featureName, setFeatureName] = useState('');
  const [isRenaming, setIsRenaming] = useState(false);
  const [newFeatureName, setNewFeatureName] = useState('');
  const [ruleSets, setRuleSets] = useState<RuleSet[]>([]);
  const [rawJSON, setRawJSON] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [allFeatureNames, setAllFeatureNames] = useState<string[]>([]);
  const [aclError, setAclError] = useState('');

  const isExistingFeature = allFeatureNames.includes(featureName);
  const hasAccess = selectedTenant && allowedTenants.includes(selectedTenant);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!user) return;

    const fetchACL = async () => {
      try {
        const ref = doc(db, 'acl', user.email!);
        const snap = await getDoc(ref);
        if (snap.exists()) {
          const data = snap.data();
          setAllowedTenants(data.tenants || []);
          setAclError('');
        } else {
          setAllowedTenants([]);
          setAclError('No access permissions found. Contact admin.');
        }
      } catch (err: any) {
        console.error('Failed to fetch ACL:', err);
        setAclError('Failed to load permissions. Contact admin.');
        setAllowedTenants([]);
      }
    };

    fetchACL();
  }, [user]);

  useEffect(() => {
    if (selectedTenant && hasAccess) {
      loadAllFeatureNames();
    } else {
      setAllFeatureNames([]);
      setFeatureName('');
      setRuleSets([]);
      setRawJSON('');
    }
  }, [selectedTenant, hasAccess]);

  useEffect(() => {
    if (!user || !selectedTenant || !hasAccess) return;
    if (featureName === '') return;
    if (allFeatureNames.includes(featureName)) {
      loadFeatureRule(featureName);
      setNewFeatureName(featureName);
    } else {
      setRuleSets([]);
      setRawJSON('');
    }
  }, [featureName, allFeatureNames, user, selectedTenant, hasAccess]);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setAuthError('');
    } catch (err: any) {
      setAuthError(err.message);
    }
  };

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setAuthError('');
    } catch (err: any) {
      setAuthError(err.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setSelectedTenant('');
    setFeatureName('');
    setAllowedTenants([]);
  };

  const loadAllFeatureNames = async () => {
    if (!user || !selectedTenant || !hasAccess) return;

    const docRef = doc(db, 'rules', selectedTenant);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      const rules = snapshot.data()?.rules || {};
      const featureNames = Object.keys(rules);
      setAllFeatureNames(featureNames);
    } else {
      setAllFeatureNames([]);
    }
  };

  const loadFeatureRule = async (feature: string) => {
    if (!user || !selectedTenant || !hasAccess) return;

    const docRef = doc(db, 'rules', selectedTenant);
    const snapshot = await getDoc(docRef);
       if (snapshot.exists()) {
      const ruleData = snapshot.data()?.rules?.[feature];
      if (Array.isArray(ruleData)) {
        const parsedRuleSets: RuleSet[] = ruleData.map((r: any) => {
          const eventConditions = r.conditions?.events || [];
          const userConditions = r.conditions?.user_properties || [];
          const deviceConditions = r.conditions?.device || [];

          const parseCondition = (c: any): Condition => ({
            key: c.key ?? c.event, // fallback for old rules if needed
            count: c.count ? String(Object.values(c.count as Record<string, any>)[0]) : '',
            countOperator: c.count ? Object.keys(c.count as Record<string, any>)[0] : '==',
            match: c.match
              ? Object.entries(c.match).map(([key, obj]) => ({
                  key,
                  operator: Object.keys(obj as Record<string, any>)[0],
                  value: String(Object.values(obj as Record<string, any>)[0])
                }))
              : []
          });

  return {
    value: String(r.value ?? ''),
    sequential: !!r.sequential,
    conditions: {
      events: eventConditions.map(parseCondition),
      user_properties: userConditions.map(parseCondition),
      device: deviceConditions.map(parseCondition)
    }
  };
});

        setRuleSets(parsedRuleSets);
        setRawJSON(JSON.stringify({ [feature]: ruleData }, null, 2));
      } else {
        setRuleSets([]);
        setRawJSON('');
      }
    }
  };

  const createRule = async () => {
    if (!featureName.trim() || !selectedTenant || !hasAccess) {
      alert('Please enter a feature name and ensure you have access to the selected package.');
      return;
    }

    if (allFeatureNames.includes(featureName)) {
      alert('Feature already exists. Use the dropdown to select it or choose a different name.');
      return;
    }

    const emptyRule = [{
      sequential: false,
      value: 'true',
      conditions: {
        events: [],
        user_properties: [],
        device: []
      }
    }];

    const docRef = doc(db, 'rules', selectedTenant);
    const snapshot = await getDoc(docRef);
    let rules = snapshot.exists() ? snapshot.data().rules || {} : {};
    rules[featureName] = emptyRule;

    try {
      await setDoc(docRef, { rules }, { merge: true });
      setStatusMessage('✅ Rule created successfully! Now add conditions.');
      const finalPayload = { [featureName]: emptyRule };
      setRuleSets(emptyRule);
      setRawJSON(JSON.stringify(finalPayload, null, 2));
      setAllFeatureNames(prev => [...prev, featureName]);
    } catch (err) {
      console.error(err);
      setStatusMessage('❌ Failed to create rule.');
    }
  };

  const saveRule = async () => {
    if (!featureName || ruleSets.length === 0 || !selectedTenant || !hasAccess) {
      alert('Please ensure you have a feature name, at least one rule set with conditions, and access to the selected package.');
      return;
    }

const formatted = ruleSets.map((rule) => {
  const serializeGroup = (group: Condition[]) => {
    return group.map((c) => {
      const result: any = {};

      // Key and optional operator
      result.key = c.key;
      if (c.operator && c.operator !== '==') {
        result.operator = c.operator;
      }

      // NOT logic
      if (c.not) {
        result.not = true;
      }

      // Count/value field
      if (c.count) {
        const parsed = ['in', 'not in'].includes(c.operator || '')
          ? c.count.split(',').map(v => v.trim())
          : isNaN(Number(c.count)) ? c.count : Number(c.count);
        result.count = { [c.countOperator]: parsed };
      }

      // Param block (renamed from match)
      if (c.match.length > 0 && c.match.some((m) => m.key && m.value)) {
        const param: Record<string, any> = {};
        c.match.forEach(({ key, value, operator }) => {
          if (key && value !== '') {
            const parsed = ['in', 'not in'].includes(operator)
              ? value.split(',').map(v => v.trim())
              : isNaN(Number(value)) ? value : Number(value);
            param[key] = { [operator]: parsed };
          }
        });
        result.param = param;
      }

      return result;
    });
  };

  return {
    value: isNaN(Number(rule.value)) ? rule.value : Number(rule.value),
    sequential: rule.sequential,
    conditions: {
      events: serializeGroup(rule.conditions.events),
      user_properties: serializeGroup(rule.conditions.user_properties),
      device: serializeGroup(rule.conditions.device)
    }
  };
});

    const docRef = doc(db, 'rules', selectedTenant);
    const snapshot = await getDoc(docRef);
    let rules = snapshot.exists() ? snapshot.data().rules || {} : {};
    rules[featureName] = formatted;

    const finalPayload = { [featureName]: formatted };
    setRawJSON(JSON.stringify(finalPayload, null, 2));

    try {
      await setDoc(docRef, { rules }, { merge: true });
      setStatusMessage('✅ Rule saved to Firestore!');
      await loadAllFeatureNames();
    } catch (err) {
      console.error(err);
      setStatusMessage('❌ Failed to save rule.');
    }
  };

  const handleRename = async () => {
    if (!featureName || !newFeatureName || featureName === newFeatureName || !selectedTenant || !hasAccess) {
      alert('Please provide a valid new feature name and ensure you have access.');
      return;
    }

    if (allFeatureNames.includes(newFeatureName)) {
      alert('A feature with that name already exists. Please choose a different name.');
      return;
    }

    const docRef = doc(db, 'rules', selectedTenant);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      const rules = snapshot.data().rules || {};
      const ruleData = rules[featureName];
      
      if (ruleData) {
        rules[newFeatureName] = ruleData;
        delete rules[featureName];
        
        try {
          await setDoc(docRef, { rules });
          setAllFeatureNames(prev => {
            const updated = prev.filter(name => name !== featureName);
            return [...updated, newFeatureName];
          });
          setFeatureName(newFeatureName);
          setIsRenaming(false);
          setStatusMessage('✅ Feature renamed successfully!');
        } catch (err) {
          console.error(err);
          setStatusMessage('❌ Failed to rename feature.');
        }
      }
    }
  };

  const deleteFeatureFromFirestore = async () => {
    if (!featureName || !selectedTenant || !hasAccess) return;
    
    if (!confirm(`Are you sure you want to delete the feature "${featureName}"?`)) {
      return;
    }

    const docRef = doc(db, 'rules', selectedTenant);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      const rules = snapshot.data().rules || {};
      delete rules[featureName];
      
      try {
        await setDoc(docRef, { rules });
        setAllFeatureNames(prev => prev.filter(name => name !== featureName));
        setFeatureName('');
        setNewFeatureName('');
        setRuleSets([]);
        setRawJSON('');
        setStatusMessage('✅ Feature deleted successfully!');
      } catch (err) {
        console.error(err);
        setStatusMessage('❌ Failed to delete feature.');
      }
    }
  };

  const applyPrebuiltTemplate = (template: typeof prebuiltTemplates[0]) => {
    setFeatureName(template.featureName);
    setRuleSets(template.ruleSets);
    setRawJSON(JSON.stringify({ [template.featureName]: template.ruleSets }, null, 2));
  };

  const addRuleSet = () => {
  setRuleSets([
    ...ruleSets,
    {
      value: '',
      sequential: false,
      conditions: {
        events: [],
        user_properties: [],
        device: []
      }
    }
    ]);
  };

  const duplicateRuleSet = (index: number) => {
    const ruleToDuplicate = ruleSets[index];
    const duplicated = JSON.parse(JSON.stringify(ruleToDuplicate));
    const updated = [...ruleSets];
    updated.splice(index + 1, 0, duplicated);
    setRuleSets(updated);
  };

  const deleteRuleSet = (index: number) => {
    const updated = ruleSets.filter((_, i) => i !== index);
    setRuleSets(updated);

    // Save the new state to Firestore
    setTimeout(() => saveRule(), 0); // defer save until state updates
  };
  
  const addCondition = (ruleIdx: number, group: keyof ConditionGroup) => {
    const updated = [...ruleSets];
    updated[ruleIdx].conditions[group].push({ key: '', match: [], count: '', countOperator: '==' });
    setRuleSets(updated);
  };

  const deleteCondition = (ruleIdx: number, group: keyof ConditionGroup, condIdx: number) => {
    const updated = [...ruleSets];
    updated[ruleIdx].conditions[group].splice(condIdx, 1);
    setRuleSets(updated);
  };

  const updateCondition = (
    ruleIdx: number,
    group: keyof ConditionGroup,
    condIdx: number,
    field: keyof Condition,
    value: string
  ) => {
    const updated = [...ruleSets];
    (updated[ruleIdx].conditions[group][condIdx] as any)[field] = value;
    setRuleSets(updated);
  };

  const addMatchParam = (ruleIdx: number, group: keyof ConditionGroup, condIdx: number) => {
    const updated = [...ruleSets];
    updated[ruleIdx].conditions[group][condIdx].match.push({ key: '', value: '', operator: '==' });
    setRuleSets(updated);
  };

  const deleteMatchParam = (
    ruleIdx: number,
    group: keyof ConditionGroup,
    condIdx: number,
    matchIdx: number
  ) => {
    const updated = [...ruleSets];
    updated[ruleIdx].conditions[group][condIdx].match.splice(matchIdx, 1);
    setRuleSets(updated);
  };

  const updateMatchParam = (
    ruleIdx: number,
    group: keyof ConditionGroup,
    condIdx: number,
    matchIdx: number,
    field: keyof MatchParam,
    value: string
  ) => {
    const updated = [...ruleSets];
    (updated[ruleIdx].conditions[group][condIdx].match[matchIdx] as any)[field] = value;
    setRuleSets(updated);
  };

  const updateRuleSetValue = (ruleIdx: number, value: string) => {
    const updated = [...ruleSets];
    updated[ruleIdx].value = value;
    setRuleSets(updated);
  };

  const updateRuleSetSequential = (ruleIdx: number) => {
    const updated = [...ruleSets];
    updated[ruleIdx].sequential = !updated[ruleIdx].sequential;
    setRuleSets(updated);
  };
  
  if (!user) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          borderRadius: '24px',
          padding: '3rem',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          width: '100%',
          maxWidth: '420px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '2.5rem'
          }}>
            <div style={{
              fontSize: '3rem',
              marginBottom: '1rem'
            }}>🧠</div>
            <h2 style={{ 
              color: '#1a202c', 
              margin: 0,
              fontSize: '1.875rem',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              AppFig Access
            </h2>
            <p style={{
              color: '#64748b',
              margin: '0.5rem 0 0 0',
              fontSize: '0.875rem'
            }}>
              Sign in to manage your feature flags
            </p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ 
                padding: '1rem 1.25rem', 
                width: '100%',
                borderRadius: '12px',
                border: '2px solid #e2e8f0',
                background: 'white',
                color: '#1a202c',
                fontSize: '1rem',
                fontWeight: '500',
                boxSizing: 'border-box',
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                outline: 'none'
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#667eea';
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.boxShadow = 'none';
              }}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ 
                padding: '1rem 1.25rem', 
                width: '100%',
                borderRadius: '12px',
                border: '2px solid #e2e8f0',
                background: 'white',
                color: '#1a202c',
                fontSize: '1rem',
                fontWeight: '500',
                boxSizing: 'border-box',
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                outline: 'none'
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#667eea';
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.boxShadow = 'none';
              }}
            />
          </div>
          
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
            <button 
              onClick={handleLogin} 
              style={{ 
                flex: 1,
                padding: '1rem 1.5rem',
                borderRadius: '12px',
                border: 'none',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
                outline: 'none'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.5)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
              }}
            >
              Sign In
            </button>
            <button 
              onClick={handleRegister} 
              style={{ 
                flex: 1,
                padding: '1rem 1.5rem',
                borderRadius: '12px',
                border: '2px solid #e2e8f0',
                background: 'white',
                color: '#64748b',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                outline: 'none'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = '#cbd5e1';
                e.currentTarget.style.color = '#475569';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.color = '#64748b';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Register
            </button>
          </div>
          
          {authError && (
            <div style={{ 
              marginTop: '1.5rem',
              padding: '1rem',
              background: '#fef2f2',
              color: '#dc2626',
              borderRadius: '12px',
              border: '1px solid #fecaca',
              fontSize: '0.875rem',
              fontWeight: '500'
            }}>
              {authError}
            </div>
          )}
        </div>
      </div>
    );
  }
  
  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      padding: '1.5rem'
    }}>
      <div style={{ maxWidth: '1600px', margin: '0 auto', width: '95%' }}>
        {/* Header */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '2rem',
          background: 'white',
          padding: '1.5rem 2rem',
          borderRadius: '20px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          border: '1px solid rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ fontSize: '2rem' }}>🧠</div>
            <h1 style={{ 
              margin: 0,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: '1.875rem',
              fontWeight: '700',
              letterSpacing: '-0.025em'
            }}>
              AppFig
            </h1>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              background: '#f8fafc',
              borderRadius: '12px',
              border: '1px solid #e2e8f0'
            }}>
              <div style={{ fontSize: '1rem' }}>👤</div>
              <span style={{ 
                color: '#64748b',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}>
                {user.email}
              </span>
            </div>
            <button 
              onClick={handleLogout} 
              style={{ 
                padding: '0.75rem 1.5rem',
                borderRadius: '12px',
                border: 'none',
                background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                color: 'white',
                fontSize: '0.875rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 4px 6px -1px rgba(239, 68, 68, 0.3)',
                outline: 'none'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 15px rgba(239, 68, 68, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(239, 68, 68, 0.3)';
              }}
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* Package Selection & Feature Management */}
        <div style={{ 
          background: 'white',
          padding: '2rem',
          borderRadius: '20px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          border: '1px solid rgba(255, 255, 255, 0.8)',
          marginBottom: '2rem',
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '2rem',
            alignItems: 'start'
          }}>
            {/* Package Selection */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <label style={{ 
                fontSize: '0.875rem', 
                fontWeight: '600', 
                color: '#374151',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span style={{ fontSize: '1.25rem' }}>📦</span>
                Package
              </label>
              <select 
                value={selectedTenant} 
                onChange={(e) => setSelectedTenant(e.target.value)}
                style={{ 
                  ...fieldStyle,
                  width: '100%'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#667eea';
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <option value="">Select Package</option>
                {allowedTenants.map((tenant) => (
                  <option key={tenant} value={tenant}>{tenant}</option>
                ))}
              </select>
              
              {/* Access Status Indicator */}
              {selectedTenant && (
                <div style={{
                  padding: '0.75rem 1rem',
                  borderRadius: '12px',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  background: hasAccess ? '#f0f9ff' : '#fef2f2',
                  color: hasAccess ? '#0369a1' : '#dc2626',
                  border: `2px solid ${hasAccess ? '#bae6fd' : '#fecaca'}`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
                }}>
                  <span>{hasAccess ? '✅' : '❌'}</span>
                  {hasAccess ? 'Access Granted' : 'No Access'}
                </div>
              )}
            </div>

            {/* Feature Selection */}
            {hasAccess && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <label style={{ 
                  fontSize: '0.875rem', 
                  fontWeight: '600', 
                  color: '#374151',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <span style={{ fontSize: '1.25rem' }}>🎯</span>
                  Feature
                </label>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <select 
                    value={featureName} 
                    onChange={(e) => setFeatureName(e.target.value)}
                    style={{ 
                      ...fieldStyle,
                      flex: 1
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#667eea';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#e2e8f0';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <option value="">Select or Create Feature</option>
                    {allFeatureNames.map((f) => (
                      <option key={f} value={f}>{f}</option>
                    ))}
                  </select>
                  
                  {!isExistingFeature && (
                    <input
                      placeholder="New feature name"
                      value={featureName}
                      onChange={(e) => setFeatureName(e.target.value)}
                      style={{ 
                        ...fieldStyle,
                        flex: 1
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#667eea';
                        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#e2e8f0';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  )}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            {hasAccess && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <label style={{ 
                  fontSize: '0.875rem', 
                  fontWeight: '600', 
                  color: '#374151',
                  opacity: 0
                }}>
                  Actions
                </label>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  {isExistingFeature ? (
                    <>
                      {isRenaming ? (
                        <>
                          <input
                            placeholder="New feature name"
                            value={newFeatureName}
                            onChange={(e) => setNewFeatureName(e.target.value)}
                            style={{ 
                              ...fieldStyle,
                              minWidth: '160px'
                            }}
                          />
                          <button 
                            onClick={handleRename} 
                            style={{ 
                              padding: '0.75rem 1rem',
                              borderRadius: '12px',
                              border: 'none',
                              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                              color: 'white',
                              fontSize: '0.875rem',
                              fontWeight: '600',
                              cursor: 'pointer',
                              transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                              outline: 'none'
                            }}
                          >
                            ✓
                          </button>
                          <button 
                            onClick={() => {
                              setIsRenaming(false);
                              setNewFeatureName(featureName);
                            }} 
                            style={{ 
                              padding: '0.75rem 1rem',
                              borderRadius: '12px',
                              border: 'none',
                              background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                              color: 'white',
                              fontSize: '0.875rem',
                              fontWeight: '600',
                              cursor: 'pointer',
                              transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                              outline: 'none'
                            }}
                          >
                            ✕
                          </button>
                        </>
                      ) : (
                        <>
                          <button 
                            onClick={() => {
                              setIsRenaming(true);
                              setNewFeatureName(featureName);
                            }} 
                            style={{ 
                              padding: '0.75rem 1rem',
                              borderRadius: '12px',
                              border: 'none',
                              background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                              color: 'white',
                              fontSize: '0.875rem',
                              fontWeight: '600',
                              cursor: 'pointer',
                              transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                              outline: 'none',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.5rem'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                          >
                            ✏️ Rename
                          </button>
                          <button 
                            onClick={deleteFeatureFromFirestore} 
                            style={{ 
                              padding: '0.75rem 1rem',
                              borderRadius: '12px',
                              border: 'none',
                              background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                              color: 'white',
                              fontSize: '0.875rem',
                              fontWeight: '600',
                              cursor: 'pointer',
                              transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                              outline: 'none',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.5rem'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                          >
                            🗑 Delete
                          </button>
                          <div style={{ position: 'relative' }}>
                            <button 
                              onClick={saveRule} 
                              style={{ 
                                padding: '0.75rem 1.5rem',
                                borderRadius: '12px',
                                border: 'none',
                                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                                color: 'white',
                                fontSize: '0.875rem',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                outline: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                              }}
                              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                              💾 Save Changes
                            </button>
                            {statusMessage && (
                              <div style={{
                                position: 'absolute',
                                top: '-50px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                background: statusMessage.includes('❌') ? '#ef4444' : '#10b981',
                                color: 'white',
                                padding: '0.75rem 1rem',
                                borderRadius: '12px',
                                fontSize: '0.875rem',
                                fontWeight: '600',
                                whiteSpace: 'nowrap',
                                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                                zIndex: 1000,
                                animation: 'fadeIn 0.3s ease-out'
                              }}>
                                {statusMessage}
                              </div>
                            )}
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    <button 
                      onClick={createRule} 
                      disabled={!featureName.trim()}
                      style={{ 
                        padding: '0.75rem 1.5rem',
                        borderRadius: '12px',
                        border: 'none',
                        background: featureName.trim() 
                          ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
                          : '#e2e8f0',
                        color: featureName.trim() ? 'white' : '#94a3b8',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        cursor: featureName.trim() ? 'pointer' : 'not-allowed',
                        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                        outline: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}
                      onMouseOver={(e) => {
                        if (featureName.trim()) {
                          e.currentTarget.style.transform = 'translateY(-2px)';
                        }
                      }}
                      onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                      💾 Create Feature
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Error Messages */}
          {aclError && (
            <div style={{
              marginTop: '1.5rem',
              padding: '1rem 1.25rem',
              background: '#fef2f2',
              color: '#dc2626',
              borderRadius: '12px',
              border: '2px solid #fecaca',
              fontSize: '0.875rem',
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <span style={{ fontSize: '1.25rem' }}>⚠️</span>
              {aclError}
            </div>
          )}
        </div>

        {/* Templates Section */}
        {hasAccess && (
          <div style={{ 
            background: 'white',
            padding: '2rem',
            borderRadius: '20px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.8)',
            marginBottom: '2rem',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <span style={{ fontSize: '1.25rem' }}>📦</span>
                <span style={{ 
                  fontSize: '1rem', 
                  fontWeight: '600', 
                  color: '#374151'
                }}>
                  Quick Start Templates
                </span>
              </div>
              <select
                onChange={(e) => {
                  const selected = prebuiltTemplates.find((t) => t.featureName === e.target.value);
                  if (selected) applyPrebuiltTemplate(selected);
                }}
                defaultValue=""
                style={{ 
                  ...fieldStyle,
                  minWidth: '200px'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#667eea';
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <option value="">Select a Template</option>
                {prebuiltTemplates.map((t) => (
                  <option key={t.featureName} value={t.featureName}>{t.label}</option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* Rule Sets Section */}
        {hasAccess && ruleSets.length > 0 && (
          <div style={{ 
            background: 'white',
            padding: '2rem',
            borderRadius: '20px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.8)',
            marginBottom: '2rem',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '2rem'
            }}>
              <span style={{ fontSize: '1.5rem' }}>🎛️</span>
              <h3 style={{ 
                margin: 0,
                color: '#1f2937',
                fontSize: '1.5rem',
                fontWeight: '700'
              }}>
                Rule Configuration
              </h3>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {ruleSets.map((rule, ruleIdx) => (
                <div key={ruleIdx} style={{ 
                  border: '2px solid #f1f5f9',
                  padding: '2rem',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #fafbfc 0%, #f8fafc 100%)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative'
                }}>
                  {/* Rule Set Header */}
                  <div style={{ 
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '1.5rem',
                    marginBottom: '2rem',
                    alignItems: 'end'
                  }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <label style={{ fontSize: '0.875rem', fontWeight: '600', color: '#374151' }}>
                        Return Value
                      </label>
                      <input
                        value={rule.value}
                        onChange={(e) => updateRuleSetValue(ruleIdx, e.target.value)}
                        placeholder="e.g., true, 1, retro"
                        style={{ 
                          ...fieldStyle,
                          width: '100%'
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = '#667eea';
                          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = '#e2e8f0';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      />
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <label style={{ fontSize: '0.875rem', fontWeight: '600', color: '#374151' }}>
                        Options
                      </label>
                      <label style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.75rem',
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        color: '#64748b',
                        cursor: 'pointer',
                        padding: '0.75rem 1rem',
                        background: 'white',
                        borderRadius: '12px',
                        border: '2px solid #e2e8f0',
                        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}>
                        <input
                          type="checkbox"
                          checked={rule.sequential}
                          onChange={() => updateRuleSetSequential(ruleIdx)}
                          style={{ 
                            width: '1.25rem',
                            height: '1.25rem',
                            accentColor: '#667eea'
                          }}
                        />
                        Sequential Order
                      </label>
                    </div>
                    
                    <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
                      <button 
                        onClick={() => duplicateRuleSet(ruleIdx)} 
                        style={{ 
                          padding: '0.75rem 1rem',
                          borderRadius: '12px',
                          border: 'none',
                          background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                          color: 'white',
                          fontSize: '0.875rem',
                          fontWeight: '600',
                          cursor: 'pointer',
                          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                          outline: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                      >
                        📄 Duplicate
                      </button>
                      <button 
                        onClick={() => deleteRuleSet(ruleIdx)} 
                        style={{ 
                          padding: '0.75rem 1rem',
                          borderRadius: '12px',
                          border: 'none',
                          background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                          color: 'white',
                          fontSize: '0.875rem',
                          fontWeight: '600',
                          cursor: 'pointer',
                          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                          outline: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                      >
                        🗑 Remove
                      </button>
                    </div>
                  </div>

                  {/* Conditions */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: '2rem'
                  }}>
                    {(['events', 'user_properties', 'device'] as const).map((groupKey) => (
                      <div key={groupKey} style={{ 
                        background: 'white',
                        padding: '1.5rem',
                        borderRadius: '16px',
                        border: '2px solid #f1f5f9',
                        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.75rem',
                          marginBottom: '1.5rem'
                        }}>
                          <span style={{ fontSize: '1.25rem' }}>
                            {groupKey === 'events' ? '📋' : groupKey === 'user_properties' ? '👤' : '📱'}
                          </span>
                          <h4 style={{ 
                            margin: 0,
                            fontSize: '1.125rem', 
                            fontWeight: '600',
                            color: '#1f2937',
                            textTransform: 'capitalize'
                          }}>
                            {groupKey.replace('_', ' ')} Conditions
                          </h4>
                        </div>

                        {rule.conditions[groupKey].length === 0 && (
                          <div style={{ 
                            padding: '2rem',
                            textAlign: 'center',
                            color: '#9ca3af',
                            fontStyle: 'italic',
                            fontSize: '0.875rem',
                            background: '#f9fafb',
                            borderRadius: '12px',
                            border: '2px dashed #e5e7eb',
                            marginBottom: '1rem'
                          }}>
                            No conditions yet. Add your first condition below.
                          </div>
                        )}

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                          {rule.conditions[groupKey].map((cond, condIdx) => (
                            <div key={condIdx} style={{ 
                              padding: '1.5rem',
                              border: '2px solid #e5e7eb',
                              borderRadius: '12px',
                              background: '#fafbfc',
                              transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}>
                              {/* Main condition controls */}
                              <div style={{ 
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                                gap: '1rem',
                                marginBottom: '1rem',
                                alignItems: 'end'
                              }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                  <label style={{ fontSize: '0.75rem', fontWeight: '600', color: '#6b7280' }}>
                                    {groupKey === 'events' ? 'Event' : groupKey === 'user_properties' ? 'Property' : 'Device Key'}
                                  </label>
                                  <select
                                    value={cond.key}
                                    onChange={(e) => updateCondition(ruleIdx, groupKey, condIdx, 'key', e.target.value)}
                                    style={{ 
                                      ...fieldStyle,
                                      width: '100%',
                                      fontSize: '0.8125rem'
                                    }}
                                  >
                                    <option value="">Select {groupKey === 'events' ? 'Event' : groupKey === 'user_properties' ? 'Property' : 'Key'}</option>
                                    {keyOptions[groupKey].map((key) => (
                                      <option key={key} value={key}>{key}</option>
                                    ))}
                                  </select>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                  <label style={{ fontSize: '0.75rem', fontWeight: '600', color: '#6b7280' }}>
                                    Operator
                                  </label>
                                  <select
                                    value={cond.operator || '=='}
                                    onChange={(e) => updateCondition(ruleIdx, groupKey, condIdx, 'operator', e.target.value)}
                                    style={{ 
                                      ...fieldStyle,
                                      width: '100%',
                                      fontSize: '0.8125rem'
                                    }}
                                  >
                                    {operatorOptions.map((op) => (
                                      <option key={op} value={op}>{op}</option>
                                    ))}
                                  </select>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                  <label style={{ fontSize: '0.75rem', fontWeight: '600', color: '#6b7280' }}>
                                    NOT
                                  </label>
                                  <label style={{ 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    gap: '0.5rem',
                                    fontSize: '0.8125rem',
                                    fontWeight: '500',
                                    color: '#64748b',
                                    cursor: 'pointer',
                                    padding: '0.75rem',
                                    background: 'white',
                                    borderRadius: '8px',
                                    border: '2px solid #e2e8f0',
                                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                    height: '44px'
                                  }}>
                                    <input
                                      type="checkbox"
                                      checked={cond.not || false}
                                      onChange={(e) =>
                                        updateCondition(ruleIdx, groupKey, condIdx, 'not', e.target.checked.toString())
                                      }
                                      style={{ 
                                        width: '1rem',
                                        height: '1rem',
                                        accentColor: '#ef4444'
                                      }}
                                    />
                                  </label>
                                </div>

                                {groupKey === 'events' ? (
                                  <>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                      <label style={{ fontSize: '0.75rem', fontWeight: '600', color: '#6b7280' }}>
                                        Count Op
                                      </label>
                                      <select
                                        value={cond.countOperator}
                                        onChange={(e) => updateCondition(ruleIdx, groupKey, condIdx, 'countOperator', e.target.value)}
                                        style={{
                                          ...fieldStyle,
                                          width: '100%',
                                          fontSize: '0.8125rem'
                                        }}
                                      >
                                        {countOperatorOptions.map((op) => (
                                          <option key={op} value={op}>{op}</option>
                                        ))}
                                      </select>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                      <label style={{ fontSize: '0.75rem', fontWeight: '600', color: '#6b7280' }}>
                                        Count
                                      </label>
                                      <input
                                        type="number"
                                        placeholder="Count"
                                        value={cond.count}
                                        onChange={(e) => updateCondition(ruleIdx, groupKey, condIdx, 'count', e.target.value)}
                                        style={{
                                          ...fieldStyle,
                                          width: '100%',
                                          fontSize: '0.8125rem'
                                        }}
                                      />
                                    </div>
                                  </>
                                ) : (
                                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', gridColumn: 'span 2' }}>
                                    <label style={{ fontSize: '0.75rem', fontWeight: '600', color: '#6b7280' }}>
                                      Value
                                    </label>
                                    <input
                                      type="text"
                                      placeholder="e.g. yes, premium, US"
                                      value={cond.count}
                                      onChange={(e) => updateCondition(ruleIdx, groupKey, condIdx, 'count', e.target.value)}
                                      style={{
                                        ...fieldStyle,
                                        width: '100%',
                                        fontSize: '0.8125rem'
                                      }}
                                    />
                                  </div>
                                )}

                                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                  <button 
                                    onClick={() => deleteCondition(ruleIdx, groupKey, condIdx)} 
                                    style={{ 
                                      padding: '0.75rem',
                                      borderRadius: '8px',
                                      border: 'none',
                                      background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                                      color: 'white',
                                      fontSize: '0.875rem',
                                      fontWeight: '600',
                                      cursor: 'pointer',
                                      transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                      outline: 'none',
                                      height: '44px',
                                      width: '44px',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center'
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                  >
                                    🗑
                                  </button>
                                </div>
                              </div>

                              {/* Match Parameters */}
                              <div style={{ 
                                borderTop: '1px solid #e5e7eb',
                                paddingTop: '1rem'
                              }}>
                                <div style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '0.5rem',
                                  marginBottom: '0.75rem'
                                }}>
                                  <span style={{ fontSize: '0.875rem', fontWeight: '600', color: '#374151' }}>
                                    Match Parameters
                                  </span>
                                  <button 
                                    onClick={() => addMatchParam(ruleIdx, groupKey, condIdx)} 
                                    style={{ 
                                      padding: '0.5rem 0.75rem',
                                      borderRadius: '8px',
                                      border: 'none',
                                      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                                      color: 'white',
                                      fontSize: '0.75rem',
                                      fontWeight: '600',
                                      cursor: 'pointer',
                                      transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                      outline: 'none'
                                    }}
                                  >
                                    + Add
                                  </button>
                                </div>
                                
                                {cond.match.length === 0 ? (
                                  <div style={{
                                    padding: '1rem',
                                    textAlign: 'center',
                                    color: '#9ca3af',
                                    fontSize: '0.8125rem',
                                    fontStyle: 'italic',
                                    background: '#f9fafb',
                                    borderRadius: '8px',
                                    border: '1px dashed #d1d5db'
                                  }}>
                                    No match parameters
                                  </div>
                                ) : (
                                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    {cond.match.map((m, mIdx) => (
                                      <div key={mIdx} style={{ 
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                                        gap: '0.75rem',
                                        alignItems: 'center',
                                        padding: '0.75rem',
                                        background: 'white',
                                        borderRadius: '8px',
                                        border: '1px solid #e5e7eb'
                                      }}>
                                        <select
                                          value={m.key}
                                          onChange={(e) => updateMatchParam(ruleIdx, groupKey, condIdx, mIdx, 'key', e.target.value)}
                                          style={{ 
                                            ...fieldStyle,
                                            fontSize: '0.8125rem',
                                            padding: '0.5rem 0.75rem'
                                          }}
                                        >
                                          <option value="">Select Param</option>
                                          {(defaultParamOptions[cond.key] || []).map((p) => (
                                            <option key={p} value={p}>{p}</option>
                                          ))}
                                        </select>
                                        <select
                                          value={m.operator}
                                          onChange={(e) => updateMatchParam(ruleIdx, groupKey, condIdx, mIdx, 'operator', e.target.value)}
                                          style={{ 
                                            ...fieldStyle,
                                            fontSize: '0.8125rem',
                                            padding: '0.5rem 0.75rem'
                                          }}
                                        >
                                          {operatorOptions.map((op) => (
                                            <option key={op} value={op}>{op}</option>
                                          ))}
                                        </select>
                                        <input
                                          value={m.value}
                                          placeholder="Value"
                                          onChange={(e) => updateMatchParam(ruleIdx, groupKey, condIdx, mIdx, 'value', e.target.value)}
                                          style={{ 
                                            ...fieldStyle,
                                            fontSize: '0.8125rem',
                                            padding: '0.5rem 0.75rem'
                                          }}
                                        />
                                        <button 
                                          onClick={() => deleteMatchParam(ruleIdx, groupKey, condIdx, mIdx)} 
                                          style={{ 
                                            padding: '0.5rem',
                                            borderRadius: '6px',
                                            border: 'none',
                                            background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                                            color: 'white',
                                            fontSize: '0.75rem',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                            outline: 'none',
                                            width: '32px',
                                            height: '32px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                          }}
                                        >
                                          ❌
                                        </button>
                                      </div>
                                    ))}
                                  </div>
                                )}

                                {['in', 'not in'].some(op => cond.match.some(m => m.operator === op)) && (
                                  <div style={{ 
                                    marginTop: '0.5rem',
                                    fontSize: '0.75rem', 
                                    color: '#6b7280',
                                    fontStyle: 'italic'
                                  }}>
                                    💡 Tip: Separate values with commas for "in" and "not in" operators
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>

                        <button 
                          onClick={() => addCondition(ruleIdx, groupKey)}
                          style={{
                            width: '100%',
                            padding: '1rem 1.5rem',
                            borderRadius: '12px',
                            border: '2px dashed #cbd5e1',
                            background: 'transparent',
                            color: '#64748b',
                            fontSize: '0.875rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                            outline: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem'
                          }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.borderColor = '#10b981';
                            e.currentTarget.style.color = '#10b981';
                            e.currentTarget.style.background = '#f0fdf4';
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.borderColor = '#cbd5e1';
                            e.currentTarget.style.color = '#64748b';
                            e.currentTarget.style.background = 'transparent';
                          }}
                        >
                          + Add {groupKey.replace('_', ' ')} Condition
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <button 
                onClick={addRuleSet} 
                style={{ 
                  width: '100%',
                  padding: '1.5rem 2rem',
                  borderRadius: '16px',
                  border: '2px dashed #cbd5e1',
                  background: 'transparent',
                  color: '#64748b',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  outline: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = '#667eea';
                  e.currentTarget.style.color = '#667eea';
                  e.currentTarget.style.background = '#f8fafc';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = '#cbd5e1';
                  e.currentTarget.style.color = '#64748b';
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span style={{ fontSize: '1.25rem' }}>+</span>
                Add Rule Set
              </button>
            </div>
          </div>
        )}

        {/* JSON Preview */}
        {hasAccess && rawJSON && (
          <div style={{ 
            background: 'white',
            padding: '2rem',
            borderRadius: '20px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1.5rem'
            }}>
              <span style={{ fontSize: '1.5rem' }}>📄</span>
              <h3 style={{ 
                margin: 0,
                color: '#1f2937',
                fontSize: '1.5rem',
                fontWeight: '700'
              }}>
                Generated JSON Preview
              </h3>
            </div>
            <div style={{
              background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
              borderRadius: '16px',
              padding: '0',
              overflow: 'hidden',
              border: '1px solid #334155'
            }}>
              <div style={{
                background: '#1e293b',
                padding: '1rem 1.5rem',
                borderBottom: '1px solid #334155',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }}></div>
                <span style={{ marginLeft: '1rem', color: '#94a3b8', fontSize: '0.875rem', fontWeight: '500' }}>
                  feature-config.json
                </span>
              </div>
              <pre style={{
                background: 'transparent',
                padding: '1.5rem',
                margin: 0,
                maxHeight: '500px',
                overflow: 'auto',
                fontSize: '0.875rem',
                lineHeight: '1.6',
                color: '#e2e8f0',
                fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word'
              }}>
                {rawJSON}
              </pre>
            </div>
          </div>
        )}
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        input:focus, select:focus {
          outline: none !important;
        }
        
        /* Custom scrollbar for JSON preview */
        pre::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        pre::-webkit-scrollbar-track {
          background: #334155;
          border-radius: 4px;
        }
        
        pre::-webkit-scrollbar-thumb {
          background: #64748b;
          border-radius: 4px;
        }
        
        pre::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  );
}