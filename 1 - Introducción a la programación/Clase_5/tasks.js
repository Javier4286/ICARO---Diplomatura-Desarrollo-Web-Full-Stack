/* 2 - Crear una carpeta llamada funcionalidades o comandos donde ubicaremos las distintas funciones que dispararán las acciones de nuestra aplicación. Estas funcionalidades deberán ser un archivo con un nombre descriptivo para cada una, por ejemplo: filter.js, entre otros.
3 - Dentro de la carpeta funcionalidades/comandos (le llamaremos comandos de aquí en adelante para simplificar) debemos incluir el código para que cada una de estas funcionalidades cumpla con su propósito. Estas funciones serán disparadas desde nuestro entry point, archivo llamado tasks.js, que deberemos crear en la raíz de nuestro proyecto. */

const { list } = require("./comandos/list");
const { find } = require("./comandos/find");
console.log(list());
console.log(find("basura"));