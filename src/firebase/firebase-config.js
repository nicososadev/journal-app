import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCzG7jcYHzIOhXRqZRiH_xn_-DyVHekLuI",
    authDomain: "react-firebase-ef893.firebaseapp.com",
    databaseURL: "https://react-firebase-ef893.firebaseio.com",
    projectId: "react-firebase-ef893",
    storageBucket: "react-firebase-ef893.appspot.com",
    messagingSenderId: "82368233926",
    appId: "1:82368233926:web:0ff94d223d7e7da83e32c7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {
    db,
    googleAuthProvider,
    firebase
}