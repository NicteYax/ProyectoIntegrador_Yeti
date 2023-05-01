"use strict"

// ACCESS TO DOM
let mail = document.getElementById("mail");
let pswd = document.getElementById("pswd");
let btnLogIn = document.getElementById("btnLogIn");
let alertVal = document.getElementById("alertVal");
let alertValText = document.getElementById("alertValText");
let idTimeout;
let isValid = true;
let usuario = [];
// let usuarioObjeto;

function validUser() {
    usuario = JSON.parse(localStorage.getItem("usuario"));
    for (let i = 0; i < usuario.length; i++) {
        if (usuario[i].mail == mail.value && usuario[i].pswd == pswd.value) {
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
        alertVal.style.display = "none";
        alertValText.innerHTML = "";
        window.location.href = "./index.html";
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
});

