create database Commerce;
use Commerce;

CREATE TABLE Products (
    id INT AUTO_INCREMENT NOT NULL,
    Artist VARCHAR(30),
    Album VARCHAR(50),
    Year DECIMAL(4),
    Price DECIMAL(10 , 2 ),
    Categorie_id INT,
    PRIMARY KEY (id)
);
CREATE TABLE Users (
    id INT AUTO_INCREMENT NOT NULL,
    Name VARCHAR(30),
    Surname VARCHAR(30),
    Email VARCHAR(30),
    PRIMARY KEY (id)
);
CREATE TABLE Categories (
    id INT AUTO_INCREMENT NOT NULL,
    Genre VARCHAR(30),
    PRIMARY KEY (id)
);

alter table Products add foreign key (Categorie_id) references Categories(id);

insert into Users (Name, Surname, Email) values ("Javier", "Gonzalez", "710.jag@gmail.com");

insert into Categories (Genre) values ("Rock"), ("Rock Nacional"), ("Metal"), ("Punk");

insert into Products ( Artist, Album, Year, Price, Categorie_id) values 
("Kiss", "Alive!", 1975, 40000, 1), ("Los Fabulosos Cadillacs", "Fabulosos Calavera", 1997, 4183, 2), ("Charly Garcia", "Demasiado Ego", 1999, 4641, 2), 
("Slayer", "Decade Of Aggression Live", 1991, 39299, 3), ("Ramones", "Loco Live", 1991, 4062, 4), ("Sui Generis", "Adios a Sui Generis", 1975, 16482, 2), ("Jimmy Page & The Black Crowes
", "Live At The Greek", 2000, 13294, 1), ("Megadeth", "That One Night: Live in Buenos Aires", 1995, 5000, 3);

SELECT 
    Products.Artist,
    Products.Album,
    Products.Year,
    Products.Price,
    Categories.Genre
FROM
    Products
        JOIN
    Categories ON Products.Categorie_id = Categories.id;