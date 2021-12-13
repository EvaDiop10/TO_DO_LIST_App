
// connexion et deconnexion

const cnx = document.querySelector('.connexion');
const deCnx = document.querySelector('.deconnexion');

let togglerBtnCnx = document.querySelector('.switchConnexion');
let togglerBtnIns = document.querySelector('.switchInscription');


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

const email = document.querySelector('.mail');
const motDePasse = document.querySelector('.mdp');




























// function validate() { 
//     var msg; 
//     var str = document.getElementById("mdp").value; 
//     if (str.match( /[0-9]/g) && 
//             str.match( /[A-Z]/g) && 
//             str.match(/[a-z]/g) && 
//             str.match( /[^a-zA-Z\d]/g) &&
//             str.length >= 10) 
//         msg = "<p style='color:green'>Mot de passe fort.</p>"; 
//     else 
//         msg = "<p style='color:red'>Mot de passe faible.</p>"; 
//     document.getElementById("msg").innerHTML= msg; 
// } 