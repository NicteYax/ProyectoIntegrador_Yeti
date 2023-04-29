"use strict"

// ACCESS TO DOM
let mail = document.getElementById("mail");
let pswd = document.getElementById("pswd");
let btnLogIn = document.getElementById("btnLogIn");
let alertVal = document.getElementById("alertVal");
let alertValText = document.getElementById("alertValText");
let idTimeout;
let regexMail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
let regexPswd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*.?&])[A-Za-z\d$@$!%*.?&]{8,100}$/;
let isValid = true;
let usuarioObjeto;

//FUNCTIONS TO VALID INPUTS

// VALID EMAIL
function validMail() {
    if (mail.value.match(regexMail)) {
        return true;
    }
    return false;
};

// VALID PSSWD
function validPswd() {
    if (pswd.value.match(regexPswd)) {
        return true;
    }
    return false;
};

function validPswdRepeat() {
    if (pswd.value === pswdRepeat.value && validPswd()) {
        return true;
    } else {
        pswdRepeat.value = "";
        return false;
    }
}

// BUTTON WITH ADD EVENT LISTENER

btnLogIn.addEventListener("click", function (event) {
    event.preventDefault();
    alertVal.style.display = "none";
    alertValText.innerHTML = "";
    isValid = true;
    clearTimeout(idTimeout);

    // ERROR MESSAGES

    let alertMsg = "Los siguientes campos deben ser llenados correctamente: <ul>";
    if (!validMail()) {
        mail.style.border = "solid thin red";
        alertMsg += "<li> Se debe escribir un e-mail válido.</li>";
        alertVal.style.display = "block";
        isValid = false;
    } else {
        mail.style.border = "solid thin blue";
    }

    if (!validPswd()) {
        pswd.style.border = "solid thin red";
        alertMsg += "<li> Debe incluir al menos 8 caractéres, 1 mayúscula, 1 minúscula, 1 número, 1 caracter especial: @$!%*.?& y no debe contener espacios.</li>";
        alertVal.style.display = "block";
        isValid = false;
        pswd.value = "";
    } else {
        pswd.style.border = "solid thin blue";
    }

    // IF IS VALID = TRUE, SEND EMAIL WITH API "EMAILJS"

    if (isValid) {
        //JSON
        let usuario = `{
            "mail": "${mail.value}",
            "pswd": "${pswd.value}"
        }`;
        
        usuarioObjeto=JSON.parse(usuario);
        
        localStorage.setItem("usuario",JSON.stringify(usuarioObjeto));
        
        mail.value = "";
        pswd.value = "";
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Registro exitoso',
            showConfirmButton: false,
            timer: 2500
        })
    }

    alertMsg += "</ul>";
    alertValText.insertAdjacentHTML("beforeend", alertMsg);
    idTimeout = setTimeout(function () {
        alertVal.style.display = "none";
    }, 15000);
    
});

//FUNCTION BLUR

mail.addEventListener("blur", function (event) {
    event.preventDefault();
    mail.value = mail.value.trim();
    if (validMail()) {
        mail.style.border = "solid thin blue";
      } else {
        mail.style.border = "solid thin red";
      }//else
});

pswd.addEventListener("blur", function (event) {
    event.preventDefault();
    pswd.value = pswd.value.trim();
    if(validPswd()){
        pswd.style.border = "solid thin blue";
      } else {
        pswd.style.border = "solid thin red";
    }//else
});

// FOCUS IN NAME

window.addEventListener("load", function (event) {
    mail.focus();
});

