// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_YJ_OQ4F42xajvAuRzzF_r7_my4o2fk4",
  authDomain: "movies-app-hp.firebaseapp.com",
  projectId: "movies-app-hp",
  storageBucket: "movies-app-hp.firebasestorage.app",
  messagingSenderId: "602951443592",
  appId: "1:602951443592:web:65189aeafd713fbb2c2b3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export default app;