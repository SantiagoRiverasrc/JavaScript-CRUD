    // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore, 
        collection, 
        addDoc, 
        getDocs,
        onSnapshot } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js"
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
    const firebaseConfig = {
    apiKey: "AIzaSyDej_PRrTxc4n-hzykxT59xVp6FShlRNMw",
    authDomain: "javascriptcrud-5bd4e.firebaseapp.com",
    projectId: "javascriptcrud-5bd4e",
    storageBucket: "javascriptcrud-5bd4e.appspot.com",
    messagingSenderId: "531879787884",
    appId: "1:531879787884:web:27f269f202fcb76f6d0749"
};
      
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export const saveTask = (title, description) => 
    addDoc(collection(db, 'tasks'), {title: title, description: description});

export const getTask = () => getDocs(collection(db, 'tasks'));

export const UpdateTask = (callback) => onSnapshot(collection(db, 'tasks'), callback);



