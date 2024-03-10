/* 9 - Archivo filter.js: esta funcionalidad retornará si encontró el valor que se le pasa por parámetro o no, esta función deberá retornar todas las tareas que contengan (en su título) lo que se le pasa por parámetro a la función.
Recordemos que ahora disponemos del método filter. Que debería facilitarnos muchísimo esta tarea. */
const { read } = require("./read");

function filter(param) {
  const data = read();
  const algo = data.filter((item) => {
    return item.titulo.includes(param);
  });
  console.log(algo);
}
module.exports = { filter };
