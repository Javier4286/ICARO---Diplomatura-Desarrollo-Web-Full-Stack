const express = require("express");
const {
  renderProductos,
  renderForm,
  renderUnProducto,
  agregarProducto,
  modificarProducto,
} = require("../controllers/productsControllers");
const validateProduct = require("../validators/productValidator");
const router = express.Router();

router.get("/form", renderForm);
router.get("/productos", renderProductos);
// router.get("/:id", renderUnProducto);
router.get("/", renderProductos);

router.post("/", validateProduct, agregarProducto);

// router.put("/:id", modificarProducto);

module.exports = router;
