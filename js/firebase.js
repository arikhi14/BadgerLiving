// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqOKeT7JznCWouqf3VlwaYrTz1-x7ZFp4",
  authDomain: "badgerliving-5bf3e.firebaseapp.com",
  projectId: "badgerliving-5bf3e",
  storageBucket: "badgerliving-5bf3e.firebasestorage.app",
  messagingSenderId: "711790491273",
  appId: "1:711790491273:web:c93f9ac7edfc13a638b858",
  measurementId: "G-XMTVC38M7M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
