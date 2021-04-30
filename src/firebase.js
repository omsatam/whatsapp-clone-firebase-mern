import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNudBl9QaQCLZtDO4Ri4VRW0Wk3pUsJUI",
  authDomain: "whtatsapp-clone.firebaseapp.com",
  databaseURL: "https://whtatsapp-clone-default-rtdb.firebaseio.com",
  projectId: "whtatsapp-clone",
  storageBucket: "whtatsapp-clone.appspot.com",
  messagingSenderId: "568106846397",
  appId: "1:568106846397:web:6742b8fcfde3c7600b0fd4",
  measurementId: "G-NEQ1TLBPDM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
