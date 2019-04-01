import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
const config = {
    apiKey: "AIzaSyCr-6SQKbgM-AjT5jJN40JP15zGsJ_2L-w",
    authDomain: "faycal-bouhend.firebaseapp.com",
    databaseURL: "https://faycal-bouhend.firebaseio.com",
    projectId: "faycal-bouhend",
    storageBucket: "faycal-bouhend.appspot.com",
    messagingSenderId: "60766905324"
};
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;