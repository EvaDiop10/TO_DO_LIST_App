
let btnConnexion = document.querySelector('#btnConnexion');

btnConnexion.addEventListener('click', (e)=>{
    let api_url = "https://tenjvxuzssuicdopqfau.supabase.co";
    let api_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzODg4MTg4OCwiZXhwIjoxOTU0NDU3ODg4fQ.8kYZB_B7tP4HnVseFpg_KLtyI-ucHsksFcWU54PwEW4";
    
    supabase = supabase.createClient(api_url, api_key);

    //on connecte l'utilisateur
    let emailValue = document.querySelector(".mail").value;
    // let pwdValue = document.querySelector(".mdp").value;
  
    // alert(emailValue)
    supabase
        .from("User")
        .select()
        .eq("email", emailValue)
        .then((data) => {
            redirecToRoute('index.html')
        })
})  



function redirecToRoute(path){
    window.location.assign(path);
}