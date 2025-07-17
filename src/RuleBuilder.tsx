import { useState, useEffect } from 'react';
import { db, auth } from './FirebaseConfig';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import type { User } from 'firebase/auth';

const eventOptions = ['level_complete', 'level_failed', 'watch_ad', 'purchase', 'session_start'] as const;
const userPropertyOptions = ['subscriber_segment', 'user_level', 'total_purchases', 'days_since_install'] as const;
const deviceOptions = ['country', 'platform', 'app_version', 'device_type'] as const;

const eventOperators = ['==', '>=', '<=', '>', '<'] as const;
const valueOperators = ['==', '!=', '>=', '<=', '>', '<', 'in', 'not_in'] as const;
const paramOperators = ['==', '!=', 'in', 'not_in', 'contains'] as const;

type EventCondition = {
  key: string;
  count: { [operator: string]: number };
  repeat: { [operator: string]: number };
  useRepeat?: boolean;
  within_last_days?: number;
  param?: { [key: string]: { [operator: string]: string | string[] } };
  not: boolean;
};

type UserPropertyCondition = {
  key: string;
  value: { [operator: string]: string | number | string[] };
  not: boolean;
};

type DeviceCondition = {
  key: string;
  value: { [operator: string]: string | string[] };
  not: boolean;
};

type Conditions = {
  events?: EventCondition[];
  user_properties?: UserPropertyCondition[];
  device?: DeviceCondition[];
};

type RuleSet = {
  value: string;
  sequential: boolean;
  conditions: Conditions;
};

