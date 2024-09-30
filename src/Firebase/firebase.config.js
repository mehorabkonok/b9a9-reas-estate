// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpnY4aW1J1rXIZXZ4EXtjD7yWJCDjNv3k",
  authDomain: "react-practice-app-6.firebaseapp.com",
  projectId: "react-practice-app-6",
  storageBucket: "react-practice-app-6.appspot.com",
  messagingSenderId: "269121110220",
  appId: "1:269121110220:web:3fb9060d448bf492294269",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
