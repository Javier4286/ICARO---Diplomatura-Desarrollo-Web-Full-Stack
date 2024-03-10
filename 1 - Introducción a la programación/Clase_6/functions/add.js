/* Agregar una función que reciba por parámetros el título y la descripción de la tarea a agregar en el archivo "data.json". Ejemplo function add.
Recuerden prestar atención al formato del archivo json, a la ruta que colocan en readFileSync y writeFileSync, y exportar cada función. */

const fs = require("fs");
let jsonString = fs.readFileSync("./data.json", "utf-8");
const archivoParseado = JSON.parse(jsonString);

function add(title, descrip) {
  const tareas = {
    titulo: title,
    descripcion: descrip,
  };
  archivoParseado.push(tareas);
  fs.writeFileSync("./data.json", JSON.stringify(archivoParseado));
}

module.exports = { add };
