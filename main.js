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
