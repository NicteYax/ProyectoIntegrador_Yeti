USE yetipersonalizadomx;

INSERT INTO categorias (nombre)
VALUES ('Termos'), ('Hieleras'), ('Loncheras'), ('Tazones'), ('Accesorios');

ALTER TABLE productos MODIFY COLUMN descripcion VARCHAR(500);

INSERT INTO productos (nombre, descripcion, precio, idcategoria)
VALUES 
	('Apilable 26 oz', 'Una taza grande para grandes tragos: perfecta para tés, agua fría o batidos XL. Cabe en la mayoría de los portavasos.', 1300, 1),
    ('Hotshot 12 oz', 'Nuestra botella clásica combinada con la tapa 360º HotShot™️, es a prueba de fugas. Lleva tu café mientras viajas. Cabe en la mayoría de los portavasos.', 1250, 1),
    ('Lowball 10 oz', 'Vaso pequeño, apilable, clásico y versátil para tu cóctel en el campamento.', 1030, 1),
    ('Mug 10 oz', 'Taza apilable para almacenamiento. Es compacta y aislada, ideal para bebidas calientes.', 1100, 1),
    ('Mug 14 oz', 'Una taza versátil que es lo suficientemente grande como para servir como tazón de campamento.', 1220, 1),
    ('Mug 24 oz', 'Una taza para beer gardens, cervezas en casa y bebidas abundantes.', 1350, 1),
    ('Pint 16 oz', 'Un vaso de fiesta reutilizable, diseñado para cocteles, cervezas o smoothies. Cabe en la mayoría de los portavasos.', 1200, 1),
    ('Portalata 12 oz', 'Mantén las cervezas y los refrescos fríos en los días más calurosos. Cabe en la mayoría de los portavasos.', 1060, 1),
    ('Portalata Slim 12 oz', 'Los Hard seltzers se mantienen fríos en la playa o en el barco. Cabe en la mayoría de los portavasos.', 1070, 1),
    ('Portalata Tall 16 oz', 'Las cervezas artesanales se mantienen frías hasta el último sorbo en cervecerías, playas y carnes asadas en el patio trasero. Cabe en la mayoría de los portavasos.', 1170, 1),
    ('Termo 18 oz', 'Hidratación en mano para caminatas matutinas, paseos en kayak y viajes diarios. Cabe en la mayoría de los portavasos.', 1300, 1),
    ('Termo 26 oz', 'Una botella a prueba de fugas que se adapta a la cantidad justa de hidratación, con una tapa para beber fácilmente.', 1490, 1),
    ('Termo 36 oz', 'La botella aislada más grande, te ayuda a mantenerte hidratado en tu día libre.', 1790, 1),
    ('Termo 46 oz', 'Una botella de gran tamaño diseñada para seguirte hasta el fin del mundo y mantenerte hidratado en el camino.',1950, 1),
    ('Termo 64 oz', 'Una botella más grande para los días en el rancho o en el bote.', 2600, 1),
    ('Termo Galón', 'Casi 24 horas de agua para seguirte desde el gimnasio hasta el rancho y de vuelta a casa.', 3990, 1);
    
INSERT INTO productos (nombre, descripcion, precio, idcategoria)
VALUES 
	('Lonchera de bolsa Daytrip Rosa', 'Tamaño para comida personal, construido para situaciones duraderas. Para 6 latas (solo)',2600, 3),
    ('Lonchera de bolsa Daytrip Azul', 'Tamaño para comida personal, construido para situaciones duraderas. Para 6 latas (solo)',2600, 3),
    ('Lonchera cuadrada Naranja', 'Protege y mantén el almuerzo seco bajo la lluvia o en un kayak.', 2600 , 3),
    ('Lonchera cuadrada Azul', 'Protege y mantén el almuerzo seco bajo la lluvia o en un kayak.', 2600 , 3);
    
