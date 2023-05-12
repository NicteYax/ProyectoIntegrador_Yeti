let btnLogOut = document.getElementById("btnLogOut");
let user = document.getElementById("user");

if ((sessionStorage.getItem("usuarioLogin") != null)) {
    let usuario = JSON.parse(sessionStorage.getItem("usuarioLogin"));

    user.insertAdjacentHTML("beforeend", `${usuario.nombre}`);
}

btnLogOut.addEventListener("click", function (event) {
    event.preventDefault();
    sessionStorage.removeItem("usuarioLogin");
    window.location.href = "./login.html";

});