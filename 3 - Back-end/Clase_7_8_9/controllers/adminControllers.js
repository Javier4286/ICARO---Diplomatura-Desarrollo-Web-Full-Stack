const adminControllers = (req, res) => {
  const usuario = req.session.usuario;
  res.render("profile", { usuario });
};

module.exports = { adminControllers };
