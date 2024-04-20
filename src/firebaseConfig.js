// Import the functions you need from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth, browserSessionPersistence, setPersistence, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHPjCZePcr17BCGBeEDbAhQi8etxXN0so",
  authDomain: "alphabetacunt.firebaseapp.com",
  projectId: "alphabetacunt",
  storageBucket: "alphabetacunt.appspot.com",
  messagingSenderId: "602738324092",
  appId: "1:602738324092:web:2cb96b3018423ddc7bcff9",
  measurementId: "G-FNZVRMY94F"
};


// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase authentication
const auth = getAuth(app);

// Set session persistence
await setPersistence(auth, browserSessionPersistence);

// Export Firebase authentication methods
export { app, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut };
