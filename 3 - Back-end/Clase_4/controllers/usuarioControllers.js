const mostrarFormulario = (req, res) => {
  res.render("formulario");
};
const mostrandoDatos = (req, res) => {
  const { ...usuario } = req.body;
  console.log(usuario);
  res.render("datosUsuario", { usuario });
};

module.exports = { mostrarFormulario, mostrandoDatos };
