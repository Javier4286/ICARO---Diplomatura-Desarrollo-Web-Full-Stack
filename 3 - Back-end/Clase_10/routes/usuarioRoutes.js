const express = require("express");
const {
  obtenerUsuarios,
  crearUsuario,
  obtenerUnUsuario,
  actualizarUsuario,
  eliminarUsuario,
} = require("../controller/usuarioController");
const validateUsuario = require("../middleware/validateUsuario");
const router = express();

router.get("/", obtenerUsuarios);
router.get("/:id", obtenerUnUsuario);
router.post("/", validateUsuario, crearUsuario);
router.put("/:id", actualizarUsuario);
router.delete("/:id", eliminarUsuario);

module.exports = router;
