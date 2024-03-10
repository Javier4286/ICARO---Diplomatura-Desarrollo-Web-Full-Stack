CREATE DATABASE biblioteca;
USE biblioteca;
CREATE TABLE libros (
    idlibros INT PRIMARY KEY,
    titulo VARCHAR(255),
    autor VARCHAR(255),
    anio_publicacion INT,
    precio DECIMAL(5,2 )
);
INSERT INTO libros (
idlibros, titulo, autor, anio_publicacion, precio) VALUES
(1, "Harry Potter", "JK Rowling", 1990,500.50);