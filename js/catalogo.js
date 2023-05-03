window.addEventListener("load", function (event) {
      
    if (localStorage.getItem("datos") != null) {
      producto = JSON.parse(localStorage.getItem("datos"));
    }
    else {

      let productos = [
        {
          "id": 1,
          "title": "Apilable 26 oz",
          "price": 0,
          "description":"Una taza grande para grandes tragos: perfecta para tés, agua fría o batidos XL. Cabe en la mayoría de los portavasos.",
          "category": "Termos",
          "image": "/src/catalogo/Termos/APILABLE26oz.png"
        },
        {
            "id": 2,
            "title": "Hotshot 12 oz",
            "price": 0,
            "description":
              "Nuestra botella clásica combinada con la tapa 360º HotShot™, es a prueba de fugas. Lleva tu café mientras viajas. Cabe en la mayoría de los portavasos.",
            "category": "Termos",
            "image": "/src/catalogo/Termos/HOTSHOT 12oz.png"
          },
          {
            "id": 3,
            "title": "Lowball 10 oz",
            "price": 0,
            "description":
              "Vaso pequeño, apilable, clásico y versátil para tu cóctel en el campamento.",
            "category": "Termos",
            "image": "/src/catalogo/Termos/LOWBALL.png"
          },
          {
            "id": 4,
            "title": "Mug 10 oz",
            "price": 0,
            "description":
              "Taza apilable para almacenamiento. Es compacta y aislada, ideal para bebidas calientes.",
            "category": "Termos",
            "image": "/src/catalogo/Termos/MUG 10oz.png"
          },
          {
            "id": 5,
            "title": "Mug 14 oz",
            "price": 0,
            "description":
              "Una taza versátil que es lo suficientemente grande como para servir como tazón de campamento.",
            "category": "Termos",
            "image": "/src/catalogo/Termos/MUG 14oz.png"
          },
          {
            "id": 6,
            "title": "Mug 24 oz",
            "price": 0,
            "description":
              "Una taza para beer gardens, cervezas en casa y bebidas abundantes.",
            "category": "Termos",
            "image": "/src/catalogo/Termos/MUG 24oz.png"
          },
          {
            "id": 7,
            "title": "Pint 16 oz",
            "price": 0,
            "description":
              "Un vaso de fiesta reutilizable, diseñado para cocteles, cervezas o smoothies. Cabe en la mayoría de los portavasos.",
            "category": "Termos",
            "image": "/src/catalogo/Termos/PINT 16oz.png"
          },
          {
            "id": 8,
            "title": "Portalata 12 oz",
            "price": 0,
            "description":
              "Mantén las cervezas y los refrescos fríos en los días más calurosos. Cabe en la mayoría de los portavasos.",
            "category": "Termos",
            "image": "/src/catalogo/Termos/PORTALATA.png"
          },
          {
            "id": 9,
            "title": "Portalata Slim 12 oz",
            "price": 0,
            "description":
              "Los Hard seltzers se mantienen fríos en la playa o en el barco. Cabe en la mayoría de los portavasos.",
            "category": "Termos",
            "image": "/src/catalogo/Termos/SLIM.png"
          },
          {
            "id": 10,
            "title": "Portalata Tall 16 oz",
            "price": 0,
            "description":
              "Las cervezas artesanales se mantienen frías hasta el último sorbo en cervecerías, playas y carnes asadas en el patio trasero. Cabe en la mayoría de los portavasos.",
            "category": "Termos",
            "image": "/src/catalogo/Termos/TALL.png"
          },
          {
            "id": 11,
            "title": "Termo 18 oz",
            "price": 0,
            "description":
              "Hidratación en mano para caminatas matutinas, paseos en kayak y viajes diarios. Cabe en la mayoría de los portavasos.",
            "category": "Termos",
            "image": "/src/catalogo/Termos/TERMO 18oz.png"
          },
          {
            "id": 12,
            "title": "Termo 26 oz",
            "price": 0,
            "description":
              "Una botella a prueba de fugas que se adapta a la cantidad justa de hidratación, con una tapa para beber fácilmente.",
            "category": "Termos",
            "image": "/src/catalogo/Termos/TERMO 26oz.png"
          },
          {
            "id": 13,
            "title": "Termo 36 oz",
            "price": 0,
            "description":
              "La botella aislada más grande, te ayuda a mantenerte hidratado en tu día libre.",
            "category": "Termos",
            "image": "/src/catalogo/Termos/TERMO 36oz.png"
          },
          {
            "id": 14,
            "title": "Termo 46 oz",
            "price": 0,
            "description":
              "Una botella de gran tamaño diseñada para seguirte hasta el fin del mundo y mantenerte hidratado en el camino.",
            "category": "Termos",
            "image": "/src/catalogo/Termos/TERMO 46oz.png"
          },
          {
            "id": 15,
            "title": "Termo 64 oz",
            "price": 0,
            "description":
              "Una botella más grande para los días en el rancho o en el bote.",
            "category": "Termos",
            "image": "/src/catalogo/Termos/TERMO 64oz.png"
          },
          {
            "id": 16,
            "title": "Termo Galón",
            "price": 0,
            "description":
              "Casi 24 horas de agua para seguirte desde el gimnasio hasta el rancho y de vuelta a casa.",
            "category": "Termos",
            "image": "/src/catalogo/Termos/TERMO GALÓN.png"
          },
          {
            "id": 17,
            "title": "Termo Galón",
            "price": 0,
            "description":
              "Casi 24 horas de agua para seguirte desde el gimnasio hasta el rancho y de vuelta a casa.",
            "category": "Termos",
            "image": "/src/catalogo/Termos/TERMO GALÓN.png"
          }
        ];

      localStorage.setItem("datos", JSON.stringify(productos));
      



  
    }
  });