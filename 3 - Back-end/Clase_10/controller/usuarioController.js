const { readUsuarios, writeUsuarios } = require("../utils/fsfunctions");

function obtenerUsuarios(req, res) {
  let usuario = req.session.chilampia;
  res.json({ usuario });
}

const obtenerUnUsuario = (req, res) => {
  res.send("usuario Javier");
};

const crearUsuario = (req, res) => {
  const { nombre, apellido } = req.body;
  //creamos el usuario:
  const newUsuario = { nombreUsuario: nombre, apellido };
  //logica de sesión:
  const usuarios = req.session.chilampia || [];
  usuarios.push(newUsuario);
  req.session.chilampia = usuarios;
  //logica para base de datos:
  let usuariosDB = readUsuarios();
  if (!Array.isArray(usuariosDB)) {
    usuariosDB = [];
  }
  usuariosDB.push(newUsuario);
  writeUsuarios(usuariosDB);
  res.json({ message: "creado con exito", usuario: newUsuario });
};

const actualizarUsuario = (req, res) => {
  res.send("usuario actualizado");
};

const eliminarUsuario = (req, res) => {
  res.send("elimnar usuario");
};

module.exports = {
  obtenerUsuarios,
  obtenerUnUsuario,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario,
};
