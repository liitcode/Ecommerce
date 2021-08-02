import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBPGKm_3Gb1yOo8KJ-d7JAVeb_GHkmW6DI",
    authDomain: "ecommerce-9ab7a.firebaseapp.com",
    projectId: "ecommerce-9ab7a",
    storageBucket: "ecommerce-9ab7a.appspot.com",
    messagingSenderId: "40209492550",
    appId: "1:40209492550:web:e70433d49da417a0077847"
};
 
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }