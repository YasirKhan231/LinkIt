// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhRO2bvn0BKm0u3JgopPH5CkfhuaPJ47s",
  authDomain: "linkit-59838.firebaseapp.com",
  projectId: "linkit-59838",
  storageBucket: "linkit-59838.firebasestorage.app",
  messagingSenderId: "717127886584",
  appId: "1:717127886584:web:29a749e772fd02b6503d0d",
  measurementId: "G-71G7D2Z4JV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);