import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDLDVJEh_B2gEunkYCe7lB-2dx4rDmnkSM",
  authDomain: "social-context-7e9cf.firebaseapp.com",
  projectId: "social-context-7e9cf",
  storageBucket: "social-context-7e9cf.appspot.com",
  messagingSenderId: "348217327869",
  appId: "1:348217327869:web:a4d4ab12b139a2a572be94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
