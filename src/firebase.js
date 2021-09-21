import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD0N0At4RDP6vtknOURId2591LQzZ0dkuQ",
    authDomain: "tinder-clone-765c9.firebaseapp.com",
    projectId: "tinder-clone-765c9",
    storageBucket: "tinder-clone-765c9.appspot.com",
    messagingSenderId: "1087118726773",
    appId: "1:1087118726773:web:d1dd91995f913aa9dfca3c",
    measurementId: "G-F2RWHQGM93"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

  export default database;
  