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
let id;
let datos = [];
let fileImage = document.getElementById('fileImage');
let btnFake = document.getElementById('btnFake');
let imageFile = document.getElementById('imageFile');

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

//VALID PRECIO
function validPrecio() {
  if (precio.value.match(regexPrice)) {
    return true;
  }
  return false;

};

// VALID CATEGORIA
function validCategoria() {
  if (categoria.value =="Selecciona la categoría") {
    return false;
  }
  return true;
};

// VALID DESCRIPCION
function validDescripcion() {
  if (descripcion.value.length < 4) {
    return false;
  }
  return true;
};

//IMG
btnFake.addEventListener('click', function(){
  fileImage.click();
  });
  fileImage.addEventListener('change', function(){
      previewFile('imageFile', 'fileImage', 'inputFile' )
      imageFile.style.display = "block";
      //previewFile(id imagen, input type file , textArea);
  });

  //previewFile(id imagen, input type file , textArea);
  function previewFile(img, inputFile, input) {
    
    var preview = document.getElementById(img);
    var file    = document.getElementById(inputFile).files[0];
    var reader  = new FileReader();

    reader.addEventListener("load", function () {
      document.getElementById(input).value = reader.result;
        preview.src = reader.result;
      }, false);
    
      if (file) {
        reader.readAsDataURL(file);
      }// file
  }// previewFile 

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

  if (!validPrecio()) {
    precio.style.border = "solid thin red";
    alertMsg += "<li> Se debe escribir un precio válido.</li>";
    alertVal.style.display = "block";
    isValid = false;
  } else {
    precio.style.border = "solid thin blue";
  }

  if (!validCategoria()) {
    categoria.style.border = "solid thin red";
    alertMsg += "<li> Se debe escribir una categoría válida.</li>";
    alertVal.style.display = "block";
    isValid = false;
  } else {
    categoria.style.border = "solid thin blue";
  }

  if (!validDescripcion()) {
    descripcion.style.border = "solid thin red";
    alertMsg += "<li> Se debe escribir una descripción válida.</li>";
    alertVal.style.display = "block";
    isValid = false;
  } else {
    descripcion.style.border = "solid thin blue";
  }


  // JSON
  if (isValid) {
    datos = JSON.parse(localStorage.getItem("datos"));
    id = (datos[datos.length-1].id);
    id++;
    let elemento = `{
                "id": ${id},
                "title": "${nameTxt.value}",
                "price": ${precio.value},
                "category": "${categoria.value}",
                "description": "${descripcion.value}",
                "image": "${inputFile.value}"
    }`;

    datos.push(JSON.parse(elemento));

    nameTxt.value = "";
    precio.value = "";
    categoria.value = "";
    descripcion.value = "";
    inputFile.value = "";
    imageFile.style.display = "none";

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Producto agregado',
      showConfirmButton: false,
      timer: 2500
    })
    localStorage.setItem("datos", JSON.stringify(datos));
  }

  // SET TIME OUT
  alertMsg += "</ul>";
  alertValText.insertAdjacentHTML("beforeend", alertMsg);
  idTimeout = setTimeout(function () {
    alertVal.style.display = "none";
    nameTxt.style.border = "";
    precio.style.border = "";
    categoria.style.border = "";
    descripcion.style.border = "";
  }, 15000);

});//btnSend.addEventListener



//FUNCTION BLUR
nameTxt.addEventListener("blur", function (event) {
  event.preventDefault();
  nameTxt.value = nameTxt.value.trim();
  if(validName()) {
    nameTxt.style.border = "solid thin blue";
  }
  else {
    nameTxt.style.border = "solid thin red";
  }//else
});
precio.addEventListener("blur", function (event) {
  event.preventDefault();
  precio.value = precio.value.trim();
  if(validPrecio()) {
    precio.style.border = "solid thin blue";
  }
  else {
    precio.style.border = "solid thin red";
  }
});
categoria.addEventListener("blur", function (event) {
  event.preventDefault();
  categoria.value = categoria.value.trim();
  if(validCategoria()) {
    categoria.style.border = "solid thin blue";
  }
  else {
    categoria.style.border = "solid thin red";
  }
  
});
descripcion.addEventListener("blur", function (event) {
  event.preventDefault();
  descripcion.value = descripcion.value.trim();
  if(validDescripcion()) {
    descripcion.style.border = "solid thin blue";
  }
  else {
    descripcion.style.border = "solid thin red";
  }
});


// FOCUS IN NAME

window.addEventListener("load", function (event) {
  nameTxt.focus();
  if (localStorage.getItem("datos") != null) {
    datos = JSON.parse(localStorage.getItem("datos"));

    
  }
  else {

  }
});

