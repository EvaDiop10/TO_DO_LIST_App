import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyCrm4Pr07g_CoQY2E7PwOL_e6WYIkvc4LQ",
    authDomain: "app-todo-calma.firebaseapp.com",
    projectId: "app-todo-calma",
    storageBucket: "app-todo-calma.appspot.com",
    messagingSenderId: "390307695034",
    appId: "1:390307695034:web:86dee873f6c067272af583"
  };
          firebase.initializeApp(firebaseConfig)      
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




//form submit 
document.getElementById('myForm').addEventListener('submit', sauvegarder)

function sauvegarder(e){
    e.preventDefault()

    //recuperer valeur champs

    var titre = recupererChamps('titre');
    var date = recupererChamps('date');
    var description = recupererChamps('description');

    enregistreTache(titre, date, description)
   

    
}
// fonction pour recuperer valeurs des champs 

function recupererChamps(id){

    return document.getElementById(id).value; 
}


//fonction pour enregistrer la tache dans firebase

var tacheRef = firebase.database().ref("tache");





 

// fonction pour recuperer valeurs des champs 



function enregistreTache(titre, date, description){

    var nouvelleTacheRef = tacheRef.push();

    nouvelleTacheRef.set({
        titre:titre,
        date:date,
        description:description
    });

/* var nouvelleTacheRef = {
    titre : titre,
    date : date, 
    description :  description
} */
console.log(nouvelleTacheRef)
}