const prebuiltTemplates = [
  {
    featureName: 'skin_theme',
    label: 'Skin Theme Example',
    ruleSets: [
      {
        value: 'retro',
        sequential: true,
        conditions: {
          events: [
            {
              key: 'level_complete',
              count: { '==': 3 },
              within_last_days: 7,
              param: {
                reason: { in: ['timeout', 'manual'] }
              },
              not: false
            }
          ],
          user_properties: [
            {
              key: 'subscriber_segment',
              value: { '==': 'BEST' },
              not: true
            }
          ],
          device: [
            {
              key: 'country',
              value: { in: ['US', 'CA'] },
              not: false
            }
          ]
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
        const parsedRuleSets: RuleSet[] = ruleData.map((r: any) => ({
          value: String(r.value ?? ''),
          sequential: !!r.sequential,
          conditions: {
            events: (r.conditions?.events || []).map((e: any) => ({
              key: e.key || '',
              count: e.count || { '==': 1 },
              within_last_days: e.within_last_days || '',
              param: e.param || {},
              not: !!e.not
            })),
            user_properties: (r.conditions?.user_properties || []).map((u: any) => ({
              key: u.key || '',
              value: u.value || { '==': '' },
              not: !!u.not
            })),
            device: (r.conditions?.device || []).map((d: any) => ({
              key: d.key || '',
              value: d.value || { '==': '' },
              not: !!d.not
            }))
          }
        }));
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
      setRuleSets([{ 
        value: 'true', 
        sequential: false, 
        conditions: { 
          events: [], 
          user_properties: [], 
          device: [] 
        } 
      }]);
      setRawJSON(JSON.stringify({ [featureName]: emptyRule }, null, 2));
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
      const formattedConditions: any = {
        events: rule.conditions.events?.map((e) => {
          const event: any = {
            key: e.key,
            count: e.count,
            not: e.not
          };
          if (e.within_last_days && e.within_last_days !== '') {
            event.within_last_days = Number(e.within_last_days);
          }
          if (e.param && Object.keys(e.param).length > 0) {
            event.param = e.param;
          }
          return event;
        }) || [],
        user_properties: rule.conditions.user_properties?.map((u) => ({
          key: u.key,
          value: u.value,
          not: u.not
        })) || [],
        device: rule.conditions.device?.map((d) => ({
          key: d.key,
          value: d.value,
          not: d.not
        })) || []
      };

      return {
        sequential: rule.sequential,
        value: isNaN(Number(rule.value)) ? rule.value : Number(rule.value),
        conditions: formattedConditions
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
          await setDoc(docRef, { rules }, { merge: true });
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
        await setDoc(docRef, { rules }, { merge: true });
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
    setRuleSets([...ruleSets, { 
      value: '', 
      sequential: false, 
      conditions: { 
        events: [], 
        user_properties: [], 
        device: [] 
      } 
    }]);
  };

  const duplicateRuleSet = (index: number) => {
    const ruleToDuplicate = ruleSets[index];
    const duplicated = JSON.parse(JSON.stringify(ruleToDuplicate));
    const updated = [...ruleSets];
    updated.splice(index + 1, 0, duplicated);
    setRuleSets(updated);
  };

  const deleteRuleSet = (index: number) => {
    setRuleSets(ruleSets.filter((_, i) => i !== index));
  };

  // Event condition helpers
  const addEventCondition = (ruleIdx: number) => {
    const updated = [...ruleSets];
    updated[ruleIdx].conditions.events = updated[ruleIdx].conditions.events || [];
    updated[ruleIdx].conditions.events!.push({
      key: '',
      count: { '==': 1 },
      within_last_days: '',
      param: {},
      not: false
    });
    setRuleSets(updated);
  };

  const deleteEventCondition = (ruleIdx: number, condIdx: number) => {
    const updated = [...ruleSets];
    updated[ruleIdx].conditions.events!.splice(condIdx, 1);
    setRuleSets(updated);
  };

  const updateEventCondition = (ruleIdx: number, condIdx: number, field: string, value: any) => {
    const updated = [...ruleSets];
    const condition = updated[ruleIdx].conditions.events![condIdx];
    
    if (field === 'key') {
      condition.key = value;
    } else if (field === 'count') {
      const operator = Object.keys(condition.count)[0] || '==';
      condition.count = { [operator]: Number(value) };
    } else if (field === 'countOperator') {
      const currentValue = Object.values(condition.count)[0] || 1;
      condition.count = { [value]: currentValue };
    } else if (field === 'within_last_days') {
      condition.within_last_days = value;
    } else if (field === 'not') {
      condition.not = value;
    }
    
    setRuleSets(updated);
  };

  // User property condition helpers
  const addUserPropertyCondition = (ruleIdx: number) => {
    const updated = [...ruleSets];
    updated[ruleIdx].conditions.user_properties = updated[ruleIdx].conditions.user_properties || [];
    updated[ruleIdx].conditions.user_properties!.push({
      key: '',
      value: { '==': '' },
      not: false
    });
    setRuleSets(updated);
  };

  const deleteUserPropertyCondition = (ruleIdx: number, condIdx: number) => {
    const updated = [...ruleSets];
    updated[ruleIdx].conditions.user_properties!.splice(condIdx, 1);
    setRuleSets(updated);
  };

  const updateUserPropertyCondition = (ruleIdx: number, condIdx: number, field: string, value: any) => {
    const updated = [...ruleSets];
    const condition = updated[ruleIdx].conditions.user_properties![condIdx];
    
    if (field === 'key') {
      condition.key = value;
    } else if (field === 'value') {
      const operator = Object.keys(condition.value)[0] || '==';
      condition.value = { [operator]: value };
    } else if (field === 'valueOperator') {
      const currentValue = Object.values(condition.value)[0] || '';
      condition.value = { [value]: currentValue };
    } else if (field === 'not') {
      condition.not = value;
    }
    
    setRuleSets(updated);
  };

  // Device condition helpers
  const addDeviceCondition = (ruleIdx: number) => {
    const updated = [...ruleSets];
    updated[ruleIdx].conditions.device = updated[ruleIdx].conditions.device || [];
    updated[ruleIdx].conditions.device!.push({
      key: '',
      value: { '==': '' },
      not: false
    });
    setRuleSets(updated);
  };

  const deleteDeviceCondition = (ruleIdx: number, condIdx: number) => {
    const updated = [...ruleSets];
    updated[ruleIdx].conditions.device!.splice(condIdx, 1);
    setRuleSets(updated);
  };

  const updateDeviceCondition = (ruleIdx: number, condIdx: number, field: string, value: any) => {
    const updated = [...ruleSets];
    const condition = updated[ruleIdx].conditions.device![condIdx];
    
    if (field === 'key') {
      condition.key = value;
    } else if (field === 'value') {
      const operator = Object.keys(condition.value)[0] || '==';
      condition.value = { [operator]: value };
    } else if (field === 'valueOperator') {
      const currentValue = Object.values(condition.value)[0] || '';
      condition.value = { [value]: currentValue };
    } else if (field === 'not') {
      condition.not = value;
    }
    
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
        padding: '2rem'
      }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          padding: '3rem',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          width: '100%',
          maxWidth: '400px'
        }}>
          <h2 style={{ 
            color: 'white', 
            textAlign: 'center', 
            marginBottom: '2rem',
            fontSize: '1.8rem',
            fontWeight: '600'
          }}>
            🔐 SmartConfig Access
          </h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ 
              display: 'block', 
              marginBottom: '1rem', 
              padding: '1rem', 
              width: '100%',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              background: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              fontSize: '1rem',
              backdropFilter: 'blur(5px)',
              boxSizing: 'border-box'
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ 
              display: 'block', 
              marginBottom: '1.5rem', 
              padding: '1rem', 
              width: '100%',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              background: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              fontSize: '1rem',
              backdropFilter: 'blur(5px)',
              boxSizing: 'border-box'
            }}
          />
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button 
              onClick={handleLogin} 
              style={{ 
                flex: 1,
                padding: '1rem',
                borderRadius: '12px',
                border: 'none',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'transform 0.2s ease',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Sign In
            </button>
            <button 
              onClick={handleRegister} 
              style={{ 
                flex: 1,
                padding: '1rem',
                borderRadius: '12px',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                background: 'transparent',
                color: 'white',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Register
            </button>
          </div>
          {authError && (
            <p style={{ 
              color: '#ff6b6b', 
              marginTop: '1rem', 
              textAlign: 'center',
              fontSize: '0.9rem'
            }}>
              {authError}
            </p>
          )}
        </div>
      </div>
    );
  }
  
  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      padding: '2rem'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '2rem',
          background: 'white',
          padding: '1.5rem 2rem',
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.8)'
        }}>
          <h2 style={{ 
            margin: 0,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: '1.8rem',
            fontWeight: '700'
          }}>
            ⚡ SmartConfig Rule Builder
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ 
              color: '#666',
              fontSize: '0.9rem'
            }}>
              👤 {user.email}
            </span>
            <button 
              onClick={handleLogout} 
              style={{ 
                padding: '0.75rem 1.5rem',
                borderRadius: '10px',
                border: 'none',
                background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
                color: 'white',
                fontSize: '0.9rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'transform 0.2s ease',
                boxShadow: '0 2px 10px rgba(255, 107, 107, 0.3)'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Logout
            </button>
          </div>
        </div>

        {/* Package Selection & Feature Management */}
        <div style={{ 
          background: 'white',
          padding: '1.5rem 2rem',
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.8)',
          marginBottom: '2rem'
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1rem', 
            flexWrap: 'wrap'
          }}>
            {/* Package Selection */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ 
                fontSize: '0.9rem', 
                fontWeight: '600', 
                color: '#555',
                minWidth: '60px'
              }}>
                📦 Package:
              </span>
              <select 
                value={selectedTenant} 
                onChange={(e) => setSelectedTenant(e.target.value)}
                style={{ 
                  padding: '0.75rem 1rem',
                  borderRadius: '10px',
                  border: '2px solid #e1e8ed',
                  background: 'white',
                  color: '#333',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  minWidth: '180px'
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = '#667eea'}
                onBlur={(e) => e.currentTarget.style.borderColor = '#e1e8ed'}
              >
                <option value="">Select Package</option>
                {allowedTenants.map((tenant) => (
                  <option key={tenant} value={tenant}>{tenant}</option>
                ))}
              </select>
              
              {/* Access Status Indicator */}
              {selectedTenant && (
                <span style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  background: hasAccess ? '#d4edda' : '#f8d7da',
                  color: hasAccess ? '#155724' : '#721c24',
                  border: `1px solid ${hasAccess ? '#c3e6cb' : '#f5c6cb'}`
                }}>
                  {hasAccess ? '✅ Access Granted' : '❌ No Access'}
                </span>
              )}
            </div>

            {/* Feature Selection - Only show when package is selected and has access */}
            {hasAccess && (
              <>
                <div style={{ width: '1px', height: '30px', background: '#e1e8ed', margin: '0 0.5rem' }} />
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ 
                    fontSize: '0.9rem', 
                    fontWeight: '600', 
                    color: '#555',
                    minWidth: '60px'
                  }}>
                    🎯 Feature:
                  </span>
                  <select 
                    value={featureName} 
                    onChange={(e) => setFeatureName(e.target.value)}
                    style={{ 
                      padding: '0.75rem 1rem',
                      borderRadius: '10px',
                      border: '2px solid #e1e8ed',
                      background: 'white',
                      color: '#333',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      minWidth: '200px'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = '#667eea'}
                    onBlur={(e) => e.currentTarget.style.borderColor = '#e1e8ed'}
                  >
                    <option value="">Select or Create Feature</option>
                    {allFeatureNames.map((f) => (
                      <option key={f} value={f}>{f} (existing)</option>
                    ))}
                  </select>
                  
                  {!isExistingFeature && (
                    <input
                      placeholder="Enter new feature name"
                      value={featureName}
                      onChange={(e) => setFeatureName(e.target.value)}
                      style={{ 
                        padding: '0.75rem 1rem',
                        borderRadius: '10px',
                        border: '2px solid #e1e8ed',
                        background: 'white',
                        fontSize: '0.9rem',
                        minWidth: '200px',
                        transition: 'all 0.2s ease'
                      }}
                      onFocus={(e) => e.currentTarget.style.borderColor = '#667eea'}
                      onBlur={(e) => e.currentTarget.style.borderColor = '#e1e8ed'}
                    />
                  )}
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '0.5rem', marginLeft: 'auto' }}>
                  {isExistingFeature ? (
                    <>
                      {isRenaming ? (
                        <>
                          <input
                            placeholder="New feature name"
                            value={newFeatureName}
                            onChange={(e) => setNewFeatureName(e.target.value)}
                            style={{ 
                              padding: '0.75rem 1rem',
                              borderRadius: '10px',
                              border: '2px solid #e1e8ed',
                              background: 'white',
                              fontSize: '0.9rem',
                              width: '150px'
                            }}
                          />
                          <button 
                            onClick={handleRename} 
                            style={{ 
                              padding: '0.75rem 1rem',
                              borderRadius: '10px',
                              border: 'none',
                              background: 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)',
                              color: 'white',
                              fontSize: '0.9rem',
                              fontWeight: '600',
                              cursor: 'pointer'
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
                              borderRadius: '10px',
                              border: 'none',
                              background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
                              color: 'white',
                              fontSize: '0.9rem',
                              fontWeight: '600',
                              cursor: 'pointer'
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
                              borderRadius: '10px',
                              border: 'none',
                              background: 'linear-gradient(135deg, #ffa726 0%, #ff9800 100%)',
                              color: 'white',
                              fontSize: '0.9rem',
                              fontWeight: '600',
                              cursor: 'pointer',
                              transition: 'transform 0.2s ease'
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
                              borderRadius: '10px',
                              border: 'none',
                              background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
                              color: 'white',
                              fontSize: '0.9rem',
                              fontWeight: '600',
                              cursor: 'pointer',
                              transition: 'transform 0.2s ease'
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
                                borderRadius: '10px',
                                border: 'none',
                                background: 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)',
                                color: 'white',
                                fontSize: '0.9rem',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'transform 0.2s ease'
                              }}
                              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                              💾 Save Changes
                            </button>
                            {statusMessage && (
                              <div style={{
                                position: 'absolute',
                                top: '-35px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                background: statusMessage.includes('❌') ? '#ff6b6b' : '#4CAF50',
                                color: 'white',
                                padding: '0.5rem 1rem',
                                borderRadius: '6px',
                                fontSize: '0.8rem',
                                fontWeight: '500',
                                whiteSpace: 'nowrap',
                                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                                zIndex: 1000
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
                        borderRadius: '10px',
                        border: 'none',
                        background: featureName.trim() 
                          ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
                          : '#ccc',
                        color: 'white',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        cursor: featureName.trim() ? 'pointer' : 'not-allowed',
                        transition: 'transform 0.2s ease'
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
              </>
            )}
          </div>

          {/* Error Messages */}
          {aclError && (
            <div style={{
              marginTop: '1rem',
              padding: '1rem',
              background: '#f8d7da',
              color: '#721c24',
              borderRadius: '10px',
              border: '1px solid #f5c6cb',
              fontSize: '0.9rem'
            }}>
              ⚠️ {aclError}
            </div>
          )}
        </div>

        {/* Templates Section */}
        {hasAccess && (
          <div style={{ 
            background: 'white',
            padding: '1.5rem 2rem',
            borderRadius: '16px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.8)',
            marginBottom: '2rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ 
                fontSize: '1rem', 
                fontWeight: '600', 
                color: '#555'
              }}>
                📦 Quick Start Templates:
              </span>
              <select
                onChange={(e) => {
                  const selected = prebuiltTemplates.find((t) => t.featureName === e.target.value);
                  if (selected) applyPrebuiltTemplate(selected);
                }}
                defaultValue=""
                style={{ 
                  padding: '0.75rem 1rem',
                  borderRadius: '10px',
                  border: '2px solid #e1e8ed',
                  background: 'white',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <option value="">-- Select a Template --</option>
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
            borderRadius: '16px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.8)',
            marginBottom: '2rem'
          }}>
            <h3 style={{ 
              margin: '0 0 1.5rem 0',
              color: '#333',
              fontSize: '1.3rem',
              fontWeight: '600'
            }}>
              🎛️ Rule Configuration
            </h3>
            
            {ruleSets.map((rule, ruleIdx) => (
              <div key={ruleIdx} style={{ 
                border: '2px solid #f0f2f5',
                padding: '1.5rem',
                marginBottom: '1.5rem',
                borderRadius: '12px',
                background: '#fafbfc',
                transition: 'all 0.2s ease'
              }}>
                <div style={{ 
                  display: 'flex', 
                  gap: '1rem', 
                  marginBottom: '1.5rem', 
                  alignItems: 'center',
                  flexWrap: 'wrap'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: '600', color: '#555' }}>
                      Return Value:
                    </label>
                    <input
                      value={rule.value}
                      onChange={(e) => updateRuleSetValue(ruleIdx, e.target.value)}
                      placeholder="Value (e.g., true, 1, retro)"
                      style={{ 
                        padding: '0.75rem',
                        borderRadius: '8px',
                        border: '2px solid #e1e8ed',
                        fontSize: '0.9rem'
                      }}
                    />
                  </div>
                  
                  <label style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.5rem',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: '#555',
                    cursor: 'pointer'
                  }}>
                    <input
                      type="checkbox"
                      checked={rule.sequential}
                      onChange={() => updateRuleSetSequential(ruleIdx)}
                      style={{ transform: 'scale(1.2)' }}
                    />
                    Sequential Order
                  </label>
                  
                  <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.5rem' }}>
                    <button 
                      onClick={() => duplicateRuleSet(ruleIdx)} 
                      style={{ 
                        padding: '0.5rem 1rem',
                        borderRadius: '8px',
                        border: 'none',
                        background: 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)',
                        color: 'white',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'transform 0.2s ease'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                      onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                      📄 Duplicate
                    </button>
                    <button 
                      onClick={() => deleteRuleSet(ruleIdx)} 
                      style={{ 
                        padding: '0.5rem 1rem',
                        borderRadius: '8px',
                        border: 'none',
                        background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
                        color: 'white',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'transform 0.2s ease'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                      onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                      🗑 Remove
                    </button>
                  </div>
                </div>

                {/* Event Conditions */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ 
                    margin: '0 0 1rem 0',
                    color: '#555',
                    fontSize: '1.1rem',
                    fontWeight: '600'
                  }}>
                    📅 Event Conditions:
                  </h4>
                  
                  {rule.conditions.events?.map((event, eventIdx) => (
                    <div key={eventIdx} style={{ 
                      marginBottom: '1rem',
                      padding: '1rem',
                      border: '1px solid #e1e8ed',
                      borderRadius: '10px',
                      background: 'white'
                    }}>
                      <div style={{ 
                        display: 'flex', 
                        gap: '0.5rem', 
                        marginBottom: '1rem', 
                        alignItems: 'center', 
                        flexWrap: 'wrap'
                      }}>
                        <select
                          value={event.key}
                          onChange={(e) => updateEventCondition(ruleIdx, eventIdx, 'key', e.target.value)}
                          style={{ 
                            padding: '0.5rem',
                            borderRadius: '6px',
                            border: '1px solid #ddd',
                            fontSize: '0.9rem'
                          }}
                        >
                          <option value="">Select Event</option>
                          {eventOptions.map((e) => (
                            <option key={e} value={e}>{e}</option>
                          ))}
                        </select>
                        
                        <select
                          value={Object.keys(event.count)[0] || '=='}
                          onChange={(e) => updateEventCondition(ruleIdx, eventIdx, 'countOperator', e.target.value)}
                          style={{ 
                            padding: '0.5rem',
                            borderRadius: '6px',
                            border: '1px solid #ddd',
                            fontSize: '0.9rem'
                          }}
                        >
                          {eventOperators.map((op) => (
                            <option key={op} value={op}>{op}</option>
                          ))}
                        </select>
                        <input
                          type="number"
                          placeholder="Count"
                          value={Object.values(event.count)[0] || ''}
                          onChange={(e) => updateEventCondition(ruleIdx, eventIdx, 'count', e.target.value)}
                          style={{ 
                            padding: '0.5rem',
                            borderRadius: '6px',
                            border: '1px solid #ddd',
                            width: '80px',
                            fontSize: '0.9rem'
                          }}
                        />
                        
                        <label style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '0.5rem',
                          cursor: 'pointer'
                        }}>
                          <input
                            type="checkbox"
                            checked={event.useRepeat}
                            onChange={(e) => updateEventCondition(ruleIdx, eventIdx, 'useRepeat', e.target.checked)}
                            style={{ transform: 'scale(1.1)' }}
                          />
                          {event.useRepeat ? 'Repeat:' : 'Count:'}
                        </label>
                        <select
                          value={Object.keys(event.count)[0] || '=='}
                          onChange={(e) => updateEventCondition(ruleIdx, eventIdx, 'countOperator', e.target.value)}
                          style={{ 
                            padding: '0.5rem',
                            borderRadius: '6px',
                            border: '1px solid #ddd',
                            fontSize: '0.9rem'
                          }}
                        >
                          {eventOperators.map((op) => (
                            <option key={op} value={op}>{op}</option>
                          ))}
                        </select>
                        <input
                          type="number"
                          placeholder="Count"
                          value={Object.values(event.count)[0] || ''}
                          onChange={(e) => updateEventCondition(ruleIdx, eventIdx, 'count', e.target.value)}
                          style={{ 
                            padding: '0.5rem',
                            borderRadius: '6px',
                            border: '1px solid #ddd',
                            width: '80px',
                            fontSize: '0.9rem'
                          }}
                        />
                        
                        <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#555' }}>
                          Within Days:
                        </span>
                        <input
                          type="number"
                          placeholder="Days"
                          value={event.within_last_days || ''}
                          onChange={(e) => updateEventCondition(ruleIdx, eventIdx, 'within_last_days', e.target.value)}
                          style={{ 
                            padding: '0.5rem',
                            borderRadius: '6px',
                            border: '1px solid #ddd',
                            width: '80px',
                            fontSize: '0.9rem'
                          }}
                        />
                        
                        <label style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '0.3rem',
                          fontSize: '0.9rem',
                          cursor: 'pointer'
                        }}>
                          <input
                            type="checkbox"
                            checked={event.not}
                            onChange={(e) => updateEventCondition(ruleIdx, eventIdx, 'not', e.target.checked)}
                          />
                          NOT
                        </label>
                        
                        <button 
                          onClick={() => deleteEventCondition(ruleIdx, eventIdx)} 
                          style={{ 
                            padding: '0.5rem 1rem',
                            borderRadius: '6px',
                            border: 'none',
                            background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
                            color: 'white',
                            fontSize: '0.8rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            marginLeft: 'auto'
                          }}
                        >
                          🗑
                        </button>
                      </div>
                    </div>
                  ))}

                  <button 
                    onClick={() => addEventCondition(ruleIdx)} 
                    style={{ 
                      padding: '0.75rem 1.5rem',
                      borderRadius: '8px',
                      border: 'none',
                      background: 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)',
                      color: 'white',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'transform 0.2s ease'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    + Add Event Condition
                  </button>
                </div>

                {/* User Property Conditions */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ 
                    margin: '0 0 1rem 0',
                    color: '#555',
                    fontSize: '1.1rem',
                    fontWeight: '600'
                  }}>
                    👤 User Property Conditions:
                  </h4>
                  
                  {rule.conditions.user_properties?.map((userProp, userPropIdx) => (
                    <div key={userPropIdx} style={{ 
                      marginBottom: '1rem',
                      padding: '1rem',
                      border: '1px solid #e1e8ed',
                      borderRadius: '10px',
                      background: 'white'
                    }}>
                      <div style={{ 
                        display: 'flex', 
                        gap: '0.5rem', 
                        alignItems: 'center', 
                        flexWrap: 'wrap'
                      }}>
                        <select
                          value={userProp.key}
                          onChange={(e) => updateUserPropertyCondition(ruleIdx, userPropIdx, 'key', e.target.value)}
                          style={{ 
                            padding: '0.5rem',
                            borderRadius: '6px',
                            border: '1px solid #ddd',
                            fontSize: '0.9rem'
                          }}
                        >
                          <option value="">Select Property</option>
                          {userPropertyOptions.map((prop) => (
                            <option key={prop} value={prop}>{prop}</option>
                          ))}
                        </select>
                        
                        <select
                          value={Object.keys(userProp.value)[0] || '=='}
                          onChange={(e) => updateUserPropertyCondition(ruleIdx, userPropIdx, 'valueOperator', e.target.value)}
                          style={{ 
                            padding: '0.5rem',
                            borderRadius: '6px',
                            border: '1px solid #ddd',
                            fontSize: '0.9rem'
                          }}
                        >
                          {valueOperators.map((op) => (
                            <option key={op} value={op}>{op}</option>
                          ))}
                        </select>
                        
                        <input
                          placeholder="Value"
                          value={Object.values(userProp.value)[0] || ''}
                          onChange={(e) => updateUserPropertyCondition(ruleIdx, userPropIdx, 'value', e.target.value)}
                          style={{ 
                            padding: '0.5rem',
                            borderRadius: '6px',
                            border: '1px solid #ddd',
                            fontSize: '0.9rem'
                          }}
                        />
                        
                        <label style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '0.3rem',
                          fontSize: '0.9rem',
                          cursor: 'pointer'
                        }}>
                          <input
                            type="checkbox"
                            checked={userProp.not}
                            onChange={(e) => updateUserPropertyCondition(ruleIdx, userPropIdx, 'not', e.target.checked)}
                          />
                          NOT
                        </label>
                        
                        <button 
                          onClick={() => deleteUserPropertyCondition(ruleIdx, userPropIdx)} 
                          style={{ 
                            padding: '0.5rem',
                            borderRadius: '6px',
                            border: 'none',
                            background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
                            color: 'white',
                            fontSize: '0.8rem',
                            cursor: 'pointer',
                            marginLeft: 'auto'
                          }}
                        >
                          ❌
                        </button>
                      </div>
                    </div>
                  ))}

                  <button 
                    onClick={() => addUserPropertyCondition(ruleIdx)} 
                    style={{ 
                      padding: '0.75rem 1.5rem',
                      borderRadius: '8px',
                      border: 'none',
                      background: 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)',
                      color: 'white',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'transform 0.2s ease'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    + Add User Property Condition
                  </button>
                </div>

                {/* Device Conditions */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ 
                    margin: '0 0 1rem 0',
                    color: '#555',
                    fontSize: '1.1rem',
                    fontWeight: '600'
                  }}>
                    📱 Device Conditions:
                  </h4>
                  
                  {rule.conditions.device?.map((device, deviceIdx) => (
                    <div key={deviceIdx} style={{ 
                      marginBottom: '1rem',
                      padding: '1rem',
                      border: '1px solid #e1e8ed',
                      borderRadius: '10px',
                      background: 'white'
                    }}>
                      <div style={{ 
                        display: 'flex', 
                        gap: '0.5rem', 
                        alignItems: 'center', 
                        flexWrap: 'wrap'
                      }}>
                        <select
                          value={device.key}
                          onChange={(e) => updateDeviceCondition(ruleIdx, deviceIdx, 'key', e.target.value)}
                          style={{ 
                            padding: '0.5rem',
                            borderRadius: '6px',
                            border: '1px solid #ddd',
                            fontSize: '0.9rem'
                          }}
                        >
                          <option value="">Select Device Property</option>
                          {deviceOptions.map((prop) => (
                            <option key={prop} value={prop}>{prop}</option>
                          ))}
                        </select>
                        
                        <select
                          value={Object.keys(device.value)[0] || '=='}
                          onChange={(e) => updateDeviceCondition(ruleIdx, deviceIdx, 'valueOperator', e.target.value)}
                          style={{ 
                            padding: '0.5rem',
                            borderRadius: '6px',
                            border: '1px solid #ddd',
                            fontSize: '0.9rem'
                          }}
                        >
                          {valueOperators.map((op) => (
                            <option key={op} value={op}>{op}</option>
                          ))}
                        </select>
                        
                        <input
                          placeholder="Value"
                          value={Object.values(device.value)[0] || ''}
                          onChange={(e) => updateDeviceCondition(ruleIdx, deviceIdx, 'value', e.target.value)}
                          style={{ 
                            padding: '0.5rem',
                            borderRadius: '6px',
                            border: '1px solid #ddd',
                            fontSize: '0.9rem'
                          }}
                        />
                        
                        <label style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '0.3rem',
                          fontSize: '0.9rem',
                          cursor: 'pointer'
                        }}>
                          <input
                            type="checkbox"
                            checked={device.not}
                            onChange={(e) => updateDeviceCondition(ruleIdx, deviceIdx, 'not', e.target.checked)}
                          />
                          NOT
                        </label>
                        
                        <button 
                          onClick={() => deleteDeviceCondition(ruleIdx, deviceIdx)} 
                          style={{ 
                            padding: '0.5rem',
                            borderRadius: '6px',
                            border: 'none',
                            background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
                            color: 'white',
                            fontSize: '0.8rem',
                            cursor: 'pointer',
                            marginLeft: 'auto'
                          }}
                        >
                          ❌
                        </button>
                      </div>
                    </div>
                  ))}

                  <button 
                    onClick={() => addDeviceCondition(ruleIdx)} 
                    style={{ 
                      padding: '0.75rem 1.5rem',
                      borderRadius: '8px',
                      border: 'none',
                      background: 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)',
                      color: 'white',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'transform 0.2s ease'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    + Add Device Condition
                  </button>
                </div>
              </div>
            ))}

            <button 
              onClick={addRuleSet} 
              style={{ 
                padding: '1rem 2rem',
                borderRadius: '12px',
                border: 'none',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'transform 0.2s ease',
                boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              + Add Rule Set
            </button>
          </div>
        )}

        {/* JSON Preview */}
        {hasAccess && rawJSON && (
          <div style={{ 
            background: 'white',
            padding: '2rem',
            borderRadius: '16px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.8)'
          }}>
            <h3 style={{ 
              margin: '0 0 1rem 0',
              color: '#333',
              fontSize: '1.3rem',
              fontWeight: '600'
            }}>
              📄 Generated JSON Preview
            </h3>
            <pre style={{
              background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
              padding: '1.5rem',
              borderRadius: '12px',
              maxHeight: '400px',
              overflow: 'auto',
              fontSize: '0.85rem',
              lineHeight: '1.4',
              border: '1px solid #dee2e6',
              fontFamily: 'Monaco, Consolas, "Lucida Console", monospace'
            }}>
              {rawJSON}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}