import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCF37jXg_P8iP2hjn-nKG--gd2uD4R8NUk",
    authDomain: "datapath-auth-demo.firebaseapp.com",
    projectId: "datapath-auth-demo",
    storageBucket: "datapath-auth-demo.appspot.com",
    messagingSenderId: "909870650539",
    appId: "1:909870650539:web:762183e8740869c0c7d3ee",
    measurementId: "G-70QSFVJF6P"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);


export { auth, database, signInWithEmailAndPassword, createUserWithEmailAndPassword };
