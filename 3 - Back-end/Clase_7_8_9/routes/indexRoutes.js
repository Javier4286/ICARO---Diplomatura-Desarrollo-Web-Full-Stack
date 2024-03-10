const express = require("express");
const {
  renderIndex,
  renderLogin,
  renderRegister,
  registrarNuevo,
  login,
} = require("../controllers/indexControllers");
const validateRegister = require("../middleware/validateRegister");
const router = express();

router.get("/", renderIndex);
router.get("/login", renderLogin);
router.post("/login", login);
router.get("/register", renderRegister);
router.post("/register", validateRegister, registrarNuevo);
module.exports = router;
