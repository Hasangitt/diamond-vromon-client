// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.process.env.Vite_apiKey,
  authDomain: import.meta.process.env.Vite_authDomain,
  projectId: import.meta.process.env.Vite_projectId,
  storageBucket: import.meta.process.env.Vite_storageBucket,
  messagingSenderId: import.meta.process.env.Vite_messagingSenderId,
  appId: import.meta.process.env.Vite_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;