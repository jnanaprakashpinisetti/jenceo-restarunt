// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0vZWMvxMb4r-cRMPiEOljbXsCQVMOELg",
  authDomain: "jenceo-admin.firebaseapp.com",
  databaseURL: "https://jenceo-admin-default-rtdb.firebaseio.com",
  projectId: "jenceo-admin",
  storageBucket: "jenceo-admin.firebasestorage.app",
  messagingSenderId: "863138638995",
  appId: "1:863138638995:web:e7031820133fe5503cb166"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);