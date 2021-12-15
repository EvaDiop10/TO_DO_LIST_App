/* let formulaire =document.querySelector(".form-ajout");

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
var donnees = {
  titre,
  date,
  description
}
document.querySelector('#enregistre').addEventListener('click', recuperation);

function recuperation(e){
    e.preventDefault();
    let titre = document.querySelector('#titre').value;
    let date = document.querySelector('#date').value;
    let description = document.querySelector('#description').value;

   donnees = {
      titre,
      date,
      description
    }
return donnees
}
 console.log(donnees); */





















   
 let titres =  document.getElementById("titre-content");
 let dates = document.getElementById("date-content");
 let descriptions = document.getElementById("desc-tache");

 //creer l'element qui contient la date
   var newDate = document.createElement("span");
   newDate.setAttribute("id", "date");
   dates.innerHTML =  data.echeance;
   dates.appendChild("span")

 //creer l'element qui contient le titre
   var newTitre = document.createElement("span");
   newTitre.setAttribute("id", "nom-tache")
   titres.innerHTML = data.titre;
   titres.appendChild("span")

 //creer l'element qui contient la description
 descriptions.innerHTML =  data.description;