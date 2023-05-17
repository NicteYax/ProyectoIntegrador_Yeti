let productosCarrito = JSON.parse(localStorage.getItem("productosCarrito"));
let carritoSeccion = document.getElementById("prodCarrito");
let btnBorrarCarrito = document.getElementById("btnBorrarCarrito");
let mensaje = document.getElementById("mensaje");
let total = 0;
let btncantidad = document.getElementsByName("cantidad");
let totaltxt = document.getElementById("total");

window.addEventListener("load", function (event) {
    if (localStorage.getItem("productosCarrito") != null) {
        productosCarrito = JSON.parse(localStorage.getItem("productosCarrito"));
        mensaje.style.visibility = "hidden";
        mostrarProducto(productosCarrito);
        calcularTotal();
    } else {
        btnBorrarCarrito.style.display = "none";
        btnPagar.style.display = "none";
    }
});

function mostrarProducto(productosCarrito) {
    totalProductos = productosCarrito.length;
    for (let i = 0; i < totalProductos; i++) {
        let card = `
            <div name="cardProductName" class="cardProduct">
                <img src="${productosCarrito[i].image}" class="card-img-top imgCarrito" alt="...">
                <div class="cardParts">
                    <h4 class="card-title"><strong>MODELO:</strong></h4>
                    <h5 class="card-title txt">${productosCarrito[i].title}</h5>
                </div>
                <div class="cardParts">
                    <h4 class="card-title"><strong>CANTIDAD:</strong></h4>
                    <input type="number" class="form-control txt" name="cantidad" value="1" min="1" onchange="actualizarCantidad(${i}, this.value)" />
                </div>
                <div class="cardParts">
                    <h4 class="card-title"><strong>COLOR:</strong></h4>
                    <select class="form-select txt" aria-label="Default select example">
                        <option selected>Color</option>
                        <option value="Negro">Negro</option>
                        <option value="Azul">Azul</option>
                        <option value="Rojo">Rojo</option>
                    </select>
                </div>
                <div class="cardParts">
                    <h4 class="card-title"><strong>PRECIO UNITARIO:</strong></h4>
                    <h5 class="card-title txt"><strong> $ ${productosCarrito[i].price} MXN </strong></h5>
                </div>
                <button class="btn btnBorrarProducto" onclick="borrarProducto(${i})">Borrar</button>        
                </div>
        `;
        carritoSeccion.insertAdjacentHTML("beforeend", card);
    }
}

function calcularTotal() {
    total = 0;
    for (let i = 0; i < productosCarrito.length; i++) {
        total += parseInt(btncantidad[i].value) * productosCarrito[i].price;
    }
    totaltxt.textContent = "Total: $ " + total;
}

function actualizarCantidad(index, cantidad) {
    productosCarrito[index].cantidad = parseInt(cantidad);
    localStorage.setItem("productosCarrito", JSON.stringify(productosCarrito));
    calcularTotal();
}

function borrarProducto(index) {
    productosCarrito.splice(index, 1);
    localStorage.setItem("productosCarrito", JSON.stringify(productosCarrito));
    carritoSeccion.innerHTML = "";
    if (localStorage.getItem("productosCarrito") != null && productosCarrito.length >= 1) {
        productosCarrito = JSON.parse(localStorage.getItem("productosCarrito"));
        mensaje.style.visibility = "hidden";
        mostrarProducto(productosCarrito);
        calcularTotal();
    } else {
        localStorage.removeItem("productosCarrito");
        window.location.href = "./carrito.html";
    }
}

btnBorrarCarrito.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.removeItem("productosCarrito");
    window.location.href = "./carrito.html";
});

btnPagar.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "./pago.html";
});