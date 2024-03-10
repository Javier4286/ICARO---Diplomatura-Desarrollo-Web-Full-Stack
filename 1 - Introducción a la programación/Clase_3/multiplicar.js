/* 3- Crear un archivo multiplicar.js que contenga una función llamada multiplicar, la cual debe ser exportada al final del archivo.
Esta función deberá recibir 2 parámetros y retornar la multiplicación de los mismos.
Contemplar el escenario donde si alguno de los dos parámetros es cero, la función retornará cero. */

function multiplicar(numero1, numero2) {
  if (numero1 === 0 || numero2 === 0) {
    return console.log(
      0,
      "(Cualquier numero multiplicado por 0, da como producto 0)"
    );
  } else {
    return numero1 * numero2;
  }
}
module.exports = { multiplicar };
