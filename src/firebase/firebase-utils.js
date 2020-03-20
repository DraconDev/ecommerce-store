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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return {};

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  //
  // const collectionRef = firestore.collection("users");
  // const collectionSnapshot = await collectionRef.get();
  // console.log("collectionSnapshot", { collectionSnapshot });

  if (!snapShot.exist) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,

        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  // console.log(snapShot);
  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  // console.log(collectionRef);

  const batch = firestore.batch();

  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    // console.log("log docs", newDocRef);
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsShapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });
  // console.log(transformedCollection);

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
