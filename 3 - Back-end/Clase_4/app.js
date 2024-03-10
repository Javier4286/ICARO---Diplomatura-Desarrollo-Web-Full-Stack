const express = require("express");
const app = express();
const PORT = 3000;

const { productos } = require("./db");

app.set("view engine", "ejs");

app.get("/producto/:id", (req, res) => {
  const { id } = req.params;
  const productoFiltrado = productos.find((prod) => prod.id == id);
  console.log(productoFiltrado);
  res.render("producto", { productoFiltrado });
});

// Clase_4 15/06/2023
//Middlewares para leer datos en formato json y body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Defino las rutas:
app.use("/usuarios", require("./routes/usuarioRoutes"));

app.listen(PORT, () => {
  console.log(`Funcionando en: http://localhost:3000 port:${PORT}`);
});
