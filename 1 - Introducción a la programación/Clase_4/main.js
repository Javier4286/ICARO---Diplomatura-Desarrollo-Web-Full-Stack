/* 1- Crea una función que reciba un array de números como argumento y devuelva el número más grande del array. */

function encontrarMaximo(array) {
  return Math.max(...array);
}
const numeros = [5, 10, 15, -20];

const resultado1 = encontrarMaximo(numeros);

console.log(resultado1);

/* console.log(...numeros); */

/* 2- Crea una función que reciba dos arrays como argumentos y devuelva un nuevo array que contenga los elementos comunes entre ambos arrays. */

function arrayArgumentos(array1, array2) {
  return array1.filter((valor) => array2.includes(valor));
}
const numeros_abc = [3, 5, 11, 15, 99, 215, -8];

const resultado2 = arrayArgumentos(numeros, numeros_abc);

console.log(resultado2);

/* 3- Crea una función que reciba una cadena de texto como argumento y devuelva un nuevo string con todas las letras en mayúsculas. */

function convertirAMayuscula(string) {
  return string.toUpperCase();
}

const resultado3 = convertirAMayuscula("javier");

console.log(resultado3);

/* 4- Crea una función que reciba una cadena de texto como argumento y devuelva un nuevo string con todas las palabras en orden inverso. */

function palabrasInvertidas(string) {
  return string.split(" ").reverse().join("");
}

const resultado4 = palabrasInvertidas("Hola chicos como estan?");

console.log(resultado4);
