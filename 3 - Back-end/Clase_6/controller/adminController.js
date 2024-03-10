const renderAdmin = (req, res) => {
  const { usuario } = req.session;
  res.render("logueado", { usuario });
};

const renderLogout = (req, res) => {
  req.session.destroy();
  res.redirect("/");
};

module.exports = { renderAdmin, renderLogout };
