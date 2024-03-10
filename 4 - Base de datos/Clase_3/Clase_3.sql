CREATE database productos;
use productos;
CREATE TABLE Productos (
    id INT AUTO_INCREMENT,
    nombre VARCHAR(250),
    precio DECIMAL(10 , 2 ),
    PRIMARY KEY (id)
);
CREATE TABLE Stock (
    id INT AUTO_INCREMENT,
    nombre_deposito VARCHAR(250),
    cantidad INT,
    PRIMARY KEY (id)
);
CREATE TABLE Categorias (
    id INT AUTO_INCREMENT,
    nombre VARCHAR(250),
    PRIMARY KEY (id)
);
insert into Productos (id, nombre, precio) values (1, "agua", 500), (2, "soda", 350);
insert into Stock (id, nombre_deposito, cantidad) values (1, "Barrio San Vicente", 75), (2, "Barrio Pueyrredon", 150);
insert into Categorias (id, nombre) values (1, "Bidones"), (2, "Sifones");

alter table Productos
add column categoria_id int,
add foreign key (categoria_id) references categorias(id);

update Productos set categoria_id = 1 where id in (1);

SELECT 
    *
FROM
    Productos
        INNER JOIN
    Categorias ON productos.categoria_id = categorias.id;