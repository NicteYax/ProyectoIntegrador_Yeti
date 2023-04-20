"use strict"

// ACCESS TO DOM
let nameTxt = document.getElementById("name");
let precio = document.getElementById("precio");
let categoria = document.getElementById("categoria");
let descripcion = document.getElementById("descripcion");
let foto = document.getElementById("foto");
let btnSend = document.getElementById("btnSend");
let alertVal = document.getElementById("alertVal");
let alertValText = document.getElementById("alertValText");
let idTimeout;
let regexName = /^[A-Za-zéáíóúñÑÁÉÍÓÚ\s]+$/;
let regexMail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
let regexPrice = /\d{1,3}(?:[.,]\d{3})*(?:[.,]\d{2})/;

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

//VALID PRECIO
function validPrecio(){
    if (precio.value.match(regexPrice)){
        return true;
    } 
    return false;

};

// VALID CATEGORIA
function validCategoria(){
    if (categoria.value.length < 3){
        return false;
    }
    if (!categoria.value.match(regexName)){
        return false;   
    }
    return true; 
};

// VALID DESCRIPCION
function validDescripcion(){
    if (categoria.value.length < 4){
        return false; 
    }
    return true; 
};

//IMG


// BUTTON WITH ADD EVENT LISTENER

btnSend.addEventListener("click", function (event) {
  event.preventDefault();
  alertVal.style.display = "none";
  alertValText.innerHTML = "";
  isValid = true;
  clearTimeout(idTimeout);
  
  console.log(validName());
  console.log(validPrecio());
  console.log(validCategoria());
  console.log(validDescripcion());

//   // ERROR MESSAGES

//   let alertMsg = "Los siguientes campos deben ser llenados correctamente: <ul>";
//   if (!validName()) {
//     nameTxt.style.border = "solid thin red";
//     alertMsg += "<li> Se debe escribir un nombre válido.</li>";
//     alertVal.style.display = "block";
//     isValid = false;
//   } else {
//     nameTxt.style.border = "solid thin blue";
//   }

//   if (!validPhone()) {
//     phone.style.border = "solid thin red";
//     alertMsg += "<li> Se debe escribir un número de teléfono válido.</li>";
//     alertVal.style.display = "block";
//     isValid = false;
//   } else {
//     phone.style.border = "solid thin blue";
//   }

//   if (!validMail()) {
//     mail.style.border = "solid thin red";
//     alertMsg += "<li> Se debe escribir un e-mail válido.</li>";
//     alertVal.style.display = "block";
//     isValid = false;
//   } else {
//     mail.style.border = "solid thin blue";
//   }

//   if (!validMsg()) {
//     msg.style.border = "solid thin red";
//     alertMsg += "<li> Se debe escribir un mensaje válido.</li>";
//     alertVal.style.display = "block";
//     isValid = false;
//   } else {
//     msg.style.border = "solid thin blue";
//   }

// // IF IS VALID = TRUE, SEND EMAIL WITH API "EMAILJS"

//   if(isValid){
//     let templateParams = {
//     Subject: "Mensaje de Yeti Personalizado MX",
//     Name: nameTxt.value,
//     Mail: "Correo: " + mail.value,
//     Phone:  "Telefono: " + phone.value,
//     Message:  "Mensaje: " + msg.value
//   };
  
//   emailjs.send('service_g1ocj89', 'template_1vpe1so', templateParams)
//   .then(function(response) {
//     console.log('SUCCESS!', response.status, response.text);
//     alert("Mensaje enviado");
//     nameTxt.value = "";
//     phone.value = "";
//     mail.value = "";
//     msg.value = "";
//     nameTxt.focus();

//  }, function(error) {
//     console.log('FAILED...', error);
//     alertMsg = "<li>Error al enviar email.</li>";
//     alertVal.style.display = "block";
//  });
// }

// // SET TIME OUT

// alertMsg += "</ul>";
// alertValText.insertAdjacentHTML("beforeend", alertMsg);
// idTimeout = setTimeout(function () {
//   alertVal.style.display = "none";
// }, 5000);
// console.log(validName());
// console.log(validPhone());
// console.log(validMail());
// console.log(validMsg());

 });

// //FUNCTION BLUR
// nameTxt.addEventListener("blur", function (event) {
//   event.preventDefault();
//   nameTxt.value = nameTxt.value.trim();
// });
// phone.addEventListener("blur", function (event) {
//   event.preventDefault();
//   phone.value = phone.value.trim();
// });

// mail.addEventListener("blur", function (event) {
//   event.preventDefault();
//   mail.value = mail.value.trim();
// });

// msg.addEventListener("blur", function (event) {
//   event.preventDefault();
//   msg.value = msg.value.trim();
// });

// // FOCUS IN NAME

// window.addEventListener("load", function (event) {
//   nameTxt.focus();
// });