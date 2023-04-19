let producto = [
    {
      id: 1,
      title: "Apilable 26 oz",
      price: 0,
      description:"Una taza grande para grandes tragos: perfecta para tés, agua fría o batidos XL. Cabe en la mayoría de los portavasos.",
      category: "Termos",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
        id: 2,
        title: "Hotshot 12 oz",
        price: 0,
        description:
          "Nuestra botella clásica combinada con la tapa 360º HotShot™, es a prueba de fugas. Lleva tu café mientras viajas. Cabe en la mayoría de los portavasos.",
        category: "Termos",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      },
      {
        id: 3,
        title: "Lowball 10 oz",
        price: 0,
        description:
          "Vaso pequeño, apilable, clásico y versátil para tu cóctel en el campamento.",
        category: "Termos",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      },
      {
        id: 4,
        title: "Mug 10 oz",
        price: 0,
        description:
          "Taza apilable para almacenamiento. Es compacta y aislada, ideal para bebidas calientes.",
        category: "Termos",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      },
      {
        id: 5,
        title: "Mug 14 oz",
        price: 0,
        description:
          "Una taza versátil que es lo suficientemente grande como para servir como tazón de campamento.",
        category: "Termos",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      },
      {
        id: 6,
        title: "Mug 24 oz",
        price: 0,
        description:
          "Una taza para beer gardens, cervezas en casa y bebidas abundantes.",
        category: "Termos",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      },
      {
        id: 7,
        title: "Pint 16 oz",
        price: 0,
        description:
          "Un vaso de fiesta reutilizable, diseñado para cocteles, cervezas o smoothies. Cabe en la mayoría de los portavasos.",
        category: "Termos",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      },
      {
        id: 8,
        title: "Portalata 12 oz",
        price: 0,
        description:
          "Mantén las cervezas y los refrescos fríos en los días más calurosos. Cabe en la mayoría de los portavasos.",
        category: "Termos",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      },
      {
        id: 9,
        title: "Portalata Slim 12 oz",
        price: 0,
        description:
          "Los Hard seltzers se mantienen fríos en la playa o en el barco. Cabe en la mayoría de los portavasos.",
        category: "Termos",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      },
      {
        id: 10,
        title: "Portalata Tall 16 oz",
        price: 0,
        description:
          "Las cervezas artesanales se mantienen frías hasta el último sorbo en cervecerías, playas y carnes asadas en el patio trasero. Cabe en la mayoría de los portavasos.",
        category: "Termos",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      },
      {
        id: 11,
        title: "Termo 18 oz",
        price: 0,
        description:
          "Hidratación en mano para caminatas matutinas, paseos en kayak y viajes diarios. Cabe en la mayoría de los portavasos.",
        category: "Termos",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      },
      {
        id: 12,
        title: "Termo 26 oz",
        price: 0,
        description:
          "Una botella a prueba de fugas que se adapta a la cantidad justa de hidratación, con una tapa para beber fácilmente.",
        category: "Termos",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      },
      {
        id: 13,
        title: "Termo 36 oz",
        price: 0,
        description:
          "La botella aislada más grande, te ayuda a mantenerte hidratado en tu día libre.",
        category: "Termos",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      },
      {
        id: 14,
        title: "Termo 46 oz",
        price: 0,
        description:
          "Una botella de gran tamaño diseñada para seguirte hasta el fin del mundo y mantenerte hidratado en el camino.",
        category: "Termos",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      },
      {
        id: 15,
        title: "Termo 64 oz",
        price: 0,
        description:
          "Una botella más grande para los días en el rancho o en el bote.",
        category: "Termos",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      },
      {
        id: 16,
        title: "Termo Galón",
        price: 0,
        description:
          "Casi 24 horas de agua para seguirte desde el gimnasio hasta el rancho y de vuelta a casa.",
        category: "Termos",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      }];

      let catalogo =document.getElementById("main");
      mostrarProducto(producto);

      function mostrarProducto(datos) {

        totalProductos = datos.length;
        for (let i = 0; i < totalProductos; i++) {
    
            let card = `
            <div class="card cardProduct" style="width: 18rem;">
                <img src="${datos[i].image}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${datos[i].title}</h5>
                <p class="card-text">${datos[i].description}</p>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal_${datos[i].id}">Más info </button>
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
                 <div class="modal-body">
                 ${datos[i].description}
                 <p class="text-end"><strong> $ ${datos[i].price} MXN </strong></p>
                  </div>
                  <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                  </div>
                  </div>
                  </div>
                  </div>
            `;
    
            catalogo.insertAdjacentHTML("beforeend", card);
        }
    
    }
