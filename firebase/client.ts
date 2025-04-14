
import { initializeApp , getApp, getApps} from "firebase/app";

import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "MY KEY---",
  authDomain: "prepwise-42b67.firebaseapp.com",
  projectId: "prepwise-42b67",
  storageBucket: "prepwise-42b67.firebasestorage.app",
  messagingSenderId: "402784092343",
  appId: "1:402784092343:web:10222d8c3f615e768b4d32",
  measurementId: "G-PBJC3CMHN3"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth=getAuth(app);
export const db=getFirestore(app);
