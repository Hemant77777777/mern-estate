// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-3277e.firebaseapp.com",
  projectId: "mern-estate-3277e",
  storageBucket: "mern-estate-3277e.firebasestorage.app",
  messagingSenderId: "729400358259",
  appId: "1:729400358259:web:e1b96d27ea2b9ba4dd0106"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);