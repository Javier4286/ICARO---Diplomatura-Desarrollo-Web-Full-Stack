/* Agregar una función que reciba por parámetro el título a buscar, y me devuelva el titulo y la descripción encontrada...
O un mensaje de "no se encontraron resultados" en caso de que no se encuentre nada. Ejemplo function return.
Recuerden prestar atención al formato del archivo json, a la ruta que colocan en readFileSync y writeFileSync, y exportar cada función. */

const fs = require("fs");
let archivoJson = fs.readFileSync("./data.json", "utf-8");
const jsonParse = JSON.parse(archivoJson);

const returnTitle = (titulo) => {
  const tareas = jsonParse;
  const tarea = tareas.find((tarea) => {
    return tarea.titulo === titulo;
  });
  if (!tarea) {
    return "no se encontraron resultados";
  }
  return tarea;
};

module.exports = { returnTitle };
