// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDF7Fnv2pGI2HgNOuE_qaIEzoupWwOlLyI",
  authDomain: "netflixgpt-95b6a.firebaseapp.com",
  projectId: "netflixgpt-95b6a",
  storageBucket: "netflixgpt-95b6a.appspot.com",
  messagingSenderId: "452380495360",
  appId: "1:452380495360:web:2da9a8417f51e6083252e5",
  measurementId: "G-TBR8KFKCB3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();