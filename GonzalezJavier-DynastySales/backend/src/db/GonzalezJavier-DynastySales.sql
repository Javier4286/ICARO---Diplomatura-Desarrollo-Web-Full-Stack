create database Commerce;

use Commerce;

CREATE TABLE Products (
    id INT AUTO_INCREMENT NOT NULL,
    Artist VARCHAR(30),
    Album VARCHAR(50),
    Year DECIMAL(4),
    Price DECIMAL(10, 2),
    Categorie VARCHAR(50),
    Url VARCHAR(100),
    PRIMARY KEY (id)
);

CREATE TABLE Users (
    id INT AUTO_INCREMENT NOT NULL,
    isAdmin BOOLEAN,
    Name VARCHAR(30),
    Surname VARCHAR(30),
    Email VARCHAR(30),
    Address VARCHAR(30),
    Password VARCHAR(70),
    -- isAdmin Password 'AEIOU12345'
    Telephone VARCHAR(15),
    PRIMARY KEY (id)
);

CREATE TABLE Orders (
    id INT AUTO_INCREMENT NOT NULL,
    user_id INT,
    total_price DECIMAL(10, 2),
    shipping_type ENUM('retiro por el local', 'envío a domicilio'),
    shipping_address VARCHAR(255),
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES Users (id)
);

CREATE TABLE OrderDetails (
    id INT AUTO_INCREMENT NOT NULL,
    order_id INT,
    product_id INT,
    quantity INT,
    price DECIMAL(10, 2),
    PRIMARY KEY (id),
    FOREIGN KEY (order_id) REFERENCES Orders (id),
    FOREIGN KEY (product_id) REFERENCES Products (id)
);

INSERT INTO
    Users (
        isAdmin,
        Name,
        Surname,
        Email,
        Address,
        Password,
        Telephone
    )
VALUES
    (
        1,
        'Javier',
        'Gonzalez',
        'ventas@dynasty-sales.com',
        'Octaviano Navarro 4286',
        '$2b$12$LkITKMogMP8HvrkdnGxuw.LqGorFhVjVDOXImYBep7qD0ZouyUhNK',
        '+5493513414965'
    );

insert into
    Products (Artist, Album, Year, Price, Categorie, Url)
values
    (
        'Kiss',
        'Alive!',
        1975,
        3972.43,
        'Rock',
        'https://upload.wikimedia.org/wikipedia/en/4/48/Kiss_alive_album_cover.jpg'
    ),
    (
        'Slayer',
        'Reign In Blood',
        1986,
        8568.00,
        'Metal',
        'https://http2.mlstatic.com/D_NQ_NP_2X_878086-MLU70918769577_082023-F.webp'
    ),
    (
        'Ramones',
        'Loco Live',
        1991,
        6058.35,
        'Punk',
        'https://http2.mlstatic.com/D_NQ_NP_2X_722119-MLU54961684838_042023-F.webp'
    ),
    (
        'Pantera',
        'Vulgar Display Of Power',
        1992,
        4817.65,
        'Metal',
        'https://http2.mlstatic.com/D_NQ_NP_2X_12298-MLA20056444792_032014-F.webp'
    ),
    (
        'Charly Garcia',
        'Demasiado Ego',
        1999,
        4641.75,
        'Metal',
        'https://http2.mlstatic.com/D_NQ_NP_2X_789634-MLU54965122125_042023-F.webp'
    ),
    (
        'Los Fabulosos Cadillacs',
        'Fabulosos Calavera',
        1997,
        4183.35,
        'Rock',
        'https://http2.mlstatic.com/D_NQ_NP_2X_960741-MLU69175886099_052023-F.webp'
    );