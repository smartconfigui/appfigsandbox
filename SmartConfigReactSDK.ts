// SmartConfig.ts


export type SmartEvent = {
  name: string;
  params?: Record<string, any>;
  timestamp: number;
};

export type Condition = {
  key: string;
  count?: Record<string, number | string | string[]>;
  param?: Record<string, Record<string, any>>;
  within_last_days?: number;
  not?: boolean;
  operator?: string;
};

export type SmartConfigRule = {
  conditions: {
    events?: Condition[];
    user_properties?: Condition[];
    device?: Condition[];
  };
  sequential?: boolean;
  value: any;
};

export type SmartConfigInitParams = {
  userId: string;
  ruleUrl?: string;
  rulesOverride?: Record<string, SmartConfigRule[]>;
  autoUpdate?: boolean;
  cacheTimeout?: number;
  source?: 'cdn' | 'firestore';
  tenant?: string;
  firestoreDocId?: string;
};

class SmartConfigCore {
  private rules: Record<string, SmartConfigRule[]> = {};
  private userId: string = '';
  private eventHistory: SmartEvent[] = [];
  private userProperties: Record<string, any> = {};
  private deviceProperties: Record<string, any> = {};
  private lastFetched: number = 0;
  private ruleUrl: string | null = null;
  private autoUpdate: boolean = false;
  private cacheTimeout: number = 60000;
  private debug: any = {};

  async init(params: SmartConfigInitParams) {
    this.userId = params.userId;
    this.autoUpdate = params.autoUpdate ?? false;
    this.cacheTimeout = params.cacheTimeout ?? 60000;
  
    // 🌍 Get country code from IP (with sessionStorage cache)
    try {
      const cachedCountry = sessionStorage.getItem('smartconfig_country');
      if (cachedCountry) {
        this.deviceProperties = { country: cachedCountry };
      } else {
        const res = await fetch('https://ipapi.co/json');
        const data = await res.json();
        const country = data.country;
        this.deviceProperties = { country };
        sessionStorage.setItem('smartconfig_country', country);
      }
    } catch (e) {
      console.warn('[SmartConfig] Failed to fetch country code:', e);
      this.deviceProperties = {};
    }
  
    if (params.rulesOverride) {
      this.rules = params.rulesOverride;
    } else if (params.source === 'cdn' && params.tenant) {
      this.ruleUrl = `https://appfig-dev-rules.web.app/tenants/${params.tenant}.json`;
      await this.fetchRulesFromCDN();
    } else if (params.source === 'firestore') {
      const docId = params.firestoreDocId ?? params.tenant ?? 'default';
      console.log(`[SmartConfig] Firestore source: looking for /rules/${docId}`);      
    
      const { getFirestore, doc, getDoc } = await import('firebase/firestore');
      const { initializeApp, getApps, getApp } = await import('firebase/app');

    
      const firebaseConfig = {
        apiKey: "AIzaSyA1RpUnIDeAygibIJ9Fe-sawB9bHSLF3jk",
        authDomain: "appfig-dev.firebaseapp.com",
        projectId: "appfig-dev",
        storageBucket: "appfig-dev.appspot.com",
        messagingSenderId: "33595783202",
        appId: "1:33595783202:web:b152ae8424b96bdc45b27b",
        measurementId: "G-1MMZX5ZH7B"
      };

      console.log('[SmartConfig] Firebase config being used:', firebaseConfig);


      const existingApp = getApps().find(app => app.name === 'AppFig');
      const app = existingApp ?? initializeApp(firebaseConfig, 'AppFig');
      const db = getFirestore(app);
    
      const docRef = doc(db, 'rules', docId);
      console.log(`[SmartConfig] Firestore source: looking for /rules/${docId}`)   // ✅ Add this log
      
      const snap = await getDoc(docRef);
      if (!snap.exists()) throw new Error('Rules not found in Firestore');
      
      this.rules = snap.data().rules;
      console.log('[SmartConfig] Loaded rules from Firestore:', this.rules);  // ✅ Optional: inspect rule payload

    }
    
  }

  
  
  async initFromCDN(userId: string, tenant: string, options: { autoUpdate?: boolean; cacheTimeout?: number } = {}) {
    return this.init({
      userId,
      tenant,
      source: 'cdn',
      autoUpdate: options.autoUpdate,
      cacheTimeout: options.cacheTimeout
    });
  }
  
  async initFromFirestore(userId: string, tenant: string, options: { docId?: string } = {}) {
    return this.init({
      userId,
      tenant,
      firestoreDocId: options.docId ?? tenant,
      source: 'firestore'
    });
  }
  

