import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const environment = process.env

const firebaseConfig = {
    apiKey: environment.REACT_APP_API_KEY,
    authDomain: environment.REACT_APP_AUTH_DOMAIN,
    databaseURL: environment.REACT_APP_DATABASE_URL,
    projectId: environment.REACT_APP_PROJECT_ID,
    storageBucket: environment.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: environment.REACT_APP_MESSAGING_SENDER_ID,
    appId: environment.REACT_APP_APP_ID
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {
    db,
    googleAuthProvider,
    firebase
}