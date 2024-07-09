// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT7TZxNllk7zl3FSXAr9W4A7IloTy0yWY",
  authDomain: "myfirstapp-5b1d2.firebaseapp.com",
  projectId: "myfirstapp-5b1d2",
  storageBucket: "myfirstapp-5b1d2.appspot.com",
  messagingSenderId: "176348953278",
  appId: "1:176348953278:web:62fbd43fe5a841c0d73cef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB , auth}