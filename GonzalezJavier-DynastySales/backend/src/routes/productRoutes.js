const express = require("express");
const {
  addProducts,
  readProducts,
  readProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productControllers");
const {
  validateProductAddAndUpdate,
} = require("../middlewares/productValidations");

const router = express();

router.post("/", validateProductAddAndUpdate, addProducts);
router.get("/", readProducts);
router.get("/:id", readProduct);
router.put("/:id", validateProductAddAndUpdate, updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
