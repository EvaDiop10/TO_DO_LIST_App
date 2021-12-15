
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

  


    //form submit  callback
    document.getElementById('myForm').addEventListener('submit', sauvegarder)

    function sauvegarder(e){
        e.preventDefault()

        //recuperer valeur champs

        var titre = recupererChamps('titre');
        var date = recupererChamps('date');
        var description = recupererChamps('description');
        

        enregistreTache(titre, date, description,);
        creerElements(date);

        formulaire.reset();
 
    }



    // fonction pour recuperer id des champs 

    function recupererChamps(id){

        return document.getElementById(id).value; 
    }


    // fonction pour recuperer les valeurs avec notre objet

    function enregistreTache(titre, date, description,){
     
      var nouvelleTache = {
            titre : titre,
            date : date, 
            description :  description,
        } 

       /*  localStorage.setItem('laNouvelleTache', JSON.stringify(nouvelleTache)); */

        console.log(nouvelleTache)  
   } 

//founction pour recuperer la priorite



//création des elements de la cartes a partir des données 

function creerElements(date){
 /*  var cartesTaches = recupererChamps ("carte-tache"); */
  /* var prioriteCouleurs = recupererChamps("priorite-couleur");
  var nomTaches = recupererChamps("nom-tache");
  var descTaches = recupererChamps("desc-tache")
 */
  //creer l'element qui contient la date
  var dates = recupererChamps("date");
  var date = document.createElement("span");
  date.setAttribute("id", "date");
  date.textContent= "datega";
  dates.appendChild(date);
 

}




   //recuperer les donnees du localstorage
   nouvelleTacheSON = localStorage.getItem('laNouvelleTache');
   nouvelleTache = nouvelleTacheSON && JSON.Parse(nouvelleTacheSON);