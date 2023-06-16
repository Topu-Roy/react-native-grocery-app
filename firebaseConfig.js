import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {
  FIREBASE_APP_API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
} from "@env";

const firebaseConfig = {
  apiKey: FIREBASE_APP_API_KEY,

  authDomain: AUTH_DOMAIN,

  projectId: PROJECT_ID,

  storageBucket: STORAGE_BUCKET,

  messagingSenderId: MESSAGING_SENDER_ID,

  appId: APP_ID,
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
