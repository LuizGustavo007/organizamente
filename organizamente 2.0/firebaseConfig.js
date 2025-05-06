// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyA6gVADlrQJaTtHBhHNv15uPq9T3ePhEeM",
    authDomain: "app-estudos-senai.firebaseapp.com",
    projectId: "app-estudos-senai",
    storageBucket: "app-estudos-senai.firebasestorage.app",
    messagingSenderId: "1026529688120",
    appId: "1:1026529688120:web:a0acf331b2a09c04cd44cd"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
