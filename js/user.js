let btnLogOut = document.getElementById("btnLogOut");
let user = document.getElementById("user");

let usuario = JSON.parse(sessionStorage.getItem("usuarioLogin"));

user.insertAdjacentHTML("beforeend", `${usuario.nombre}`);

btnLogOut.addEventListener("click", function (event) {
    event.preventDefault();
    sessionStorage.setItem("usuarioLogin","NoLogin");
    window.location.href = "./login.html";

});