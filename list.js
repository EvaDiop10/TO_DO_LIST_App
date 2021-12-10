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


var  donnees = {
  titre : "",
  datefin : "",
  description : ""
}


   
   const enregistrer = document.getElementById("enregistre"); 
  

function enregistrerClicked(e){
  e.preventDefault();

  donnees.titre = document.querySelector(".titre-tache").value;
   donnees.datefin = document.querySelector(".date-fin").value;
   donnees.description = document.querySelector(".description").value;

  console.log(donnees)

}
enregistrer.addEventListener("click", enregistrerClicked);