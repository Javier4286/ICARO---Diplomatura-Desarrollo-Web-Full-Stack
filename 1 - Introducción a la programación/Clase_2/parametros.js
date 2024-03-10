/* 6. Si ya pudiste hacer todo esto, es hora que nos tomemos un descanso, para esto vamos a crear un nuevo archivo que llamaremos parametros.js
Y en él vamos a definir una variable nombre y la vamos a exportar para poder usar en otro archivo.
TIP: Recordá que para exportar en JS es necesario usar module.export = tu_funcion_o_variable
Y para importa debes usar const tu_funcion_o_variable = require(ruta_a_tu_archivo). */

variable_nombre = "Delfor";
module.exports = { variable_nombre }; //(Clase_4/calculadora.js)
