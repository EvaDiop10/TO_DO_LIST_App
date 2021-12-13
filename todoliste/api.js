import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyCrm4Pr07g_CoQY2E7PwOL_e6WYIkvc4LQ",
    authDomain: "app-todo-calma.firebaseapp.com",
    projectId: "app-todo-calma",
    storageBucket: "app-todo-calma.appspot.com",
    messagingSenderId: "390307695034",
    appId: "1:390307695034:web:86dee873f6c067272af583"
  };
                
//afficher formulaire

let formulaire =document.querySelector(".form-ajout");

let ajouter = document.querySelector(".ajout-tache");

ajouter.addEventListener('click', (e)=>{
  e.preventDefault;
  if(formulaire.hidden == true){
    formulaire.hidden=false
    return
  }
  if(formulaire.hidden== false){
    formulaire.hidden= true
    return
  }
})

