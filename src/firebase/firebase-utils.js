import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD-RrmKCUwpYCuMp7rWimpRqqO2QCNqJHA",
  authDomain: "shop-db-4088c.firebaseapp.com",
  databaseURL: "https://shop-db-4088c.firebaseio.com",
  projectId: "shop-db-4088c",
  storageBucket: "shop-db-4088c.appspot.com",
  messagingSenderId: "1030001630520",
  appId: "1:1030001630520:web:470a2409218796039e75cd",
  measurementId: "G-LM48XFTHV8"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
