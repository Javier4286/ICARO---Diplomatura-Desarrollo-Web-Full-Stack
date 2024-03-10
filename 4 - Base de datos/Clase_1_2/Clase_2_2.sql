USE biblioteca;
CREATE TABLE editorial(
id_editorial INT PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(100),
cantidad_libros INT(3),
direccion VARCHAR(100)
);

INSERT INTO editorial
(nombre, cantidad_libros, direccion) VALUES
("Ejemplo1", 5, "Ejemplo1"),
("Ejemplo2", 15, "Ejemplo2"),
("Ejemplo3", 505, "Ejemplo3");

SELECT * FROM editorial;
