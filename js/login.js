"use strict"

// ACCESS TO DOM
let mail = document.getElementById("mail");
let pswd = document.getElementById("pswd");
let btnLogIn = document.getElementById("btnLogIn");
let alertVal = document.getElementById("alertVal");
let alertValText = document.getElementById("alertValText");
let togglePassword = document.getElementById("togglePassword");
let idTimeout;
let isValid = true;
let usuario = [];

// TOGGLE PASSWORD 

togglePassword.addEventListener("click", function(e) {
    const type = pswd.getAttribute("type") === "password" ? "text" : "password";
    pswd.setAttribute("type", type);
    this.classList.toggle("fa-eye-slash");
});

// VALID USER

function validUser() {
    usuario = JSON.parse(localStorage.getItem("usuario"));
    for (let i = 0; i < usuario.length; i++) {
        if (usuario[i].mail == mail.value.toLowerCase() && usuario[i].pswd == pswd.value) {
            sessionStorage.setItem("usuarioLogin",JSON.stringify(usuario[i]));
            return true;
        } 
    }}

// BUTTON WITH ADD EVENT LISTENER

btnLogIn.addEventListener("click", function (event) {
    event.preventDefault();
    alertVal.style.display = "none";
    alertValText.innerHTML = "";
    isValid = true;
    clearTimeout(idTimeout);

    let alertMsg = "Correo y/o contraseña incorrecta.";

    if (validUser()){
        
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Bienvenido',
            showConfirmButton: false,
            timer: 2500
        })

        alertVal.style.display = "none";
        alertValText.innerHTML = "";

        idTimeout = setTimeout(function () {
            window.location.href = "./index.html";
            
        }, 1000);

        
    } else {
        mail.style.border = "solid thin red";
        pswd.style.border = "solid thin red";
        alertVal.style.display = "block";
    }

    alertValText.insertAdjacentHTML("beforeend", alertMsg);

});

//FUNCTION BLUR

mail.addEventListener("blur", function (event) {
    event.preventDefault();
    mail.value = mail.value.trim();
    if (validUser()) {
        mail.style.border = "solid thin blue";
        pswd.style.border = "solid thin blue";
      } 
});

pswd.addEventListener("blur", function (event) {
    event.preventDefault();
    pswd.value = pswd.value.trim();
    if (validUser()) {
        mail.style.border = "solid thin blue";
        pswd.style.border = "solid thin blue";
      } 
});

// FOCUS IN NAME


window.addEventListener("load", function (event) {
    mail.focus();  
    if (localStorage.getItem("usuario") != null) {
        usuario = JSON.parse(localStorage.getItem("usuario"));
    }
    else {

    usuario = [{
            "nombre": "Admin",
            "phone": "3333333333",
            "mail": "yetisgeneration@gmail.com",
            "pswd": "Prueba1."
        }];

      localStorage.setItem("usuario", JSON.stringify(usuario));
    
  
    }
  });