import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAGNxriDb3o_56BNdFxSvS_Y_wuG1Sd8Ww',
  authDomain: 'authentication-project-128d5.firebaseapp.com',
  projectId: 'authentication-project-128d5',
  storageBucket: 'authentication-project-128d5.appspot.com',
  messagingSenderId: '931833716521',
  appId: '1:931833716521:web:8e25b7125c03b363e06138',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
