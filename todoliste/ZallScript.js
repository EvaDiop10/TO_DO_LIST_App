let api_url = 'https://tenjvxuzssuicdopqfau.supabase.co/rest/v1/Todo'
let api_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzODg4MTg4OCwiZXhwIjoxOTU0NDU3ODg4fQ.8kYZB_B7tP4HnVseFpg_KLtyI-ucHsksFcWU54PwEW4";

let CompTaskFinish = 0
let ComptTaskTotal = 0

let Gt = document.getElementById('Gt')
let Ft = document.getElementById('Ft')

window.addEventListener('load', ()=>{
    NewtaskInput()

    fetch(api_url, {
        headers: {
          apikey: api_key,
        },
      })
      .then((response) => response.json())
    .then((idees) => {
        idees.forEach((idee) => {
            ComptTaskTotal = ComptTaskTotal+1

            if(idee.etat == true){
                CompTaskFinish = CompTaskFinish+1
            }

        // console.log(idee)
          CreateCarteIdee(idee)
        })
    })
   

})

function CreateCarteIdee(data){
    Gt.innerHTML = ComptTaskTotal 
    Ft.innerHTML = CompTaskFinish

    let idCarte = 'carte-' + data.id
    let idBntFinish ='terminer-' + data.id  
    let idBtnDelete = data.id
    let idImgEtat = 'imgEtat' + data.id
    let idDesc = 'desc-' + data.id

    document.querySelector('.affiche-taches').insertAdjacentHTML(
        "afterbegin",
        `
        <div class="carte-tache tache-0 animate__animated animate__flipInX" id="${idCarte}">
            <div class="lign-1">
                <div class="date">
                    <img src="img/planner.png" alt="" id="planer">
                    <span id="date">${data.echeance} </span>
                </div>
                <div >
                    <img id="${idImgEtat}" src="img/${data.etat}.png" alt="">
                </div>
            </div>
            <div class="tache-en-cour text-end">
                <span>
                    Prioroté : ${data.priority}
                </span>
            </div>           
            <div class="ligne-2">
                <div class="tache">
                    <input type="text" value="${data.titre}">
                </div>
            </div>
            <div class="description-tache">
                <textarea name="desc" id="${idDesc}" cols="30" rows="5">${data.description}</textarea>
            </div>
            <div class="ligne-3">
                <div class="terminer-1 ${data.etat}" id="${idBntFinish}">
                    <span > <img src="img/validV.png" alt=""> terminer</span>
                </div>
                <div class="supprimer">
                    <img id="${idBtnDelete}" src="img/supprimer.png" alt="">
                </div>
            </div>
        </div>
        `
      )

    let dd = document.getElementById(idDesc)
    dd.addEventListener('blur', ()=>{
        let UpdateIdee = {
            description: dd.value
        }

        UpdatIntoSupabase(data.id, UpdateIdee)
    })

    let btnTerminer = document.getElementById(idBntFinish)
        btnTerminer.addEventListener('click', ()=>{
        btnTerminer.style.display = 'none'
                
        CompTaskFinish = CompTaskFinish+1
        Ft.innerHTML = CompTaskFinish
      
        let img = document.getElementById(idImgEtat)
        img.setAttribute('src', 'img/true.png')

        let UpdateEtat = {
            etat: true
        }
        UpdatIntoSupabase(data.id, UpdateEtat)
    })

    let btnSupprimer = document.getElementById(idBtnDelete)
    btnSupprimer.addEventListener('click', ()=>{
        
        // alert('ok')
        document.getElementById(idCarte).remove()
        DeleteTaskIntoSupabase(data.id)
    })
}

// ///////////////AJOUTER DES DONNÉES////////////////

function AddTaskIntoSupabase(NewObjet){
    fetch(api_url, {
        method: "POST",
        headers: {
          apikey: api_key,
          Authorization: `Bearer ${api_key}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(NewObjet),
      })
      .then((data) =>{
          console.log(data)
      })
}

///////SUPPRÉSSION DES DONNÉES///////////////////

function DeleteTaskIntoSupabase (id){

    fetch(`https://tenjvxuzssuicdopqfau.supabase.co/rest/v1/Todo?id=eq.${id}`,{
        method: "DELETE",
        headers:{
         apikey: api_key,
         'Authorization' : `Bearer ${api_key}`
        }
    })
}

////////////MODIFICATION DES DONNÉES/////////////

function UpdatIntoSupabase(id, NewObjet){
    fetch(api_url + "?id=eq." + id, {
        method: "PATCH",
        headers: {
          apikey: api_key,
          "Content-Type": "application/json",
          Prefer: "return=representation",
        },
        body: JSON.stringify(NewObjet),
      })
}

////////////GESTION DU FORMULAIRE/////////////

function NewtaskInput(){
    let formulaire = document.querySelector(".form-ajout");
    
    let ajouter = document.querySelector(".ajout-tache");
    
      ajouter.addEventListener('click', (e)=>{
        e.preventDefault();
        if(formulaire.hidden == true){
          formulaire.hidden = false
            
            let btnSubmit = document.querySelector('#enregistrer')
            btnSubmit.addEventListener('click', (e)=>{
                e.preventDefault()
                let inputTitle = document.getElementById('titre').value               
                let inputDescription = document.getElementById('description').value
                let inputDate = document.getElementById('date').value

                let inputSelect = document.getElementById('priorite')
                let inputSelectSelected = inputSelect.options[inputSelect.selectedIndex].text

                let NewTask = {
                    titre : inputTitle,
                    description: inputDescription,
                    echeance: inputDate,
                    priority: inputSelectSelected,
                }
                CreateCarteIdee(NewTask)
                AddTaskIntoSupabase(NewTask)
                formulaire.hidden = true
                ajouter.classList.add('animate__bounceOut');
            })
          return 
        }
        if(formulaire.hidden == false){
          formulaire.hidden = true
          return
        }
      }) 
}