/* 2- Crear un archivo modulo.js que contenga una función llamada módulo, la cual debe ser exportada al final del archivo.
Esta función deberá recibir 2 parámetros (dividendo y divisor) y retornar el módulo o resto de la división.
Si el divisor es cero, la función producirá un error de división por cero y no producirá un resultado válido.
Contemplar el escenario donde el parámetro divisor es 0, la función retornará "No se puede realizar la operacion". */

function module(dividendo, divisor) {
  if (divisor == 0) {
    return "No se puede realizar la operación";
  }
  return dividendo % divisor;
}
console.log(module(45, 0));

module.exports = { module };
