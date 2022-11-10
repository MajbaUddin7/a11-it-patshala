// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDHTkhA6sqD3wdE0ib-HqRvjPg3R-R7eGI",
    authDomain: "it-patshala.firebaseapp.com",
    projectId: "it-patshala",
    storageBucket: "it-patshala.appspot.com",
    messagingSenderId: "1041680332558",
    appId: "1:1041680332558:web:597dce303e54359a76095f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;