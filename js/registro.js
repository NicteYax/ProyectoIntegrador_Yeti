"use strict"

// ACCESS TO DOM
let nameTxt = document.getElementById("name");
let phone = document.getElementById("phone");
let mail = document.getElementById("mail");
let pswd = document.getElementById("pswd");
let pswdRepeat = document.getElementById("pswdRepeat");
let btnSend = document.getElementById("btnSend");
let alertVal = document.getElementById("alertVal");
let alertValText = document.getElementById("alertValText");
let idTimeout;
let regexName = /^[A-Za-zéáíóúñÑÁÉÍÓÚ\s]+$/;
let regexMail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
let regexPhone = /^[1-9]{1}[0-9]{9}$/;
let regexPswd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*.?&])[A-Za-z\d$@$!%*.?&]{8,15}$/;
let isValid = true;
let usuarioObjeto;

//FUNCTIONS TO VALID INPUTS

//VALID NAME
function validName() {
    if (nameTxt.value.length < 3) {
        return false;
    }
    if (!nameTxt.value.match(regexName)) {
        return false;
    }
    return true;
};

//VALID PHONE NUMBER
function validPhone() {
    if (phone.value.match(regexPhone)) {
        return true;
    }
    return false;
};

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

btnSend.addEventListener("click", function (event) {
    event.preventDefault();
    alertVal.style.display = "none";
    alertValText.innerHTML = "";
    isValid = true;
    clearTimeout(idTimeout);

    // ERROR MESSAGES

    let alertMsg = "Los siguientes campos deben ser llenados correctamente: <ul>";
    if (!validName()) {
        nameTxt.style.border = "solid thin red";
        alertMsg += "<li> Se debe escribir un nombre válido.</li>";
        alertVal.style.display = "block";
        isValid = false;
    } else {
        nameTxt.style.border = "solid thin blue";
    }

    if (!validPhone()) {
        phone.style.border = "solid thin red";
        alertMsg += "<li> Se debe escribir un número de teléfono válido.</li>";
        alertVal.style.display = "block";
        isValid = false;
    } else {
        phone.style.border = "solid thin blue";
    }

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
        alertMsg += "<li> Debe incluir al menos 8 caractéres, máximo 15, 1 mayúscula, 1 minúscula, 1 número, 1 caracter especial: @$!%*.?& y no debe contener espacios.</li>";
        alertVal.style.display = "block";
        isValid = false;
        pswd.value = "";
    } else {
        pswd.style.border = "solid thin blue";
    }
    if (!validPswdRepeat()) {
        pswdRepeat.style.border = "solid thin red";
        alertMsg += "<li> La contraseña no coincide.</li>";
        alertVal.style.display = "block";
        isValid = false;
        pswdRepeat.value = "";
    } else {
        pswdRepeat.style.border = "solid thin blue";
    }

    // IF IS VALID = TRUE, SEND EMAIL WITH API "EMAILJS"

    if (isValid) {
        //JSON
        let usuario = `{
            "nombre": "${nameTxt.value}",
            "phone": ${phone.value},
            "mail": "${mail.value}",
            "pswd": "${pswd.value}"
        }`;
        
        usuarioObjeto=JSON.parse(usuario);
        
        localStorage.setItem("usuario",JSON.stringify(usuarioObjeto));
        
        nameTxt.value = "";
        phone.value = "";
        mail.value = "";
        pswd.value = "";
        pswdRepeat.value = "";
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
    }, 5000);
    
});

//FUNCTION BLUR
nameTxt.addEventListener("blur", function (event) {
    event.preventDefault();
    nameTxt.value = nameTxt.value.trim();
});
phone.addEventListener("blur", function (event) {
    event.preventDefault();
    phone.value = phone.value.trim();
});

mail.addEventListener("blur", function (event) {
    event.preventDefault();
    mail.value = mail.value.trim();
});

pswd.addEventListener("blur", function (event) {
    event.preventDefault();
    pswd.value = pswd.value.trim();
});

pswdRepeat.addEventListener("blur", function (event) {
    event.preventDefault();
    pswdRepeat.value = pswdRepeat.value.trim();
});

// FOCUS IN NAME

window.addEventListener("load", function (event) {
    nameTxt.focus();
});

