// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDB3IfJTVPOlvqyC12FHapudZxXx2Zqdi8",
  authDomain: "arc---management.firebaseapp.com",
  projectId: "arc---management",
  storageBucket: "arc---management.firebasestorage.app",
  messagingSenderId: "781159835872",
  appId: "1:781159835872:web:809187b22badb011acc885",
  measurementId: "G-5F14W1HLFK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);