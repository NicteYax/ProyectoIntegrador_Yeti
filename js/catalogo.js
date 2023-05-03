window.addEventListener("load", function (event) {
      
    if (localStorage.getItem("datos") != null) {
      producto = JSON.parse(localStorage.getItem("datos"));
    }
    else {

      let productos = [
        {
          "id": 1,
          "title": "Apilable 26 oz",
          "price": 1300,
          "description":"Una taza grande para grandes tragos: perfecta para tés, agua fría o batidos XL. Cabe en la mayoría de los portavasos.",
          "category": "Termos",
          "image": "/src/catalogo/Termos/APILABLE26oz.png"
        },
        {
            "id": 2,
            "title": "Hotshot 12 oz",
            "price": 1250,
            "description":
              "Nuestra botella clásica combinada con la tapa 360º HotShot™, es a prueba de fugas. Lleva tu café mientras viajas. Cabe en la mayoría de los portavasos.",
            "category": "Termos",
            "image": "/src/catalogo/Termos/HOTSHOT 12oz.png"
          },
          {
            "id": 3,
            "title": "Lowball 10 oz",
            "price": 1030,
            "description":
              "Vaso pequeño, apilable, clásico y versátil para tu cóctel en el campamento.",
            "category": "Termos",
            "image": "/src/catalogo/Termos/LOWBALL.png"
          },
          {
            "id": 4,
            "title": "Mug 10 oz",
            "price": 1100,
            "description":
              "Taza apilable para almacenamiento. Es compacta y aislada, ideal para bebidas calientes.",
            "category": "Termos",
            "image": "/src/catalogo/Termos/MUG 10oz.png"
          },
          {
            "id": 5,
            "title": "Mug 14 oz",
            "price": 1220,
            "description":
              "Una taza versátil que es lo suficientemente grande como para servir como tazón de campamento.",
            "category": "Termos",
            "image": "/src/catalogo/Termos/MUG 14oz.png"
          },
          {
            "id": 6,
            "title": "Mug 24 oz",
            "price": 1350,
            "description":
              "Una taza para beer gardens, cervezas en casa y bebidas abundantes.",
            "category": "Termos",
            "image": "/src/catalogo/Termos/MUG 24oz.png"
          },
          {
            "id": 7,
            "title": "Pint 16 oz",
            "price": 1200,
            "description":
              "Un vaso de fiesta reutilizable, diseñado para cocteles, cervezas o smoothies. Cabe en la mayoría de los portavasos.",
            "category": "Termos",
            "image": "/src/catalogo/Termos/PINT 16oz.png"
          },
          {
            "id": 8,
            "title": "Portalata 12 oz",
            "price": 1060,
            "description":
              "Mantén las cervezas y los refrescos fríos en los días más calurosos. Cabe en la mayoría de los portavasos.",
            "category": "Termos",
            "image": "/src/catalogo/Termos/PORTALATA.png"
          },
          {
            "id": 9,
            "title": "Portalata Slim 12 oz",
            "price": 1070,
            "description":
              "Los Hard seltzers se mantienen fríos en la playa o en el barco. Cabe en la mayoría de los portavasos.",
            "category": "Termos",
            "image": "/src/catalogo/Termos/SLIM.png"
          },
          {
            "id": 10,
            "title": "Portalata Tall 16 oz",
            "price": 1170,
            "description":
              "Las cervezas artesanales se mantienen frías hasta el último sorbo en cervecerías, playas y carnes asadas en el patio trasero. Cabe en la mayoría de los portavasos.",
            "category": "Termos",
            "image": "/src/catalogo/Termos/TALL.png"
          },
          {
            "id": 11,
            "title": "Termo 18 oz",
            "price": 1300,
            "description":
              "Hidratación en mano para caminatas matutinas, paseos en kayak y viajes diarios. Cabe en la mayoría de los portavasos.",
            "category": "Termos",
            "image": "/src/catalogo/Termos/TERMO 18oz.png"
          },
          {
            "id": 12,
            "title": "Termo 26 oz",
            "price": 1490,
            "description":
              "Una botella a prueba de fugas que se adapta a la cantidad justa de hidratación, con una tapa para beber fácilmente.",
            "category": "Termos",
            "image": "/src/catalogo/Termos/TERMO 26oz.png"
          },
          {
            "id": 13,
            "title": "Termo 36 oz",
            "price": 1790,
            "description":
              "La botella aislada más grande, te ayuda a mantenerte hidratado en tu día libre.",
            "category": "Termos",
            "image": "/src/catalogo/Termos/TERMO 36oz.png"
          },
          {
            "id": 14,
            "title": "Termo 46 oz",
            "price": 1950,
            "description":
              "Una botella de gran tamaño diseñada para seguirte hasta el fin del mundo y mantenerte hidratado en el camino.",
            "category": "Termos",
            "image": "/src/catalogo/Termos/TERMO 46oz.png"
          },
          {
            "id": 15,
            "title": "Termo 64 oz",
            "price": 2600,
            "description":
              "Una botella más grande para los días en el rancho o en el bote.",
            "category": "Termos",
            "image": "/src/catalogo/Termos/TERMO 64oz.png"
          },
          {
            "id": 16,
            "title": "Termo Galón",
            "price": 3990,
            "description":
              "Casi 24 horas de agua para seguirte desde el gimnasio hasta el rancho y de vuelta a casa.",
            "category": "Termos",
            "image": "/src/catalogo/Termos/TERMO GALÓN.png"
          },
          {
            "id": 17,
            "title": "Lonchera de bolsa Daytrip Rosa",
            "price": 2600,
            "description":
              "Tamaño para comida personal, construido para situaciones duraderas. Para 6 latas (solo)",
            "category": "Loncheras",
            "image": "/src/catalogo/Loncheras/Daytrip lunchbag pink.png"
          },
          {
            "id": 18,
            "title": "Lonchera de bolsa Daytrip Azul",
            "price": 2600,
            "description":
              "Tamaño para comida personal, construido para situaciones duraderas. Para 6 latas (solo).",
            "category": "Loncheras",
            "image": "/src/catalogo/Loncheras/Daytrip lunchbag navy.png"
          },
          {
            "id": 19,
            "title": "Lonchera cuadrada naranja",
            "price": 2600,
            "description":
              "Protege y mantén el almuerzo seco bajo la lluvia o en un kayak.",
            "category": "Loncheras",
            "image": "/src/catalogo/Loncheras/Daytrip lunchbox high desert clay.png"
          },
          {
            "id": 20,
            "title": "Lonchera cuadrada azul",
            "price": 2600,
            "description":
              "Protege y mantén el almuerzo seco bajo la lluvia o en un kayak.",
            "category": "Loncheras",
            "image": "/src/catalogo/Loncheras/Daytrip lunchbox navy.png"
          },
          {
            "id": 21,
            "title": "Hielera Hopper flipp 8",
            "price": 2600,
            "description":
              "Un refrigerador personal para viajes en solitario y caminatas. Ponlo sobre tu hombro y sal.",
            "category": "Hieleras",
            "image": "/src/catalogo/Hieleras/HopperFlip 8 navy.png"
          },
          {
            "id": 22,
            "title": "Hielera Hopper flip 12",
            "price": 2600,
            "description":
              "Perfecto para empacar el almuerzo y algunas bebidas para ti y un amigo para un gran día.",
            "category": "Hieleras",
            "image": "/src/catalogo/Hieleras/HopperFlip 12 charcoal.png"
          },
          {
            "id": 23,
            "title": "Hielera Hopper flip 18",
            "price": 2600,
            "description":
              "Lleve un día de almuerzo y un paquete de seis o más para usted y su tripulación.",
            "category": "Hieleras",
            "image": "/src/catalogo/Hieleras/HopperFlip 18 high desert clay.png"
          },
          {
            "id": 24,
            "title": "Hielera Hopper M 20",
            "price": 2600,
            "description":
              "Se sujeta cómodamente como una mochila para mantenerte móvil, mientras que una tira de imanes ultra fuertes mantiene el frío bloqueado.",
            "category": "Hieleras",
            "image": "/src/catalogo/Hieleras/Hopper M20 charcoal.png"
          },
          {
            "id": 25,
            "title": "Hielera Hopper M 30",
            "price": 2600,
            "description":
              "Más  fácil que nunca el cargar y descargar comida y bebida para las excursiones de fin de semana.",
            "category": "Hieleras",
            "image": "/src/catalogo/Hieleras/Hopper M30 navy.png"
          },
          {
            "id": 26,
            "title": "Hielera Roadie 24",
            "price": 2600,
            "description":
              "Lo suficientemente alto como para enfriar la mayoría de las botellas de vino.",
            "category": "Hieleras",
            "image": "/src/catalogo/Hieleras/Roadie 24 tan.png"
          },
          {
            "id": 27,
            "title": "Hielera Roadie 48",
            "price": 2600,
            "description":
              "Lo suficientemente fácil para caminatas largas, lo suficientemente alto para vino frío, lo suficientemente grande para un portón trasero durante todo el día.",
            "category": "Hieleras",
            "image": "/src/catalogo/Hieleras/Roadie 48 navy.png"
          },
          {
            "id": 28,
            "title": "Hielera Roadie 60",
            "price": 2600,
            "description":
              "Un refrigerador enorme construido para transportar fácilmente el vino, la sandía y el juego salvaje.",
            "category": "Hieleras",
            "image": "/src/catalogo/Hieleras/Roadie 60 charcoal.png"
          },
          {
            "id": 29,
            "title": "Hielera Tundra 35",
            "price": 2600,
            "description":
              "Tiene suficiente para un pequeño equipo durante el día.",
            "category": "Hieleras",
            "image": "/src/catalogo/Hieleras/Tundra 35 navy.png"
          },
          {
            "id": 30,
            "title": "Hielera Tundra 45",
            "price": 2600,
            "description":
              "Un tamaño sólido para todo uso. Tiene provisiones de campamento durante la noche para cuatro personas o bebidas para un día en el agua.",
            "category": "Hieleras",
            "image": "/src/catalogo/Hieleras/Tundra 45 charcoal.png"
          },
          {
            "id": 31,
            "title": "Hielera Tundra 65",
            "price": 2600,
            "description":
              "Mantiene un fin de semana de campamento para cuatro personas.",
            "category": "Hieleras",
            "image": "/src/catalogo/Hieleras/Tundra 65 tan.png"
          },
          {
            "id": 32,
            "title": "Hielera Tundra 75",
            "price": 2600,
            "description":
              "Tiene suficiente para largas excursiones de caza y grandes barbacoas en el patio trasero.",
            "category": "Pendiente",
            "image": "/src/catalogo/Hieleras/Tundra 75 tan.png"
          },
          {
            "id": 33,
            "title": "Hielera Tundra Haul",
            "price": 2600,
            "description":
              "Transporta fácilmente los productos a los picnics familiares y a ese lugar perfecto para hacer cola.",
            "category": "Hieleras",
            "image": "/src/catalogo/Hieleras/Tundra haul charcoal.png"
          },
          {
            "id": 34,
            "title": "Tazón para mascota Boomer 4",
            "price": 800,
            "description":
              "Mantiene a los más pequeños alimentados e hidratados.",
            "category": "Tazones",
            "image": "/src/catalogo/Tazones/Boomer 4 dog bowl.png"
          },
          {
            "id": 35,
            "title": "Tazón para mascota Boomer 8",
            "price": 1000,
            "description":
              "Extra fuerte y resistente a las abolladuras.",
            "category": "Tazones",
            "image": "/src/catalogo/Tazones/Boomer 8 dog bowl.png"
          },
          {
            "id": 36,
            "title": "Tapa para termo Yonder",
            "price": 260,
            "description":
              "Bloquee el líquido con confianza a prueba de fugas. Esta tapa se ajusta a su Yonder.",
            "category": "Accesorios",
            "image": "/src/catalogo/Accesorios/yonder chug cap.png"
          },
          {
            "id": 37,
            "title": "Tapa para Hotshot",
            "price": 260,
            "description":
              "A prueba de fugas, aislado y de tamaño perfecto para una preparación caliente.",
            "category": "Accesorios",
            "image": "/src/catalogo/Accesorios/rambler bottle hotshot cap.png"
          },
          {
            "id": 38,
            "title": "Tapa Magslider para Rambler Chico",
            "price": 200,
            "description":
              "El imán extraíble ayuda a sellar su bebida para mantener a raya las salpicaduras.",
            "category": "Accesorios",
            "image": "/src/catalogo/Accesorios/Magslides ch.png"
          },
          {
            "id": 39,
            "title": "Tapa Magslider para Rambler Mediano",
            "price": 200,
            "description":
              "El imán extraíble ayuda a sellar su bebida para mantener a raya las salpicaduras.",
            "category": "Accesorios",
            "image": "/src/catalogo/Accesorios/Magslides md.png"
          },
          {
            "id": 40,
            "title": "Tapa Magslider para Rambler Grande",
            "price": 200,
            "description":
              "El imán extraíble ayuda a sellar su bebida para mantener a raya las salpicaduras.",
            "category": "Accesorios",
            "image": "/src/catalogo/Accesorios/Magslides gd.png"
          },
          {
            "id": 41,
            "title": "Tapa Magslider para Rambler Magdock",
            "price": 260,
            "description":
              "Acceda a su botella Rambler sobre la marcha sin perder la tapa. Esta tapa cabe en todas las botellas de agua Rambler.",
            "category": "Accesorios",
            "image": "/src/catalogo/Accesorios/rambler bottle magdock cap.png"
          },
          {
            "id": 42,
            "title": "Tapa Magslider para Rambler Chug",
            "price": 260,
            "description":
              "Sacia inmediatamente tu sed a través de la buena tecnología de chugging pasada de moda. Esta tapa cabe en todas las botellas de agua Rambler.",
            "category": "Accesorios",
            "image": "/src/catalogo/Accesorios/rammbler bottle chug cap.png"
          },
          {
            "id": 43,
            "title": "Magsliders neutros",
            "price": 180,
            "description":
              "Separe su Rambler aparte en un paquete de vasos.",
            "category": "Pendiente",
            "image": "/src/catalogo/Accesorios/magslieder1.png"
          },
          {
            "id": 44,
            "title": "Magsliders colores",
            "price": 180,
            "description":
              "Separe su Rambler aparte en un paquete de vasos.",
            "category": "Pendiente",
            "image": "/src/catalogo/Accesorios/magslider3.png"
          },
          {
            "id": 45,
            "title": "Magsliders tonos fríos",
            "price": 180,
            "description":
              "Separe su Rambler aparte en un paquete de vasos.",
            "category": "Pendiente",
            "image": "/src/catalogo/Accesorios/magslider2.png"
          },
          {
            "id": 46,
            "title": "Cubeta Galón",
            "price": 2600,
            "description":
              "El cubo que no sabías que necesitabas. Construido para cargar, cargar y hacer el trabajo.",
            "category": "Accesorios",
            "image": "/src/catalogo/Accesorios/5 gallon bucket nordic blue.png"
          },
          {
            "id": 47,
            "title": "Go box 30",
            "price": 2600,
            "description":
              "Contiene todo lo que necesitas para que nada te detenga.",
            "category": "Accesorios",
            "image": "/src/catalogo/Accesorios/gobox 30 charcoal.png"
          }];

      localStorage.setItem("datos", JSON.stringify(productos));
      



  
    }
  });