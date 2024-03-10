const { read } = require("./read");
function find(tituloBuscar) {
  const data = read();
  return data.some((tarea) => tarea.titulo === tituloBuscar);
}
//4- exportar la funcion
module.exports = { find };
