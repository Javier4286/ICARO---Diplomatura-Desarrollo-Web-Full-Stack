const verificarSesion = (req, res, next) => {
  if (req.session && req.session.usuario) {
    next();
  } else {
    res.redirect("/no-logueado");
  }
};

module.exports = verificarSesion;
