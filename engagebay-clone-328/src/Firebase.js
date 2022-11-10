import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCzg_Vh0E-8lmnsrUDDdkDOaJFmr8wH_Qg",
  authDomain: "engagebay-clone-authintication.firebaseapp.com",
  projectId: "engagebay-clone-authintication",
  storageBucket: "engagebay-clone-authintication.appspot.com",
  messagingSenderId: "849756603450",
  appId: "1:849756603450:web:a58889809b2b57b161e103",
  measurementId: "G-ZYG99GXVSG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
export default app