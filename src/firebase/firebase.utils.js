import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvccUD_yTZn_enBI0t9PzJCBHzaLjw2cA",
  authDomain: "ecommerce-react-f1174.firebaseapp.com",
  projectId: "ecommerce-react-f1174",
  storageBucket: "ecommerce-react-f1174.appspot.com",
  messagingSenderId: "489095328213",
  appId: "1:489095328213:web:89fff3e96975f88efb4d5c",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
