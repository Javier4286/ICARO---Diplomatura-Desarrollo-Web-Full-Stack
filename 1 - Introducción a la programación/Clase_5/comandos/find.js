/* 5 - Archivo find.js: esta funcionalidad recibirá un parámetro y deberá retornar un true o false dependiendo de si encuentra o este parámetro dentro del listado de tareas (cómo título). */

const { tasks } = require("../tasksData");
function find(param) {
  //const resultado = tasks.some((tarea)=> (tarea.titulo===param))
  const resultado = tasks.some((tarea) => tarea.titulo.includes(param));
  return resultado;
}
module.exports = { find };
