import { useState, useEffect } from 'react';
import { db, auth } from './FirebaseConfig';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import type { User } from 'firebase/auth';

const eventOptions = ['level_complete', 'level_failed', 'watch_ad'] as const;

const defaultParamOptions: Record<string, string[]> = {
  level_failed: ['level'],
  level_complete: ['level'],
  watch_ad: ['ad_type'],
};

const operatorOptions = ['==', '>=', '<=', '>', '<'] as const;
const countOperatorOptions = ['==', '>=', '<=', '>', '<'] as const;
const userPropertyOperatorOptions = ['equals', 'not_equals', 'gte', 'lte', 'gt', 'lt', 'contains', 'not_contains', 'days_since_gte', 'days_since_lte'] as const;

const userPropertyOptions = [
  'country',
  'app_version', 
  'language',
  'device_type',
  'os_version',
  'install_date',
  'last_login_date',
  'registration_date',
  'first_purchase_date'
] as const;

// User property options
const userPropertyOptions = [
  'country',
  'app_version',
  'language',
  'device_type',
  'os_version',
  'install_date',
  'last_session_date'
] as const;

const userOperatorOptions = [
  'equals',
  'not_equals',
  'gte',
  'lte',
  'gt',
  'lt',
  'contains',
  'not_contains'
] as const;

// Updated TypeScript types
type MatchParam = { key: string; value: string; operator: string };
type EventCondition = { event: string; match: MatchParam[]; count: string; countOperator: string };
type UserCondition = { property: string; operator: string; value: string };
type RuleSet = { 
  value: string | number | boolean; 
  sequential: boolean; 
  conditions: {
    events?: EventCondition[];
    user?: UserCondition[];
  };
};

type UserCondition = {
  property: string;
  operator: string;
  value: string;
  isCustom?: boolean;
};

type UserConditions = {
  [key: string]: { [operator: string]: string | number };
  custom_properties?: {
    [key: string]: { [operator: string]: string | number };
  };
};

