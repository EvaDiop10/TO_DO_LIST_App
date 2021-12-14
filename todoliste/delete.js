
/***********SUPABASE URL, API_KEY ************/

let api_url = "https://tenjvxuzssuicdopqfau.supabase.co";
let api_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzODg4MTg4OCwiZXhwIjoxOTU0NDU3ODg4fQ.8kYZB_B7tP4HnVseFpg_KLtyI-ucHsksFcWU54PwEW4";

supabase = supabase.createClient(api_url, api_key);

/********************************************** */

let BtnDelete = document.querySelectorAll('.supprimer');

for(let j=0; j<= BtnDelete.length; j++){
    BtnDelete[j].addEventListener('click', ()=>{
        let className = '.tache-'+j
        let carte = document.querySelector(className);
        carte.remove();
        // console.log(carte)
        // DeleteTaskOnSupabase(103)
       
    })
}
    function DeleteTaskOnSupabase(taskId){
        supabase
           .from("Todo")
           .delete()
           .eq('id',taskId )
           .then(() =>{
               console.log('supprimé')
           })
    }
