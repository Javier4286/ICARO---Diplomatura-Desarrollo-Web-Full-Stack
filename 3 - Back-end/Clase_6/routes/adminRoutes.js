const express = require("express");
const { renderAdmin, renderLogout } = require("../controller/adminController");
const verificarSesion = require("../middleware/verificarSesion");
const router = express.Router();

router.use(verificarSesion);

router.get("/", renderAdmin);
router.get("/logout", renderLogout);

module.exports = router;
