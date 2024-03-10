/* 4 - Archivo list.js: esta funcionalidad deberá retornar simplemente el listado completo de las tareas. Para ello, deberá leer por supuesto el listado completo, recorrerlo y retornar solamente los títulos de cada tarea, no su descripción, como un array de strings.
Vale aclarar, que para que podamos leer el listado de tareas deberemos importarlo desde cada archivo donde lo necesitemos, como por ejemplo en este archivo. Esto es algo que deberemos repetir en cada archivo dentro de comandos. */

const { tasks } = require("../tasksData.js");
function list() {
  return tasks.map((tarea) => tarea.titulo);
}
module.exports = { list };
