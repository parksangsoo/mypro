import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB9GzlW5cC6puhkmxOmUUzX2jlRNbfjeUo",
    authDomain: "pokemon-b92ef.firebaseapp.com",
    projectId: "pokemon-b92ef",
    storageBucket: "pokemon-b92ef.appspot.com",
    messagingSenderId: "87179500479",
    appId: "1:87179500479:web:7f1cccd76ee3b292105f0a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export {db, auth};


