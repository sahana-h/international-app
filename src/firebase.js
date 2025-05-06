// THESE ARE FROM FIREBASE PROJECT DIRECTLY


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVsEZcwqSLE7OvMss1DXc9YaA2oeYRifE",
  authDomain: "internationalapp-b18fc.firebaseapp.com",
  projectId: "internationalapp-b18fc",
  storageBucket: "internationalapp-b18fc.firebasestorage.app",
  messagingSenderId: "357611051659",
  appId: "1:357611051659:web:132094a959677066f5528e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);