// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMo97K9rCWstVjqdx42_KS-Yt10XRbv7s",
  authDomain: "reifybal.firebaseapp.com",
  projectId: "reifybal",
  storageBucket: "reifybal.appspot.com",
  messagingSenderId: "198382145224",
  appId: "1:198382145224:web:96b317f7516d2ae3551ffd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;