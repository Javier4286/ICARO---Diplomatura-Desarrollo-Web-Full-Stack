function saludo(req, res, next) {
  console.log("Hello from the middleware");
  next();
}
module.exports = saludo;
