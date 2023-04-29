"use strict"

// ACCESS TO DOM
let nameTxt = document.getElementById("name");
let phone = document.getElementById("phone");
let mail = document.getElementById("mail");
let msg = document.getElementById("msg");
let btnSend = document.getElementById("btnSend");
let alertVal = document.getElementById("alertVal");
let alertValText = document.getElementById("alertValText");
let idTimeout;
let regexName = /^[A-Za-zéáíóúñÑÁÉÍÓÚ\s]+$/;
let regexPhone = /^[1-9]{1}[0-9]{9}$/;
let regexMail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
let isValid = true;

//FUNCTIONS TO VALID INPUTS

//VALID NAME
function validName(){
    if (nameTxt.value.length < 3){
        return false;
    }
    if (!nameTxt.value.match(regexName)){
        return false;   
    }
    return true; 
};

//VALID PHONE NUMBER
function validPhone(){
  if (phone.value.match(regexPhone)) {
    return true;
  }  
  return false;
};

// VALID EMAIL
function validMail(){
    if (mail.value.match(regexMail)){
        return true;
    }  
    return false;
};

// VALID MENSSAGE
function validMsg(){
    if (msg.value.length <= 20){
        return false;
    }
    return true;
};

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

  if (!validMsg()) {
    msg.style.border = "solid thin red";
    alertMsg += "<li> Se debe escribir un mensaje válido.</li>";
    alertVal.style.display = "block";
    isValid = false;
  } else {
    msg.style.border = "solid thin blue";
  }

// IF IS VALID = TRUE, SEND EMAIL WITH API "EMAILJS"

  if(isValid){
    let templateParams = {
    Subject: "Mensaje de Yeti Personalizado MX",
    Name: nameTxt.value,
    Mail: "Correo: " + mail.value,
    Phone:  "Telefono: " + phone.value,
    Message:  "Mensaje: " + msg.value
  };
  
  emailjs.send('service_g1ocj89', 'template_1vpe1so', templateParams)
    .then(function () {
    nameTxt.value = "";
    phone.value = "";
    mail.value = "";
    msg.value = "";
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Mensaje enviado',
        showConfirmButton: false,
        timer: 2500
      })
    nameTxt.focus();

    }, function () {
    alertMsg = "<li>Error al enviar email.</li>";
    alertVal.style.display = "block";
 });
}

// SET TIME OUT

alertMsg += "</ul>";
alertValText.insertAdjacentHTML("beforeend", alertMsg);
idTimeout = setTimeout(function () {
  alertVal.style.display = "none";
}, 3500);

});

//FUNCTION BLUR
nameTxt.addEventListener("blur", function (event) {
  event.preventDefault();
  nameTxt.value = nameTxt.value.trim();
  if(validName) {
    nameTxt.style.border = "solid thin blue";
  }else {
    nameTxt.style.border = "solid thin red";
  }//else
});
phone.addEventListener("blur", function (event) {
  event.preventDefault();
  phone.value = phone.value.trim();
  if(validPhone) {
    phone.style.border = "solid thin blue";
  }else {
    phone.style.border = "solid thin red";
  }//else

});

mail.addEventListener("blur", function (event) {
  event.preventDefault();
  mail.value = mail.value.trim();
  if (validMail) {
    mail.style.border = "solid thin blue";
  } else {
    mail.style.border = "solid thin red";
  }//else
});

msg.addEventListener("blur", function (event) {
  event.preventDefault();
  msg.value = msg.value.trim();
  if(validMsg) {
    msg.style.border = "solid thin blue";
  } else {
    msg.style.border = "solid thin red";
  }//else
});

// FOCUS IN NAME

// window.addEventListener("load", function (event) {
//   nameTxt.focus();
// });