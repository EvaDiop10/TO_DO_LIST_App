// connexion et deconnexion
// =========================================
const cnx = document.querySelector('.connexion');
const deCnx = document.querySelector('.deconnexion');



togglerBtnCnx.addEventListener('click', (e) =>{
    e.preventDefault();
        cnx.hidden = true;
        deCnx.hidden = false;
})
togglerBtnIns.addEventListener('click', (e) =>{
    e.preventDefault();
        cnx.hidden = false;
        deCnx.hidden = true;
})


// Recureration des donnees de la connexion
// =========================================
var donneesConx =  {
    mail : "" ,
    password : ""
}

function validationConnexion(e){
    donneesConx.mail = document.querySelector('.mail').value;
    donneesConx.password = document.querySelector('.mdp').value;
    console.log(donneesConx)
}


// Recureration des donnees de la deconnexion
// =========================================
var donneesConx =  {
    nom : "" ,
    prenom : "" ,
    mail : "" ,
    password : "",
    dateNais : "" 
}

function validationDeconnexion(e){
    donneesConx.nom = document.querySelector('.nom').value;
    donneesConx.prenom = document.querySelector('.prenom').value;
    donneesConx.mail = document.querySelector('.mailIns').value;
    donneesConx.password = document.querySelector('.mdpIns').value;
    donneesConx.dateNais = document.querySelector('.date').value;
    console.log(donneesConx)
}

