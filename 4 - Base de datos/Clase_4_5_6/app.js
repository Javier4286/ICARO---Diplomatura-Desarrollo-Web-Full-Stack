const express = require("express");
const app = express();
const Product = require("./models/index").productos;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/", async (req, res) => {
  // await Product.sync({ force: true });
  const { ...newProduct } = req.body;
  const { artist, price, album } = newProduct;
  console.log(newProduct);
  if (!artist || !price || !album) {
    return res
      .status(500)
      .json({ message: "Debes ingresar artista, precio y album" });
  }
  const product = await Product.create(newProduct);
  res.json({ message: "Agregado con exito", data: product });
});

app.get("/", async (req, res) => {
  const products = await Product.findAll();
  res.status(200).json({ data: products });
});

app.get("/:id", async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  res.status(200).json({ data: product });
});

app.delete("/:id", async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (!product) {
    return res.status(404).json({ message: "producto no encontrado" });
  }
  await product.destroy();
  return res
    .status(200)
    .json({ message: "Producto eliminado con exito", data: product });
});

app.put("/:id", async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  const { ...newProduct } = req.body;
  if (!product) {
    return res.status(404).json({ message: "producto no encontrado" });
  }
  await product.update(newProduct);
  return res
    .status(200)
    .json({ message: "Producto actualizado con exito", data: product });
});

app.listen(3000, () => {
  console.log("Working at http://localhost:3000");
});

// ("models"/"productos.js")
// ("use strict");
// const { Model } = require("sequelize");
// module.exports = (sequelize, DataTypes) => {
//   class productos extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   productos.init(
//     {
//       artist: DataTypes.STRING,
//       album: DataTypes.STRING,
//       price: DataTypes.DECIMAL,
//     },
//     {
//       sequelize,
//       modelName: "productos",
//       timestamps: false, // <=== Ésto, se debe agregar en "models"/"productos"(en este caso), para no agregar manualmente los atributos "createdAT DATE" y "updatedAT DATE" en "MYSQL Workbench 8.0 CE".
//     }
//   );
//   return productos;
// };

// GonzalezJavier-DynastySales: Crear los productos despues de asignarles la clave foranea a la categoria, y crearlos con una categoria.
