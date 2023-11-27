// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiK4TAjkADsTI8s0gqKhL6f_NgzaBR_uk",
  authDomain: "netflixgpt-ea30c.firebaseapp.com",
  projectId: "netflixgpt-ea30c",
  storageBucket: "netflixgpt-ea30c.appspot.com",
  messagingSenderId: "318335902037",
  appId: "1:318335902037:web:cd6abf2b727c61c3bc0fdc",
  measurementId: "G-P44HQC1P3P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();