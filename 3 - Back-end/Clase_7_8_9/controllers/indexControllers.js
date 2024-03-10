const fs = require("fs");
const bcrypt = require("bcrypt");
const { saveUsuarios, readUsuarios } = require("../services/usuariosServices");

const renderIndex = (req, res) => {
  res.render("index");
};

const renderLogin = (req, res) => {
  res.render("login");
};

const renderRegister = (req, res) => {
  res.render("register", { errors: [] });
};

const registrarNuevo = (req, res) => {
  const { email, password } = req.body;
  const usuarios = readUsuarios();
  const resultado = usuarios.some((user) => user.email === email);
  if (resultado) {
    return res.status(400).send("El usuario ya existe");
  }
  const saltRounds = 10;
  bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
    if (err) {
      res.status(500).send("Error al hashear la contraseña");
      return;
    }
    const nuevoUsuario = {
      email,
      password: hashedPassword,
    };
    const usuarios = readUsuarios();
    usuarios.push(nuevoUsuario);
    saveUsuarios(usuarios);
    req.session.usuario = nuevoUsuario;
    res.redirect("/admin/profile");
  });
};

const login = (req, res) => {
  const { email, password } = req.body;
  const usuarios = fs.readFileSync("usuarios.json", "utf-8");
  const usuariosParse = JSON.parse(usuarios);
  let resultado;
  if (Array.isArray(usuariosParse)) {
    resultado = usuariosParse.filter((user) => user.email === email);
  } else {
    return res.send("Credenciales invalidas");
  }
  if (resultado) {
    bcrypt.compare(password, resultado.password, (err, result) => {
      if (err) {
        return res.status(400).send("Error al comparar la contraseña");
      }
      if (result) {
        return res.status(200).send("Logueado correctamente");
      } else {
        return res.status(500).send("Contraseña incorrecta");
      }
    });
  } else {
    return res.status(200).send("Logueado correctamente");
  }
};

module.exports = {
  renderIndex,
  renderLogin,
  renderRegister,
  registrarNuevo,
  login,
};
