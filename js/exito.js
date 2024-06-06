 //Defino el array para luego completarlo
let usersArray = [];

//Recupero datos del storage
let storage = localStorage.getItem('usuarios');

if(storage !== null){ //Solo si hay algo en el storage lo parseo y lo meto en el array
    usersArray = JSON.parse(storage);
    //Capturo el elemento contenendor a donde voy a meter los datos
    let contenedor = document.querySelector('.detailContainer');
    let listaDeUsuarios = '';

    //Recorro el array y contruyo el html que voy a ponder dentro de la lista
    for(let i=0; i<usersArray.length; i++){
        listaDeUsuarios += `<article>
                                <p>Nombre: ${usersArray[i].fullName}</p>
                                <p>Email: ${usersArray[i].email}</p>
                                <hr>
                            </article>`
    }
    //Incorporo la estructura html al DOM
    contenedor.innerHTML = listaDeUsuarios;


} else {
    //Si el storage está vacío le aviso al usuario que no datos guardados.
    let message = document.querySelector('.message');
    message.innerText = "No hay usuarios registrados"
}


