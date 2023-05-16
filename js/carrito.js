let productosCarrito = JSON.parse(localStorage.getItem("productosCarrito"));
let carritoSeccion = document.getElementById("carritoSeccion");
let btnBorrarCarrito = document.getElementById("btnBorrarCarrito");
let mensaje = document.getElementById("mensaje");
let total = 0;
let btncantidad = document.getElementsByName("cantidad");
let totaltxt = document.getElementById("total");

window.addEventListener("load", function (event) {
    if (localStorage.getItem("productosCarrito") != null) {
        productosCarrito = JSON.parse(localStorage.getItem("productosCarrito"));
        mensaje.style.visibility = "hidden";

    }
    else {
        btnBorrarCarrito.style.display = "none";

    }
});

if (localStorage.getItem("productosCarrito") != null) {

mostrarProducto(productosCarrito);
calcularTotal();

for (let i = 0; i < btncantidad.length; i++) {

    btncantidad[i].addEventListener("blur", function (event) {
        event.preventDefault();  
        console.log(btncantidad[i].value);
        total += parseInt(btncantidad[i].value) * productosCarrito[i].price;
        console.log(total);
        totaltxt.textContent = "Total: $ " + total;

    });


}

}

function calcularTotal()
{
    for(let i = 0 ; i<productosCarrito.length ; i++)
    {
       total += 1 * productosCarrito[i].price; 
    }
    totaltxt.textContent = "Total: $ " + total;
}

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
                <input type="text" class="form-control" name="cantidad" value=1 />
                </div>
                <div class="cardParts">
                <h4 class="card-title"><strong>COLOR:</strong></h4>
                <select class="form-select" aria-label="Default select example">
                <option selected>Color</option>
                <option value="Negro">Negro</option>
                <option value="Azul">Azul</option>
                <option value="Rojo">Rojo</option>
                </select>
                </div>
                <div class="cardParts">
                <h4 class="card-title"><strong>PRECIO UNITARIO:</strong></h4>
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



console.log(btncantidad);





