// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-FziWIdGq69C7bw3dDh2ORK_XZjI9M54",
  authDomain: "react--todo-list.firebaseapp.com",
  databaseURL: "https://react--todo-list-default-rtdb.firebaseio.com",
  projectId: "react--todo-list",
  storageBucket: "react--todo-list.appspot.com",
  messagingSenderId: "151561974946",
  appId: "1:151561974946:web:f4369a72d57708d93a93fb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
