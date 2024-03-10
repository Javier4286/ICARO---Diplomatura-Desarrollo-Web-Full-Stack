/* Agregar una función que reciba por parámetro el título a eliminar del archivo "data.json". Ejemplo function delete.
Recuerden prestar atención al formato del archivo json, a la ruta que colocan en readFileSync y writeFileSync, y exportar cada función. */

const fs = require("fs");

function deleteTitle(title) {
  const stringJson = fs.readFileSync("./data.json", "utf-8");
  const deleteJsonParse = JSON.parse(stringJson);
  const search = deleteJsonParse.filter((algo) => {
    return title !== algo.titulo;
  });
  const tareasFiltradasString = JSON.stringify(search)
  fs.writeFileSync("./data.json", tareasFiltradasString);
  return search
}

module.exports = { deleteTitle };
