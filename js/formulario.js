// Capturamos el formulario
const formulario = document.querySelector(".contact-form");
// Capturamos todos los inputs que queremos validar
const fullName = document.querySelector("#fullName");
const email = document.querySelector("#email");
const telefono = document.querySelector("#phone");
const password = document.querySelector("#password");
const rePassword = document.querySelector("#rePassword");

// Capturamos los campos de error
const errorFullName = document.querySelector(".fullName");
const errorEmail = document.querySelector(".email");
const errorTelefono = document.querySelector(".phone");
const errorPassword = document.querySelector(".password");
const errorRePassword = document.querySelector(".rePassword");


formulario.addEventListener('submit', function(e){
    e.preventDefault()

    // Primero validamos el formulario
    let formIsValid = true;

    // Validar nombre completo
    if (fullName.value === "") {
        errorFullName.innerText = "El nombre completo es obligatorio.";
        fullName.classList.add("is-invalid");
        formIsValid = false;
    } else {
        errorFullName.innerText = "";
        fullName.classList.remove("is-invalid");
    }

    // Validar email
    if (email.value === "") {
        errorEmail.innerText = "El correo electrónico es obligatorio.";
        email.classList.add("is-invalid");
        formIsValid = false;
    } else {
        errorEmail.innerText = "";
        email.classList.remove("is-invalid");
    }

    // Validar teléfono
    if (telefono.value === "") {
        errorTelefono.innerText = "El teléfono de contacto es obligatorio.";
        telefono.classList.add("is-invalid");
        formIsValid = false;
    } else if (telefono.value.length < 8) {
        errorTelefono.innerText = "El teléfono de contacto debe tener al menos 8 caracteres.";
        telefono.classList.add("is-invalid");
        formIsValid = false;
    } else {
        errorTelefono.innerText = "";
        telefono.classList.remove("is-invalid");
    }

    // Validar contraseña
    if (password.value === "") {
        errorPassword.innerText = "La contraseña es obligatoria.";
        password.classList.add("is-invalid");
        formIsValid = false;
    } else if (password.value.length <= 3) {
        errorPassword.innerText = "La contraseña debe tener más de 3 caracteres.";
        password.classList.add("is-invalid");
        formIsValid = false;
    } else {
        errorPassword.innerText = "";
        password.classList.remove("is-invalid");
    }

    // Validar repetir contraseña
    if (rePassword.value === "") {
        errorRePassword.innerText = "Debe repetir la contraseña.";
        rePassword.classList.add("is-invalid");
        formIsValid = false;
    } else if (rePassword.value !== password.value) {
        errorRePassword.innerText = "Las contraseñas no coinciden.";
        rePassword.classList.add("is-invalid");
        formIsValid = false;
    } else {
        errorRePassword.innerText = "";
        rePassword.classList.remove("is-invalid");
    }
     
    //Acá van las validaciones.
    if(formIsValid) {
        
        //Defino el array para luego completarlo
        let usersArray = [];

        //Recupero datos del storage
        let storage = localStorage.getItem('usuarios');

        if(storage !== null){ //Solo si hay algo en el storage lo parseo y lo meto en el array
            usersArray = JSON.parse(storage);
        }
        //Organizo los datos del usuario en un objeto literal
        let user = {
            fullName: fullName.value,
            email: email.value,
            password: password.value
        }
        //Agrego el objeto al array.
        usersArray.push(user);
        //Paso el array a string y lo guardo en localStorage
        let usersArrayToString = JSON.stringify(usersArray);
        localStorage.setItem('usuarios', usersArrayToString);
        console.log(localStorage)

        //hacemos el submit para q se envie el formulario
        formulario.submit();
    }         
   

})