let BtnDelete = document.querySelectorAll('.supprimer');

for(let j=0; j<= BtnDelete.length; j++){
    BtnDelete[j].addEventListener('click', ()=>{
        let className = '.tache-'+j
        let carte = document.querySelector(className);
        carte.remove();
        // console.log(carte)
        DeleteTask()
    })
}

function DeleteTask(){
    // supabase
    // .from('Todo')
    // .delete()
    // .eq('id', TaskId)
    console.log('delete in database')
}
