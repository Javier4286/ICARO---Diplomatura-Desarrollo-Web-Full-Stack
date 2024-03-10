/* 1- Crear un archivo exponenciar.js que contenga una función llamada exponenciar, la cual debe ser exportada al final del archivo.
Esta función deberá recibir 2 parámetros y retornar el resultado de elevar el primer parámetro a la potencia del segundo parámetro. */

function exponenciar(number1, number2) {
  return Math.pow(number1, number2); //(ó) number1**number2.
}
module.exports = { exponenciar };
