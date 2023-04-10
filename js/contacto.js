"use strict"
let nameTxt = document.getElementById("name");
let phone = document.getElementById("phone");
let mail = document.getElementById("mail");
let msg = document.getElementById("msg");
let btnSend = document.getElementById("btnSend");
let alertVal = document.getElementById("alertVal");
let alertValText = document.getElementById("alertValText");
let idTimeout;
let regexName = /^[A-Za-zéáíóúñÑÁÉÍÓÚ\s]+$/;
let regexMail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
let isValid = true;


function validName(){
    if (nameTxt.value.length < 3){
        return false;
    }
    if (!nameTxt.value.match(regexName)){
        return false;   
    }
    return true; 
};

function validPhone(){
    if (phone.value.length!=10){
        return false;
    }
    if (isNaN(phone.value)){
        return false;   
    }
    return true;
};

function validMail(){
    if (mail.value.match(regexMail)){
        return true;
    }  
    return false;
};

function validMsg(){
    if (msg.value.length <= 20){
        return false;
    }
    return true;
};

btnSend.addEventListener("click", function(event){
    event.preventDefault();
    alertVal.style.display = "none";
    alertValText.innerHTML = "";
    isValid = true;
    clearTimeout(idTimeout);

    let alertMsg = "Los siguientes campos deben ser llenados correctamente: <ul>";
    if (!validName()){
        nameTxt.style.border = "solid thin red";
        alertMsg += "<li> Se debe escribir un nombre válido.</li>";
        alertVal.style.display = "block";
        isValid = false;
    } else {
        nameTxt.style.border = "";
    }

    if (!validPhone()){
        phone.style.border = "solid thin red";
        alertMsg += "<li> Se debe escribir un número de teléfono válido.</li>";
        alertVal.style.display = "block";
        isValid = false;
    } else {
        phone.style.border = "";
    }

    if (!validMail()){
        mail.style.border = "solid thin red";
        alertMsg += "<li> Se debe escribir un e-mail válido.</li>";
        alertVal.style.display = "block";
        isValid = false;
    } else {
        mail.style.border = "";
    }

    if (!validMsg()){
        msg.style.border = "solid thin red";
        alertMsg += "<li> Se debe escribir un mensaje válido.</li>";
        alertVal.style.display = "block";
        isValid = false;
    } else {
        msg.style.border = "";
    }

    alertMsg += "</ul>"
    alertValText.insertAdjacentHTML("beforeend", alertMsg);
    idTimeout = setTimeout(function (){ 
        alertVal.style.display="none";
    }, 5000);
    console.log(validName());
    console.log(validPhone());
    console.log(validMail());
    console.log(validMsg());

    Email.send({
        SecureToken: "f4e9ca31-f805-4446-9619-1c678b4571cf",
        To : 'yetisgeneration@gmail.com',
        From : mail,
        Subject : "Mensaje de Yeti Personalizado",
        Body : "Nombre: " + nameTxt + "<br>Correo: " + mail + "<br>Telefono: " + phone + "<br>Mensaje: "+ msg
    }).then(
      message => alert(message)
    );
    Email.toString();
});

