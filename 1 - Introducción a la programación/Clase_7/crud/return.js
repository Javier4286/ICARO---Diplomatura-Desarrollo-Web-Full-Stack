/* 8 - Archivo return.js: esta funcionalidad continuará recibiendo un title por parámetro (string) y en caso de que ese título coincida con alguno de los que existen dentro del listado. Deberá retornar la desc que corresponde a esa tarea. */
const { read } = require("./read");
function returnDesc(param) {
  const data = read();
  const description = data.filter((item) => item.titulo === param);
  return description[0]
    ? description[0].descripcion
    : "Ningun titulo coincide con el ingresado";
}
module.exports = { returnDesc };
