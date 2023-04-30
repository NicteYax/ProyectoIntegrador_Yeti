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



// BUTTON WITH ADD EVENT LISTENER

btnLogIn.addEventListener("click", function (event) {
    event.preventDefault();
    alertVal.style.display = "none";
    alertValText.innerHTML = "";
    isValid = true;
    clearTimeout(idTimeout);

    let alertMsg = "Los siguientes campos deben ser llenados correctamente: <ul>";
    usuario = JSON.parse(localStorage.getItem("usuario"));
    for (let i = 0; i < usuario.length; i++) {
        console.log(usuario);
        if (usuario[i].mail == mail.value && usuario[i].pswd == pswd.value) {
            isValid = true;
            alertVal.style.display = "none";
            alertValText.innerHTML = "";
            window.location.href = "./index.html";

        } else {
            mail.style.border = "solid thin red";
            alertMsg += "<li> Correo y/o contraseña incorrecta. </li>";
            alertVal.style.display = "block";
            console.log("Error");
            isValid = false;
        }
    }

    alertMsg += "</ul>";
    alertValText.insertAdjacentHTML("beforeend", alertMsg);

});

//FUNCTION BLUR

// mail.addEventListener("blur", function (event) {
//     event.preventDefault();
//     mail.value = mail.value.trim();
//     if (validMail()) {
//         mail.style.border = "solid thin blue";
//       } else {
//         mail.style.border = "solid thin red";
//       }//else
// });

// pswd.addEventListener("blur", function (event) {
//     event.preventDefault();
//     pswd.value = pswd.value.trim();
//     if(validPswd()){
//         pswd.style.border = "solid thin blue";
//       } else {
//         pswd.style.border = "solid thin red";
//     }//else
// });

// FOCUS IN NAME

window.addEventListener("load", function (event) {
    mail.focus();
});

