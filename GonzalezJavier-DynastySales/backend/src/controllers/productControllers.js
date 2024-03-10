const Product = require("../../models/index").Products;

const addProducts = async (req, res) => {
  try {
    const { Artist, Album, Year, Price, Categorie, Url } = req.body;

    if (!Artist || !Album || !Year || !Price || !Categorie || !Url) {
      return res.status(400).json({
        error: "Please provide Artist, Album, Year, Price, Category, and URL",
      });
    }

    const product = await Product.create(req.body);

    res.status(201).json({ message: "Successfully added", data: product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error adding the product" });
  }
};

const readProducts = async (req, res) => {
  const products = await Product.findAll();
  res.status(200).json({ data: products });
};

const readProduct = async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  res.status(200).json({ data: product });
};

const deleteProduct = async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (!product) {
    return res.status(404).json({ message: "Producto no encontrado" });
  }
  await product.destroy();
  return res
    .status(200)
    .json({ message: "Producto eliminado con éxito", data: product });
};

const updateProduct = async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  const { ...newProduct } = req.body;
  if (!product) {
    return res.status(404).json({ message: "Producto no encontrado" });
  }
  await product.update(newProduct);
  return res
    .status(200)
    .json({ message: "Producto actualizado con éxito", data: product });
};

module.exports = {
  addProducts,
  readProducts,
  readProduct,
  deleteProduct,
  updateProduct,
};
