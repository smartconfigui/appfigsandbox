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
  // ... rest of the component implementation ...
}