



var  donnees = {
    titre : "",
    datefin : "",
    description : ""
}

 
     
     const enregistrer = document.getElementById("enregistre"); 
    

function enregistrerClicked(e){
    e.preventDefault();

    donnees = document.querySelector(".titre-tache").value;
     donnees = document.querySelector(".date-fin").value;
     donnees = document.querySelector(".description").value;

    console.log(donnees)
  
}
enregistrer.addEventListener("click", enregistrerClicked);

/* let nouvelleTache = {};

for (let i = 0, len = ajoutTache.length; i < len; i++) {
    let key = ajoutTache[i].getAttribute('data-key');
    let value = ajoutTache[i].value;
    nouvelleTache[key] = value; */

/* tachesRef.push(nouvelleTache, function () { 
    console.log("data has been inserted");
}) */