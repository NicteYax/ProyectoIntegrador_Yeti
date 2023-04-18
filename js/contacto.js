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
let regexMail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
let isValid = true;
let sended = false;

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
  if (phone.value.length != 10) {
    return false;
  }
  if (isNaN(phone.value)) {
    return false;
  }
  return true;
};

// VALID EMAIL
function validMail() {
  if (mail.value.match(regexMail)) {
    return true;
  }
  return false;
};

// VALID MENSSAGE
function validMsg() {
  if (msg.value.length <= 20) {
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
  sended = false;
  clearTimeout(idTimeout);

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




  console.log(validName());
  console.log(validPhone());
  console.log(validMail());
  console.log(validMsg());

  // FINAL VALIDATION (X4)
  if (isValid) {
    
    // SEND EMAIL WITH API SMTPJS.COM
    Email.send({
      SecureToken: "8a984eb9-44f5-4ca9-a036-314ed8874bd3",
      To: "yetisgeneration@gmail.com",
      From: mail.value,
      Subject: "Mensaje de Yeti Personalizado MX",
      Body:
        "Nombre: " +
        nameTxt.value +
        "<br>Correo: " +
        mail.value +
        "<br>Telefono: " +
        phone.value +
        "<br>Mensaje: " +
        msg.value,
    }).then(
      (message) => {
        ///////////////////////////verificar enviado cambiar estado de variable sended cuando se envie.
        //alert(message);

      }// Enviar

    )
      .catch((error) => {
        alertMsg += "<li> " + error + ".</li>";
        alertVal.style.display = "block";

      }// Error - Enviar
      );


    //SENDED VALIDATION
    if (sended) {
      nameTxt.value = "";
      phone.value = "";
      mail.value = "";
      msg.value = "";
      ///////////////////// // mostrar mensaje enviado, pendiente

    }
    else {
      alertMsg = "<li> Error al enviar email.</li>";
      alertVal.style.display = "block";
    }

  }


  //SET ERRORS MESSAGES
  alertMsg += "</ul>";
  alertValText.insertAdjacentHTML("beforeend", alertMsg);

  //SET TIMEOUT
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

msg.addEventListener("blur", function (event) {
  event.preventDefault();
  msg.value = msg.value.trim();
});


window.addEventListener("load", function (event) {
  nameTxt.focus();
});