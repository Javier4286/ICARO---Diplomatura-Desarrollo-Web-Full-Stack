const express = require("express");
const {
  mostrarFormulario,
  mostrandoDatos,
} = require("../controllers/usuarioControllers");
const router = express.Router();

router.get("/formulario", mostrarFormulario);
router.post("/formulario", mostrandoDatos);

module.exports = router;
