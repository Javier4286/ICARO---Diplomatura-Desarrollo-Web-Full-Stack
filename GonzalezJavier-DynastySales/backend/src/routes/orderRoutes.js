const express = require("express");

const router = express.Router();

const {
  createOrder,
  addToCart,
  viewCart,
  removeFromCart,
} = require("../controllers/orderControllers");

router.post("/", createOrder);

router.post("/add-to-cart/:productId", addToCart);
router.get("/view-cart", viewCart);
router.delete("/cart/remove/:userId/:productId", removeFromCart);

module.exports = router;
