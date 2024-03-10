const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("pages/home");
});

// app.get("/", (req, res) => {
//   res.send("hola");
// });

// app.get("/productos", (req, res) => {
//   res.send("hola1");
// });

// app.get("/productos/1", (req, res) => {
//   res.send("hola2");
// });

app.get("/:nombre/:edad", (req, res) => {
  const nombre = req.params.nombre;
  const edad = req.params.edad;
  const usuario = { nombre, edad };
  res.render("pages/saludo", { usuario });
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