type RuleSet = {
  value: string | number | boolean;
  sequential: boolean;
  conditions: {
    events?: EventCondition[];
    user?: UserConditions;
  };
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
              event: 'level_complete',
              count: '1',
              countOperator: '>=',
              match: [{ key: 'level', value: '1', operator: '>=' }]
            }
          ],
          user: [
            {
              property: 'install_date',
              operator: 'days_since_gte',
              value: '7'
            }
          ]
        }
      }
    ]
  },
  {
    featureName: 'country_feature',
    label: 'Country-based Feature Template',
    ruleSets: [
      {
        value: 'true',
        sequential: false,
        conditions: {
          user: {
            country: { equals: 'TR' },
            app_version: { gte: '1.2.0' }
          }
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

  // UI state for user conditions
  const [userConditions, setUserConditions] = useState<{ [ruleIdx: number]: UserCondition[] }>({});

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
      setUserConditions({});
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
      setUserConditions({});
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

  const parseUserConditionsFromData = (userData: UserConditions): UserCondition[] => {
    const conditions: UserCondition[] = [];
    
    Object.entries(userData).forEach(([property, operatorObj]) => {
      if (property === 'custom_properties' && typeof operatorObj === 'object') {
        Object.entries(operatorObj).forEach(([customProp, customOperatorObj]) => {
          if (typeof customOperatorObj === 'object') {
            Object.entries(customOperatorObj).forEach(([operator, value]) => {
              conditions.push({
                property: customProp,
                operator,
                value: String(value),
                isCustom: true
              });
            });
          }
        });
      } else if (typeof operatorObj === 'object') {
        Object.entries(operatorObj).forEach(([operator, value]) => {
          conditions.push({
            property,
            operator,
            value: String(value),
            isCustom: false
          });
        });
      }
    });
    
    return conditions;
  };

  const loadFeatureRule = async (feature: string) => {
    if (!user || !selectedTenant || !hasAccess) return;

    const docRef = doc(db, 'rules', selectedTenant);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      const ruleData = snapshot.data()?.rules?.[feature];
      if (Array.isArray(ruleData)) {
        const parsedRuleSets: RuleSet[] = [];
        const newUserConditions: { [ruleIdx: number]: UserCondition[] } = {};

        ruleData.forEach((r: any, index: number) => {
          // Handle new format with conditions.events and conditions.user
          if (r.conditions && typeof r.conditions === 'object' && !Array.isArray(r.conditions)) {
            const eventConditions = (r.conditions.events || []).map((c: any) => ({
              event: c.event,
              count: c.count ? String(Object.values(c.count as Record<string, any>)[0]) : '',
              countOperator: c.count ? Object.keys(c.count as Record<string, any>)[0] : '==',
              match: c.match
                ? Object.entries(c.match).map(([key, obj]) => ({
                    key,
                    operator: Object.keys(obj as Record<string, any>)[0],
                    value: String(Object.values(obj as Record<string, any>)[0])
                  }))
                : []
            }));

            parsedRuleSets.push({
              value: r.value ?? '',
              sequential: !!r.sequential,
              conditions: {
                events: eventConditions,
                user: r.conditions.user || {}
              }
            });

            // Parse user conditions for UI
            if (r.conditions.user) {
              newUserConditions[index] = parseUserConditionsFromData(r.conditions.user);
            }
          } else {
            // Handle legacy format - upgrade to new format
            const legacyConditions = (r.conditions || []).map((c: any) => ({
              event: c.event,
              count: c.count ? String(Object.values(c.count as Record<string, any>)[0]) : '',
              countOperator: c.count ? Object.keys(c.count as Record<string, any>)[0] : '==',
              match: c.match
                ? Object.entries(c.match).map(([key, obj]) => ({
                    key,
                    operator: Object.keys(obj as Record<string, any>)[0],
                    value: String(Object.values(obj as Record<string, any>)[0])
                  }))
                : []
            }));

            parsedRuleSets.push({
              value: r.value ?? '',
              sequential: !!r.sequential,
              conditions: {
                events: legacyConditions
              }
            });
          }
        });

        setRuleSets(parsedRuleSets);
        setUserConditions(newUserConditions);
        setRawJSON(JSON.stringify({ [feature]: ruleData }, null, 2));
      } else {
        setRuleSets([]);
        setUserConditions({});
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
        user: []
      }
    }];

    const docRef = doc(db, 'rules', selectedTenant);
    const snapshot = await getDoc(docRef);
    let rules = snapshot.exists() ? snapshot.data().rules || {} : {};
    rules[featureName] = emptyRule;

    try {
      await setDoc(docRef, { rules }, { merge: true });
      setStatusMessage('✅ Rule created successfully! Now add conditions.');
      setRuleSets([{ value: 'true', sequential: false, conditions: { events: [], user: [] } }]);
      setUserConditions({});
      setRawJSON(JSON.stringify({ [featureName]: emptyRule }, null, 2));
      setAllFeatureNames(prev => [...prev, featureName]);
    } catch (err) {
      console.error(err);
      setStatusMessage('❌ Failed to create rule.');
    }
  };

  const buildUserConditionsObject = (conditions: UserCondition[]): UserConditions => {
    const result: UserConditions = {};
    const customProps: { [key: string]: { [operator: string]: string | number } } = {};

    conditions.forEach(condition => {
      const value = isNaN(Number(condition.value)) ? condition.value : Number(condition.value);
      
      if (condition.isCustom) {
        if (!customProps[condition.property]) {
          customProps[condition.property] = {};
        }
        customProps[condition.property][condition.operator] = value;
      } else {
        if (!result[condition.property]) {
          result[condition.property] = {};
        }
        result[condition.property][condition.operator] = value;
      }
    });

    if (Object.keys(customProps).length > 0) {
      result.custom_properties = customProps;
    }

    return result;
  };

  const saveRule = async () => {
    if (!featureName || ruleSets.length === 0 || !selectedTenant || !hasAccess) {
      alert('Please ensure you have a feature name, at least one rule set, and access to the selected package.');
      return;
    }

    const formatted = ruleSets.map((rule, ruleIdx) => {
      const result: any = {
        sequential: rule.sequential,
        value: isNaN(Number(rule.value)) ? rule.value : Number(rule.value),
        conditions: {}
      };

      // Add event conditions
      if (rule.conditions.events && rule.conditions.events.length > 0) {
        const formattedEventConditions = rule.conditions.events.map((c) => {
          const base: any = { event: c.event };
          if (c.count) base.count = { [c.countOperator]: Number(c.count) };
          if (c.match.length > 0 && c.match.some((m) => m.key && m.value)) {
            const match: Record<string, any> = {};
            c.match.forEach(({ key, value, operator }) => {
              if (key && value !== '') {
                match[key] = {
                  [operator]: isNaN(Number(value)) ? value : Number(value)
                };
              }
            });
            base.match = match;
          }
          return base;
        });
        result.conditions.events = formattedEventConditions;
      }

      // Add user conditions
      const ruleUserConditions = userConditions[ruleIdx] || [];
      if (ruleUserConditions.length > 0) {
        result.conditions.user = buildUserConditionsObject(ruleUserConditions);
      }

      return result;
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
        setUserConditions({});
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
    
    // Parse user conditions from template
    const newUserConditions: { [ruleIdx: number]: UserCondition[] } = {};
    template.ruleSets.forEach((ruleSet, index) => {
      if (ruleSet.conditions.user) {
        newUserConditions[index] = parseUserConditionsFromData(ruleSet.conditions.user);
      }
    });
    setUserConditions(newUserConditions);
    
    setRawJSON(JSON.stringify({ [template.featureName]: template.ruleSets }, null, 2));
  };

  const addRuleSet = () => {
    setRuleSets([...ruleSets, { value: '', sequential: false, conditions: { events: [], user: [] } }]);
  };

  const duplicateRuleSet = (index: number) => {
    const ruleToDuplicate = ruleSets[index];
    const duplicated = JSON.parse(JSON.stringify(ruleToDuplicate));
    const updated = [...ruleSets];
    updated.splice(index + 1, 0, duplicated);
    setRuleSets(updated);

    // Duplicate user conditions too
    if (userConditions[index]) {
      const updatedUserConditions = { ...userConditions };
      // Shift all indices after the insertion point
      Object.keys(updatedUserConditions).forEach(key => {
        const idx = parseInt(key);
        if (idx > index) {
          updatedUserConditions[idx + 1] = updatedUserConditions[idx];
          delete updatedUserConditions[idx];
        }
      });
      updatedUserConditions[index + 1] = [...userConditions[index]];
      setUserConditions(updatedUserConditions);
    }
  };

  const deleteRuleSet = (index: number) => {
    setRuleSets(ruleSets.filter((_, i) => i !== index));
    
    // Update user conditions indices
    const updatedUserConditions = { ...userConditions };
    delete updatedUserConditions[index];
    
    // Shift all indices after the deleted index
    Object.keys(updatedUserConditions).forEach(key => {
      const idx = parseInt(key);
      if (idx > index) {
        updatedUserConditions[idx - 1] = updatedUserConditions[idx];
        delete updatedUserConditions[idx];
      }
    });
    setUserConditions(updatedUserConditions);
  };

  const addEventCondition = (ruleIdx: number) => {
    const updated = [...ruleSets];
    if (!updated[ruleIdx].conditions.events) {
      updated[ruleIdx].conditions.events = [];
    }
    updated[ruleIdx].conditions.events!.push({ event: '', match: [], count: '', countOperator: '==' });
    setRuleSets(updated);
  };

  const deleteEventCondition = (ruleIdx: number, condIdx: number) => {
    const updated = [...ruleSets];
    if (updated[ruleIdx].conditions.events) {
      updated[ruleIdx].conditions.events!.splice(condIdx, 1);
    }
    setRuleSets(updated);
  };

  const updateEventCondition = (ruleIdx: number, condIdx: number, field: string, value: string) => {
    const updated = [...ruleSets];
    if (updated[ruleIdx].conditions.events && updated[ruleIdx].conditions.events![condIdx]) {
      (updated[ruleIdx].conditions.events![condIdx] as any)[field] = value;
    }
    setRuleSets(updated);
  };

  const addMatchParam = (ruleIdx: number, condIdx: number) => {
    const updated = [...ruleSets];
    if (updated[ruleIdx].conditions.events && updated[ruleIdx].conditions.events![condIdx]) {
      updated[ruleIdx].conditions.events![condIdx].match.push({ key: '', value: '', operator: '==' });
    }
    setRuleSets(updated);
  };

  const deleteMatchParam = (ruleIdx: number, condIdx: number, matchIdx: number) => {
    const updated = [...ruleSets];
    if (updated[ruleIdx].conditions.events && updated[ruleIdx].conditions.events![condIdx]) {
      updated[ruleIdx].conditions.events![condIdx].match.splice(matchIdx, 1);
    }
    setRuleSets(updated);
  };

  const updateMatchParam = (ruleIdx: number, condIdx: number, matchIdx: number, field: string, value: string) => {
    const updated = [...ruleSets];
    if (updated[ruleIdx].conditions.events && updated[ruleIdx].conditions.events![condIdx] && updated[ruleIdx].conditions.events![condIdx].match[matchIdx]) {
      (updated[ruleIdx].conditions.events![condIdx].match[matchIdx] as any)[field] = value;
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

  // User condition functions
  const addUserCondition = (ruleIdx: number) => {
    const updated = { ...userConditions };
    if (!updated[ruleIdx]) {
      updated[ruleIdx] = [];
    }
    updated[ruleIdx].push({ property: '', operator: 'equals', value: '', isCustom: false });
    setUserConditions(updated);
  };

  const deleteUserCondition = (ruleIdx: number, condIdx: number) => {
    const updated = { ...userConditions };
    if (updated[ruleIdx]) {
      updated[ruleIdx].splice(condIdx, 1);
      if (updated[ruleIdx].length === 0) {
        delete updated[ruleIdx];
      }
    }
    setUserConditions(updated);
  };

  const updateUserCondition = (ruleIdx: number, condIdx: number, field: string, value: string | boolean) => {
    const updated = { ...userConditions };
    if (updated[ruleIdx] && updated[ruleIdx][condIdx]) {
      (updated[ruleIdx][condIdx] as any)[field] = value;
    }
    setUserConditions(updated);
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
                    Sequential Order (Events Only)
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

                {/* Event Conditions Section */}
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ 
                    margin: '0 0 1rem 0',
                    color: '#555',
                    fontSize: '1.1rem',
                    fontWeight: '600'
                  }}>
                    📋 Event Conditions:
                  </h4>
                  
                  {rule.conditions.events?.map((cond, condIdx) => (
                    <div key={condIdx} style={{ 
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
                          value={cond.event}
                          onChange={(e) => updateEventCondition(ruleIdx, condIdx, 'event', e.target.value)}
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
                        
                        <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#555' }}>
                          Count:
                        </span>
                        <select
                          value={cond.countOperator}
                          onChange={(e) => updateEventCondition(ruleIdx, condIdx, 'countOperator', e.target.value)}
                          style={{ 
                            padding: '0.5rem',
                            borderRadius: '6px',
                            border: '1px solid #ddd',
                            fontSize: '0.9rem'
                          }}
                        >
                          {countOperatorOptions.map((op) => (
                            <option key={op} value={op}>{op}</option>
                          ))}
                        </select>
                        <input
                          type="number"
                          placeholder="Count"
                          value={cond.count}
                          onChange={(e) => updateEventCondition(ruleIdx, condIdx, 'count', e.target.value)}
                          style={{ 
                            padding: '0.5rem',
                            borderRadius: '6px',
                            border: '1px solid #ddd',
                            width: '80px',
                            fontSize: '0.9rem'
                          }}
                        />
                        
                        <button 
                          onClick={() => deleteEventCondition(ruleIdx, condIdx)} 
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

                      <div style={{ marginLeft: '1rem' }}>
                        <strong style={{ fontSize: '0.9rem', color: '#555' }}>
                          Match Parameters:
                        </strong>
                        {cond.match.map((m, mIdx) => (
                          <div key={mIdx} style={{ 
                            display: 'flex', 
                            gap: '0.5rem', 
                            marginTop: '0.5rem', 
                            alignItems: 'center'
                          }}>
                            <select
                              value={m.key}
                              onChange={(e) => updateMatchParam(ruleIdx, condIdx, mIdx, 'key', e.target.value)}
                              style={{ 
                                padding: '0.5rem',
                                borderRadius: '6px',
                                border: '1px solid #ddd',
                                fontSize: '0.9rem'
                              }}
                            >
                              <option value="">Select Param</option>
                              {(defaultParamOptions[cond.event] || []).map((p) => (
                                <option key={p} value={p}>{p}</option>
                              ))}
                            </select>
                            <select
                              value={m.operator}
                              onChange={(e) => updateMatchParam(ruleIdx, condIdx, mIdx, 'operator', e.target.value)}
                              style={{ 
                                padding: '0.5rem',
                                borderRadius: '6px',
                                border: '1px solid #ddd',
                                fontSize: '0.9rem'
                              }}
                            >
                              {operatorOptions.map((op) => (
                                <option key={op} value={op}>{op}</option>
                              ))}
                            </select>
                            <input
                              value={m.value}
                              placeholder="Value"
                              onChange={(e) => updateMatchParam(ruleIdx, condIdx, mIdx, 'value', e.target.value)}
                              style={{ 
                                padding: '0.5rem',
                                borderRadius: '6px',
                                border: '1px solid #ddd',
                                fontSize: '0.9rem'
                              }}
                            />
                            <button 
                              onClick={() => deleteMatchParam(ruleIdx, condIdx, mIdx)} 
                              style={{ 
                                padding: '0.5rem',
                                borderRadius: '6px',
                                border: 'none',
                                background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
                                color: 'white',
                                fontSize: '0.8rem',
                                cursor: 'pointer'
                              }}
                            >
                              ❌
                            </button>
                          </div>
                        ))}
                        <button 
                          onClick={() => addMatchParam(ruleIdx, condIdx)} 
                          style={{ 
                            padding: '0.5rem 1rem',
                            borderRadius: '6px',
                            border: 'none',
                            background: 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)',
                            color: 'white',
                            fontSize: '0.8rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            marginTop: '0.5rem'
                          }}
                        >
                          + Add Match
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

                {/* User Conditions Section */}
                <div>
                  <h4 style={{ 
                    margin: '0 0 1rem 0',
                    color: '#555',
                    fontSize: '1.1rem',
                    fontWeight: '600'
                  }}>
                    👤 User Property Conditions:
                  </h4>
                  
                  {userConditions[ruleIdx]?.map((cond, condIdx) => (
                    <div key={condIdx} style={{ 
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
                            checked={cond.isCustom}
                            onChange={(e) => updateUserCondition(ruleIdx, condIdx, 'isCustom', e.target.checked)}
                            style={{ transform: 'scale(1.1)' }}
                          />
                          Custom Property
                        </label>
                        
                        {cond.isCustom ? (
                          <input
                            value={cond.property}
                            placeholder="Custom property name"
                            onChange={(e) => updateUserCondition(ruleIdx, condIdx, 'property', e.target.value)}
                            style={{ 
                              padding: '0.5rem',
                              borderRadius: '6px',
                              border: '1px solid #ddd',
                              fontSize: '0.9rem',
                              minWidth: '150px'
                            }}
                          />
                        ) : (
                          <select
                            value={cond.property}
                            onChange={(e) => updateUserCondition(ruleIdx, condIdx, 'property', e.target.value)}
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
                        )}
                        
                        <select
                          value={cond.operator}
                          onChange={(e) => updateUserCondition(ruleIdx, condIdx, 'operator', e.target.value)}
                          style={{ 
                            padding: '0.5rem',
                            borderRadius: '6px',
                            border: '1px solid #ddd',
                            fontSize: '0.9rem'
                          }}
                        >
                          {userOperatorOptions.map((op) => (
                            <option key={op} value={op}>{op}</option>
                          ))}
                        </select>
                        
                        <input
                          value={cond.value}
                          placeholder="Value"
                          onChange={(e) => updateUserCondition(ruleIdx, condIdx, 'value', e.target.value)}
                          style={{ 
                            padding: '0.5rem',
                            borderRadius: '6px',
                            border: '1px solid #ddd',
                            fontSize: '0.9rem',
                            minWidth: '100px'
                          }}
                        />
                        
                        <button 
                          onClick={() => deleteUserCondition(ruleIdx, condIdx)} 
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
                    onClick={() => addUserCondition(ruleIdx)} 
                    style={{ 
                      padding: '0.75rem 1.5rem',
                      borderRadius: '8px',
                      border: 'none',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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