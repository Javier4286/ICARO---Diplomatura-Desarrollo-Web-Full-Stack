const {
  readNoticiasServices,
  saveNoticiasServices,
} = require("../services/noticiasServices");

const routeController = (req, res) => {
  const noticia = req.body;
  const noticias = readNoticiasServices();
  noticias.push(noticia);
  saveNoticiasServices(noticias);
};

module.exports = routeController;
