/* /* 
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
  

  enregistrer.addEventListener("click", enregistrerClicked);

function enregistrerClicked(){
  /* e.preventDefault(); */

  /* donnees.titre = document.querySelector(".titre-tache").value;
   donnees.datefin = document.querySelector(".date-fin").value;
   donnees.description = document.querySelector(".description").value;
 



  let taches = document.createElement("div");

  taches.innerHTML = `<div class="lign-1">
  <div class="date">
      <img src="img/planner.png" alt="" id="planer">
      <span id="date">${donnees.datefin} </span>
  </div>
  <div>
      <img src="img/rouge.png" alt="">
  </div>
</div>
<hr id="trait-carte">
<div class="ligne-2">
  <div class="nom-tache">
      <span>${donnees.titre}</span>
  </div>
  <div class="tache-en-cour">
      <span>en cours</span>
  </div>
</div>
  <div class="description-tache">
      <textarea name="desc" id="desc-tache" cols="30" rows="5">description</textarea>
  </div>
<div class="ligne-3">
  <div class="terminer-1">
      <span id="terminer"> <img src="img/validV.png" alt=""> terminer</span>
  </div>
  <div class="supprimer">
      <img src="img/supprimer.png" alt="">
  </div>
</div>`
 */
