CREATE DATABASE yetipersonalizadomx;
USE yetipersonalizadomx;

CREATE TABLE productos(
	idproductos INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    descripcion VARCHAR(150) NOT NULL,
    precio INT NOT NULl,
    idcategoria INT NOT NULL,
    PRIMARY KEY (idproductos)
);

CREATE TABLE categorias(
	idcategoria INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(45) NOT NULL,
    PRIMARY KEY (idcategoria)
);

CREATE TABLE usuarios(
	idusuario INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    phone INT NOT NULL,
    mail VARCHAR(70) NOT NULL,
    `password` VARCHAR (100) NOT NULL,
    PRIMARY KEY (idusuario)
    );
    