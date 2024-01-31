// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5WdcRH0V5Kw7G-SgFvapbEqOMbf7To8Q",
  authDomain: "fileshareapp-f2d8d.firebaseapp.com",
  projectId: "fileshareapp-f2d8d",
  storageBucket: "fileshareapp-f2d8d.appspot.com",
  messagingSenderId: "1060094509745",
  appId: "1:1060094509745:web:72f0822b37177285089890",
  measurementId: "G-PZE74HYZJ6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

