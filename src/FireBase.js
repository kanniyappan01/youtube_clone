// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore,serverTimestamp} from "firebase/firestore"
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDibom8tRTCiBBtay0FriQgLPyknCY5N-U",
  authDomain: "yt-clone-7d5e0.firebaseapp.com",
  projectId: "yt-clone-7d5e0",
  storageBucket: "yt-clone-7d5e0.appspot.com",
  messagingSenderId: "953615168833",
  appId: "1:953615168833:web:774843e1e565559edbddc0"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const timeStamp = serverTimestamp();

export {app,db,auth,timeStamp,provider};