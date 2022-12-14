import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUELFiU_PnN2WYBOtKpVBJJYYXMrVNBWI",
  authDomain: "linkedin-clone-acb35.firebaseapp.com",
  projectId: "linkedin-clone-acb35",
  storageBucket: "linkedin-clone-acb35.appspot.com",
  messagingSenderId: "567098104755",
  appId: "1:567098104755:web:87346e128378401cacc9c6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
