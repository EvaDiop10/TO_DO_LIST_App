
 let api_url = "https://tenjvxuzssuicdopqfau.supabase.co";
let api_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzODg4MTg4OCwiZXhwIjoxOTU0NDU3ODg4fQ.8kYZB_B7tP4HnVseFpg_KLtyI-ucHsksFcWU54PwEW4";

supabase = supabase.createClient(api_url, api_key);

(function (){
  supabase
  .from('Todo')
  .select()
  .then((data) =>{
      for(let i=0; i <= data.data.length; i++){
       
        
        affichecarte(data, i);
       
        
        
        // 
       }
      
  })
})();



//création des elements de la cartes a partir des données 

function recupererChamps(id){

  return document.getElementById(id).value; 
}


  //fonction template creation cartes

  function affichecarte(data, j ){
    var container = document.getElementById("section")
    var temp = document.getElementsByTagName("template")[0];
    var clone = temp.content.cloneNode(true);
    container.appendChild(clone);
    
    document.getElementById("nom-tache").textContent = data.data[j].titre
  };











/* 

function creerElements(){

  let titres = 
  let dates = document.getElementById("dates");
  let descriptions = document.getElementById("desc-tache")
  

 
  //creer l'element qui contient la date

  var newDate = document.createElement("span");
  newDate.setAttribute("id", "date");
  dates.innerHTML =  nouvelleTache.date;

  //creer l'element qui contient le titre 

  var titre = document.createElement("span");
  titre.setAttribute("id", "titre-tache")
  titres.innerHTML = nouvelleTache.titre;

  //creer l'element qui contient la description 

  descriptions.innerHTML =  nouvelleTache.description;

} */


/* var nouvelleTache = {
  titre,
  date, 
  description,  
}  */



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
  }) */

 
  


    //form submit  callback
   /*  document.getElementById('myForm').addEventListener('submit', sauvegarder)

    function sauvegarder(e){
        e.preventDefault()

        //recuperer valeur champs

        var titre = recupererChamps('titre');
        var date = recupererChamps('date');
        var description = recupererChamps('description');
        

        enregistreTache(titre, date, description,);
        creerElements();

        formulaire.reset();
 
    } */



    // fonction pour recuperer id des champs 

  

  
    

 /*    // fonction pour recuperer les valeurs avec notre objet

    function enregistreTache(titre, date, description,){
     
      return nouvelleTache = {
            titre : titre,
            date : date, 
            description :description,
        }  

       

   }  */

 







   