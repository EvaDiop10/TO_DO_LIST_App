import { createClient } from "@supabase/supabase-js";

let API_Url = "https://bmpiqremuvqolvmpvpfz.supabase.co";
let API_Key =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTA0MzE4OCwiZXhwIjoxOTU0NjE5MTg4fQ.fmJNY-6CG7UhTDb_ImLRI96RGSEc46oJ43bbYAjVOoE";
const supabase = createClient(API_Url, API_Key);



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
