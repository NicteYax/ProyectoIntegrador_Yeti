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

btnSend.addEventListener("click", function (event) {
  event.preventDefault();
  alertVal.style.display = "none";
  alertValText.innerHTML = "";
  isValid = true;
  clearTimeout(idTimeout);

  let alertMsg = "Los siguientes campos deben ser llenados correctamente: <ul>";
  if (!validName()) {
    nameTxt.style.border = "solid thin red";
    alertMsg += "<li> Se debe escribir un nombre válido.</li>";
    alertVal.style.display = "block";
    isValid = false;
  } else {
    nameTxt.style.border = "";
  }

  if (!validPhone()) {
    phone.style.border = "solid thin red";
    alertMsg += "<li> Se debe escribir un número de teléfono válido.</li>";
    alertVal.style.display = "block";
    isValid = false;
  } else {
    phone.style.border = "";
  }

  if (!validMail()) {
    mail.style.border = "solid thin red";
    alertMsg += "<li> Se debe escribir un e-mail válido.</li>";
    alertVal.style.display = "block";
    isValid = false;
  } else {
    mail.style.border = "";
  }

  if (!validMsg()) {
    msg.style.border = "solid thin red";
    alertMsg += "<li> Se debe escribir un mensaje válido.</li>";
    alertVal.style.display = "block";
    isValid = false;
  } else {
    msg.style.border = "";
  }

  alertMsg += "</ul>";
  alertValText.insertAdjacentHTML("beforeend", alertMsg);
  idTimeout = setTimeout(function () {
    alertVal.style.display = "none";
  }, 5000);
  console.log(validName());
  console.log(validPhone());
  console.log(validMail());
  console.log(validMsg());

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
    (message) => alert(message) // mostrar mensaje enviado, pendiente
  );
  nameTxt.value = "";
  phone.value = "";
  mail.value = "";
  msg.value = "";
  nameTxt.focus();
});

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