// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDu3AgH86OveMBltHHbV0a1Q-8GeDlgVx4",
  authDomain: "bdcalling-task.firebaseapp.com",
  projectId: "bdcalling-task",
  storageBucket: "bdcalling-task.appspot.com",
  messagingSenderId: "807342593379",
  appId: "1:807342593379:web:1f02cadaa2f453d6ddef56",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
