// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXvV52YPFxLaNd8qscxww7lfb_pGafCyM",
  authDomain: "testfirebase-84ec8.firebaseapp.com",
  projectId: "testfirebase-84ec8",
  storageBucket: "testfirebase-84ec8.appspot.com",
  messagingSenderId: "324374484385",
  appId: "1:324374484385:web:3a0a73235a377325f4e7e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = firebase.firestore();




function menu() {
    var x = document.getElementById("menu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }