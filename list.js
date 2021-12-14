

let formulaire =document.querySelector(".form-ajout");

let ajouter = document.querySelector(".ajout-tache");

let API_Url = "https://bmpiqremuvqolvmpvpfz.supabase.co";

let API_Key =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTA0MzE4OCwiZXhwIjoxOTU0NjE5MTg4fQ.fmJNY-6CG7UhTDb_ImLRI96RGSEc46oJ43bbYAjVOoE";

const supabase = createClient(API_Url, API_Key);


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






   
   const enregistrer = document.getElementById("enregistre"); 
  

function enregistrerClicked(e){
  e.preventDefault();

  donnees.titre = document.querySelector(".titre-tache").value;
   donnees.datefin = document.querySelector(".date-fin").value;
   donnees.description = document.querySelector(".description").value;

  console.log(donnees)

}
enregistrer.addEventListener("click", enregistrerClicked);

import { createClient } from "@supabase/supabase-js";




//function(){
    //valider les donnee
    //soumettre
//}
  // supabase
  // .from("liste")
  // .select()
  // .then((data) => {
  //   document.write(data.body.titre);
  // });
 
  