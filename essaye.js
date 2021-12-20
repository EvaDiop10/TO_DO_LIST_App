let api_url = "https://tenjvxuzssuicdopqfau.supabase.co";
let api_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzODg4MTg4OCwiZXhwIjoxOTU0NDU3ODg4fQ.8kYZB_B7tP4HnVseFpg_KLtyI-ucHsksFcWU54PwEW4";

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
//////Envoi des fichier dans la base de donné
let btnEnvoyer = document.getElementById('enregistre')
	btnEnvoyer.addEventListener('click', ()=>{
	let titreTache =document.getElementById('titre').value
    let descriptionTache =document.getElementById('description').value
    let dateTache =document.getElementById('date').value
    let inputSelectPriorite = document.getElementById('priorite')
    let priorityTache = inputSelectPriorite.options[inputSelectPriorite.selectedIndex].text
	
const nouvelleTache = {
	titre: titre,
	description: description,
	echeance: dateTache,
	priority:priorityTache
	} 

fetch(api_url, {
	method: "POST",
	headers: {
	  apikey: api_key,
	  "Content-Type": "application/json",
	},
	body: JSON.stringify(nouvelleTache),
  })
})