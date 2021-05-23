import firebase from 'firebase/app'

import 'firebase/firestore';


const app = firebase.initializeApp({
    apiKey: "AIzaSyCUH4vLAd7VGxdE8EV4ASffH4t2-sdfAI0",
    authDomain: "goshop-e.firebaseapp.com",
    projectId: "goshop-e",
    storageBucket: "goshop-e.appspot.com",
    messagingSenderId: "248725312309",
    appId: "1:248725312309:web:873f5b6b7489e0612df27c"
});

export const getFirebase = () =>app;

export const getFirestore = () => firebase.firestore(app)