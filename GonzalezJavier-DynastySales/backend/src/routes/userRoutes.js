const express = require("express");

const {
  createUserAccount,
  userLogin,
} = require("../controllers/userControllers");
const {
  validateCreateUserAccount,
  validateUserLogin,
} = require("../middlewares/userValidations");
const router = express();

router.post("/", validateCreateUserAccount, createUserAccount);
router.post("/login", validateUserLogin, userLogin);

module.exports = router;
