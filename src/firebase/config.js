import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth"; // Correct import

const firebaseConfig = {
  apiKey: "AIzaSyB-CrL2q-8ttel4jw7LP6g5lPD0X9dajYk",
  authDomain: "paste-97cfa.firebaseapp.com",
  projectId: "paste-97cfa",
  storageBucket: "paste-97cfa.firebasestorage.app",
  messagingSenderId: "768932037180",
  appId: "1:768932037180:web:b390c01505f32ef145f939"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
