const { read } = require("./read");
const { write } = require("./writejson");
const deleteTitle = (tituloBorrar) => {
  const data = read();
  const arrayEditado = data.filter((tarea) => tarea.titulo != tituloBorrar);
  write(arrayEditado);
  return console.log("Borrado con exito");
};
module.exports = { deleteTitle };
