const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

const productos = [
  {
    nombre: "Disco Duro",
    precio: 1000,
    descripcion: "Disco duro de 1TB",
  },
  {
    nombre: "Memoria RAM",
    precio: 500,
    descripcion: "Memoria RAM de 16GB",
  },
  {
    nombre: "Monitor",
    precio: 3000,
    descripcion: "Monitor de 24 pulgadas",
  },
];

// Ejercicio 1
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/usuario/:id", (req, res) => {
  const { id } = req.params;
  res.render("usuario", { id });
});

// Ejercicio 2 08/06/2023
app.get("/lista", (req, res) => {
  const elementos = ["Elemento 1", "Elemento 2", "Elemento 3"];
  res.render("lista", { elementos });
});

// Ejercicio 3
app.get("/productos", (req, res) => {
  res.render("productos", { productos });
});

app.listen(PORT, () => {
  console.log(`Server running on url http://localhost:${PORT}`);
});