INSERT INTO productos (nombre, descripcion, precio, idcategoria)
VALUES 
	 ('Hielera Hopper flipp 8', 'Un refrigerador personal para viajes en solitario y caminatas. Ponlo sobre tu hombro y sal.', 2600 , 2),
     ('Hielera Hopper flipp 12', 'Perfecto para empacar el almuerzo y algunas bebidas para ti y un amigo para un gran día.', 2600 , 2),
     ('Hielera Hopper flipp 18', 'Lleve un día de almuerzo y un paquete de seis o más para usted y su tripulación.', 2600 , 2),
     ('Hielera Hopper M 20', 'Se sujeta cómodamente como una mochila para mantenerte móvil, mientras que una tira de imanes ultra fuertes mantiene el frío bloqueado.', 2600 , 2),
     ('Hielera Hopper M 30', 'Más fácil que nunca el cargar y descargar comida y bebida para las excursiones de fin de semana.', 2600 , 2),
     ('Hielera Roadie 24', 'Lo suficientemente alto como para enfriar la mayoría de las botellas de vino.', 2600 , 2),
     ('Hielera Roadie 48', 'Lo suficientemente fácil para caminatas largas, lo suficientemente alto para vino frío, lo suficientemente grande para un portón trasero durante todo el día.', 2600 , 2),
     ('Hielera Roadie 60', 'Un refrigerador enorme construido para transportar fácilmente el vino, la sandía y el juego salvaje.', 2600 , 2),
     ('Hielera Tundra 35', 'Tiene suficiente para un pequeño equipo durante el día.', 2600 , 2),
     ('Hielera Tundra 45', 'Un tamaño sólido para todo uso. Tiene provisiones de campamento durante la noche para cuatro personas o bebidas para un día en el agua.', 2600 , 2),
     ('Hielera Tundra 65', 'Mantiene un fin de semana de campamento para cuatro personas.', 2600 , 2),
     ('Hielera Tundra 75', 'Tiene suficiente para largas excursiones de caza y grandes barbacoas en el patio trasero.', 2600 , 2),
     ('Hielera Tundra Haul', 'Transporta fácilmente los productos a los picnics familiares y a ese lugar perfecto para hacer cola.', 2600 , 2);

INSERT INTO productos (nombre, descripcion, precio, idcategoria)
VALUES ('Go box 30', 'Contiene todo lo que necesitas para que nada te detenga.', 2600, 2 );

INSERT INTO productos (nombre, descripcion, precio, idcategoria)
VALUES 
	('Tazón para mascota Boomer 4', 'Mantiene a los más pequeños alimentados e hidratados.', 800, 4 ),
    ('Tazón para mascota Boomer 8', 'Extra fuerte y resistente a las abolladuras.', 1000, 4 );
    
INSERT INTO productos (nombre, descripcion, precio, idcategoria)
VALUES 
	('Tapa para termo Yonder', 'Bloquee el líquido con confianza a prueba de fugas. Esta tapa se ajusta a su Yonder.', 260, 5 ),
    ('Tapa para Hotshot', 'A prueba de fugas, aislado y de tamaño perfecto para una preparación caliente.', 260, 5 ),
    ('Tapa Magslider para Rambler Chico', 'El imán extraíble ayuda a sellar su bebida para mantener a raya las salpicaduras.', 200, 5 ),
    ('Tapa Magslider para Rambler Mediano', 'El imán extraíble ayuda a sellar su bebida para mantener a raya las salpicaduras.', 200, 5 ),
    ('Tapa Magslider para Rambler Grande', 'El imán extraíble ayuda a sellar su bebida para mantener a raya las salpicaduras.', 200, 5 ),
    ('Tapa Magslider para Rambler Magdock', '"Acceda a su botella Rambler sobre la marcha sin perder la tapa. Esta tapa cabe en todas las botellas de agua Rambler.', 260, 5 ),
    ('Tapa Magslider para Rambler Chug', 'Sacia inmediatamente tu sed a través de la buena tecnología de chugging pasada de moda. Esta tapa cabe en todas las botellas de agua Rambler.', 260, 5 ),
    ('Magsliders neutros', 'Separe su Rambler aparte en un paquete de vasos.', 180, 5 ),
    ('Magsliders colores', 'Separe su Rambler aparte en un paquete de vasos.', 180, 5 ),
    ('Magsliders tonos fríos', 'Separe su Rambler aparte en un paquete de vasos.', 180, 5 ),
    ('Magsliders tonos fríos', 'Separe su Rambler aparte en un paquete de vasos.', 180, 5);
    
ALTER TABLE usuarios MODIFY COLUMN phone VARCHAR(10);
    
INSERT INTO usuarios (nombre, phone, mail, `password`)
VALUES 
	('Ana Gabriela', '3333801838', 'anarizollacaa2@gmail.com', 'AnaGaby.1'),
    ('Ana Paula', '3345937151', 'ap.batiz@gmail.com', 'AnaPau.2'),
    ('Carlos', '3313003350', 'carlosicg07@gmail.com', 'Carlos.3'),
    ('Dora', '3327977825', 'doraluz.gzatarain@gmail.com', 'DoraLuz.4'),
    ('Gabriela', '3314522124', 'gabriela.torres.044@gmail.com', 'Gabriela.5'),
    ('Jonatan', '3317034178', 'jonatan.alpirez@gmail.com', 'Jonatan.6'),
    ('Leslie', '3333777068', 'leslie.garciardgz@gmail.com', 'Leslie.7'),
    ('Karime', '3320708308', 'kaledon95@gmail.com', 'Karime.8'),
    ('Nicté', '3310736244', 'nicte.ycc@gmail.com', 'NicteY.9');
    























    
