// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_ypZ1GU0quG2ZWigPggwSGAmXUguebwM",
    authDomain: "practicashop-13c47.firebaseapp.com",
    projectId: "practicashop-13c47",
    storageBucket: "practicashop-13c47.appspot.com",
    messagingSenderId: "362253878775",
    appId: "1:362253878775:web:64e2283590ae83192a9af2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);