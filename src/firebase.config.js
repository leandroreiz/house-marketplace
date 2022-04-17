import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDnrxX-NO939xH4ZFxIB5O2Xa_-Pg4YpHI',
  authDomain: 'house-marketplace-app-e89f9.firebaseapp.com',
  projectId: 'house-marketplace-app-e89f9',
  storageBucket: 'house-marketplace-app-e89f9.appspot.com',
  messagingSenderId: '280768151469',
  appId: '1:280768151469:web:f62f856ecaeb03bdeb2b24',
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore();
