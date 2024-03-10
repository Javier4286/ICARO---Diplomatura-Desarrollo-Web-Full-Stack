/* 1 - Crear un archivo tasksData.js que contendrá nuestras tareas.
La idea es que contenga en una variable/constante tasks (que exportaremos para consumir en otro archivo) todas las tareas en formato de un array de objetos literales, donde cada tarea es un objeto literal y en su conjunto conforman el array de tareas.
Cada tarea deberá tener dos propiedades: title (título) y desc (descripción), ambas de tipo string. */

const tasks = [
  {
    titulo: "sacar al gato",
    descripcion: "durante las mañanas",
  },
  {
    titulo: "sacar la basura",
    descripcion: "antes que pase el camion",
  },
];
module.exports = { tasks };