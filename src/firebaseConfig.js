// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1MLczauS4lAwmT54oNjAm-xa6vKjkRqc",
  authDomain: "linkedin-react-clone-5382d.firebaseapp.com",
  projectId: "linkedin-react-clone-5382d",
  storageBucket: "linkedin-react-clone-5382d.appspot.com", 
  messagingSenderId: "716846794742",
  appId: "1:716846794742:web:3ff6048498d6128cffa9d7",
  measurementId: "G-NXP5S1V51X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };
