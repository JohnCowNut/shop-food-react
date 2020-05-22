import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBLFSN2FYMSMiko0Bp3_KiNxa18oJDmlMA",
  authDomain: "shop-food-react.firebaseapp.com",
  databaseURL: "https://shop-food-react.firebaseio.com",
  projectId: "shop-food-react",
  storageBucket: "shop-food-react.appspot.com",
  messagingSenderId: "520751631692",
  appId: "1:520751631692:web:6bb4b156623969fd3513e9",
  measurementId: "G-5DWWLVK2HG"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
