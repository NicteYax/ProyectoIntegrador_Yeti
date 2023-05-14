let productosCarrito = JSON.parse(localStorage.getItem("productosCarrito"));
let carritoSeccion = document.getElementById("carritoSeccion");
let btnBorrarCarrito = document.getElementById("btnBorrarCarrito");
let mensaje = document.getElementById("mensaje");

window.addEventListener("load", function (event) {
    if (localStorage.getItem("productosCarrito") != null) {
        productosCarrito = JSON.parse(localStorage.getItem("productosCarrito"));
        mostrarProducto(productosCarrito);
        mensaje.style.visibility = "hidden";

    }
    else {
        btnBorrarCarrito.style.display = "none";

    }
});


function mostrarProducto(productosCarrito) {

    totalProductos = productosCarrito.length;
    for (let i = 0; i < totalProductos; i++) {

        let card = `
              <div class="cardProduct">
                  <img src="${productosCarrito[i].image}" class="card-img-top imgCarrito" alt="...">
                  <div class="cardParts">
                  <h4 class="card-title"><strong>MODELO:</strong></h4>
                  <h5 class="card-title">${productosCarrito[i].title}</h5>
                  <p class="card-text descriptionCard">${productosCarrito[i].description.slice(0, 40
        )}...</p>
                </div>
                <div class="cardParts">
                <h4 class="card-title"><strong>CANTIDAD:</strong></h4>
                <select class="form-select" aria-label="Default select example">
                <option selected>Cantidad</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                </select>
                </div>
                <div class="cardParts">
                <h4 class="card-title"><strong>COLOR:</strong></h4>
                <select class="form-select" aria-label="Default select example">
                <option selected>Color</option>
                <option value="1">Negro</option>
                <option value="2">Azul</option>
                <option value="3">Rojo</option>
                </select>
                </div>
                <div class="cardParts">
                <h4 class="card-title"><strong>CANTIDAD:</strong></h4>
                <p class="text-end"><strong> $ ${productosCarrito[i].price} MXN </strong></p>
                </div>
                </div>
              `;

        carritoSeccion.insertAdjacentHTML("beforeend", card);
    }



}

btnBorrarCarrito.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.removeItem("productosCarrito");
    window.location.href = "./carrito.html";

});


