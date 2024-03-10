const { json } = require("body-parser");
const fs = require("fs");

const renderProductos = (req, res) => {
  const productos = JSON.parse(fs.readFileSync("./productos.json", "utf-8"));
  res.render("productos", { productos });
};

const renderForm = (req, res) => {
  res.render("form");
};

const renderUnProducto = () => {};

const agregarProducto = (req, res) => {
  console.log(req.body);
  // logica para agregar un producto con fs
  res.send("producto agregado");
};

const modificarProducto = () => {};

module.exports = {
  renderProductos,
  renderForm,
  renderUnProducto,
  agregarProducto,
  modificarProducto,
};
