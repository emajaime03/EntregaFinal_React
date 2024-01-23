import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBD-zqYmVA69zYWAXczNAwBitqPsK-2NJc",
    authDomain: "tecnohub-ecommerce.firebaseapp.com",
    projectId: "tecnohub-ecommerce",
    storageBucket: "tecnohub-ecommerce.appspot.com",
    messagingSenderId: "535288824662",
    appId: "1:535288824662:web:ab72b1db68e8fcade08cf7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)