// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrJve_ri9Kg5DLX6tjFDDlonLfCHvmN5k",
  authDomain: "daily-activities-36584.firebaseapp.com",
  projectId: "daily-activities-36584",
  storageBucket: "daily-activities-36584.appspot.com",
  messagingSenderId: "821560092623",
  appId: "1:821560092623:web:8e5c76c9426686250794ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);