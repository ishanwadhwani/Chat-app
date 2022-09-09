// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADhWbt0xM7h9uXoqMrwyETxXjPxF_yEiM",
  authDomain: "chat-it-45897.firebaseapp.com",
  projectId: "chat-it-45897",
  storageBucket: "chat-it-45897.appspot.com",
  messagingSenderId: "289545505385",
  appId: "1:289545505385:web:f891684aa29eb6f95a30f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)