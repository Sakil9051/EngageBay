import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDnyrSumXSCbLT2-9uKu2J6nzmLqKt2Ou8",
  authDomain: "engagebay-370811.firebaseapp.com",
  projectId: "engagebay-370811",
  storageBucket: "engagebay-370811.appspot.com",
  messagingSenderId: "1064095341723",
  appId: "1:1064095341723:web:5577cc1a8869e4786c3a3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =getAuth(app)
export default app
