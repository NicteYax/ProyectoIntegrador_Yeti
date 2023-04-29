let producto = JSON.parse(localStorage.getItem("datos"));
let filtro="Tazones";

      let catalogo =document.getElementById("main");

      window.addEventListener("load", function (event) {
        if (localStorage.getItem("datos") != null) {
          producto = JSON.parse(localStorage.getItem("datos"));
        }
        else {
        }
      });


      producto = JSON.parse(localStorage.getItem("datos"));
      let productosFiltrado = [];
      productosFiltrado = producto.filter((producto) => producto.category == filtro);

      mostrarProducto(productosFiltrado);

      function mostrarProducto(datos) {

        totalProductos = datos.length;
        for (let i = 0; i < totalProductos; i++) {
    
            let card = `
            <div class="card cardProduct" style="width: 18rem;">
                <img src="${datos[i].image}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${datos[i].title}</h5>
                <p class="card-text descriptionCard">${datos[i].description.slice(0, 60
                )}...</p>
                <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal_${datos[i].id}">Más info </button>
                </div>
              </div>
              <!-- Modal -->
              <div class="modal fade" id="exampleModal_${datos[i].id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                 <div class="modal-dialog">
                 <div class="modal-content">
                 <div class="modal-header">
                 <h1 class="modal-title fs-5" id="exampleModalLabel">${datos[i].title}</h1>
                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                 </div>
                 <center><img src="${datos[i].image}" class="card-img-top" alt="..." style="width: 15rem"></center>
                 <div class="modal-body">
                 ${datos[i].description}
                 <p class="text-end"><strong> $ ${datos[i].price} MXN </strong></p>
                  </div>
                  <div class="modal-footer">
                  <button type="button" class="btn" data-bs-dismiss="modal">Añadir a carrito</button>
                  </div>
                  </div>
                  </div>
                  </div>
            `;
    
            catalogo.insertAdjacentHTML("beforeend", card);
        }



    }

    