  logEvent(name: string, params?: Record<string, any>) {
    const event: SmartEvent = { name, params, timestamp: Date.now() };
    this.eventHistory.push(event);
    if (this.shouldUpdateFromCDN()) {
      this.fetchRulesFromCDN();
    }
  }

  getConfig(flagName: string): any {
    const ruleSet = this.rules[flagName];
    if (!ruleSet) return null;
    for (const rule of ruleSet) {
      const matches = this.ruleMatches(rule);
      if (matches) return rule.value;
    }
    return null;
  }

  setUserProperties(props: Record<string, any>) {
    this.userProperties = props;
  }

  setDeviceProperties(props: Record<string, any>) {
    this.deviceProperties = props;
  }

  getEventHistory(): SmartEvent[] {
    return this.eventHistory;
  }

  getDebugInfo() {
    return {
      rules: this.rules,
      events: this.eventHistory,
      userProperties: this.userProperties,
      deviceProperties: this.deviceProperties,
    };
  }

  private shouldUpdateFromCDN() {
    return this.autoUpdate && this.ruleUrl && Date.now() - this.lastFetched > this.cacheTimeout;
  }

  private async fetchRulesFromCDN() {
    if (!this.ruleUrl) return;
    try {
      const res = await fetch(this.ruleUrl);
      if (!res.ok) throw new Error(`Failed to fetch rules from ${this.ruleUrl}`);
      this.rules = await res.json();
      this.lastFetched = Date.now();
    } catch (err) {
      console.warn('[SmartConfig] Failed to auto-refresh rules:', err);
    }
  }

  private ruleMatches(rule: SmartConfigRule): boolean {
    const { events = [], user_properties = [], device = [] } = rule.conditions;
    return (
      this.matchConditions(events, this.eventHistory, true, rule.sequential) &&
      this.matchConditions(user_properties, [this.userProperties]) &&
      this.matchConditions(device, [this.deviceProperties])
    );
  }

  private matchConditions(
    conditions: Condition[],
    data: any[],
    isEvent = false,
    sequential = false
  ): boolean {
    if (sequential && isEvent) {
      let i = 0;
      for (const cond of conditions) {
        let found = false;
        while (i < data.length) {
          const e = data[i];
          if (this.conditionMatches(cond, e)) {
            found = true;
            i++;
            break;
          }
          i++;
        }
        if (!found) return false;
      }
      return true;
    } else {
      return conditions.every((cond) => data.some((d) => this.conditionMatches(cond, d)));
    }
  }

  private conditionMatches(cond: Condition, event: SmartEvent | Record<string, any>): boolean {
    const actualKey = 'name' in event ? event.name : event[cond.key];
    if ('name' in event && event.name !== cond.key) return false;

    let match = true;

    // Param matching
    if ('param' in cond && cond.param && 'params' in event) {
      for (const key in cond.param) {
        const opMap = cond.param[key];
        for (const op in opMap) {
          match = match && this.compare(op, event.params?.[key], opMap[op]);
        }
      }
    }

    // Count matching
    if ('count' in cond && cond.count) {
      const actualCount = this.eventHistory.filter(e => {
        if ('name' in e) {
          return e.name === cond.key;
        }
        return false;
      }).length;
    
      for (const op in cond.count) {
        match = match && this.compare(op, actualCount, cond.count[op]);
      }
    }

    

    // Value matching (for device and user_properties)
    if ('value' in cond && cond.value) {
      const valueObj = cond.value;
        for (const op in valueObj) {
    const actualValue = event[cond.key];
    const expectedValue = valueObj[op];
    match = match && this.compare(op, actualValue, expectedValue);
      }
    }
    
    // Time-based match
    if ('within_last_days' in cond && 'timestamp' in event) {
      const days = cond.within_last_days;
      const cutoff = Date.now() - days * 86400000;
      match = match && event.timestamp >= cutoff;
    }

    if (cond.not) match = !match;

    return match;
  }

  private compare(op: string, actual: any, expected: any): boolean {
    switch (op) {
      case '==': return actual === expected;
      case '!=': return actual !== expected;
      case '>': return actual > expected;
      case '<': return actual < expected;
      case '>=': return actual >= expected;
      case '<=': return actual <= expected;
      case 'in': return Array.isArray(expected) && expected.includes(actual);
      case 'not in': return Array.isArray(expected) && !expected.includes(actual);
      default: return false;
    }
  }
}

const SmartConfig = new SmartConfigCore();
export default SmartConfig;
