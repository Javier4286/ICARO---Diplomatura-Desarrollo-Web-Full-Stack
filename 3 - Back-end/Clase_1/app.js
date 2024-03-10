const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hola Mundo!");
});
// Ejercicio 1
app.get("/saludo", (req, res) => {
  res.send("¡Hola! ¿Como estás?");
});

// Ejercicio 2
app.get("/usuario/:nombre", (req, res) => {
  console.log(req.params);
  res.send("Hola " + req.params.nombre);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
