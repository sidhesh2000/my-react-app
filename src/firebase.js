// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc, updateDoc, deleteDoc } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyBbeNzYEB1fNsoUiJjJakMnRascQTYWYl8",
    authDomain: "pdfstoragecontainer.firebaseapp.com",
    projectId: "pdfstoragecontainer",
    storageBucket: "pdfstoragecontainer.firebasestorage.app",
    messagingSenderId: "925870549180",
    appId: "1:925870549180:web:986dbe09ad421c8e8608b9",
    measurementId: "G-QJB3KR4X7M"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firestore instance
const db = getFirestore(app);

export { db, doc, getDoc, setDoc, updateDoc, deleteDoc };
