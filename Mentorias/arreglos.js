/* 1. Ahora vamos a crear un nuevo de JS con nombre arreglos.js. En este nuevo archivo vamos a crear una función que reciba como parámetro un arreglo.
Nos debe retornar “Es un gran arreglo” si tiene más de 5 elementos, sino debe retornar “Este arreglo en pequeño”.
TIP: Recordá que en los arreglos tienen una propiedad que nos devuelve la cantidad de elementos que tiene.
Quizás en este link encuentres más info: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array. */

const dias = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];
const estaciones = ["Otoño", "Invierno", "Primavera", "Verano"];

const arreglo = (elementos) => {
  if (elementos.length > 5) return "Es un gran arreglo";
  else return "Este arreglo es pequeño";
};
console.log(arreglo(dias), "\n", arreglo(estaciones));

/* 2. Para terminar con este grupo de ejercicios, vamos a crear una función que reciba un arreglo de nombres y el nombre de una persona.
La función debe retornar “Nombre se encuentra en el grupo” si el nombre se encuentra en el arreglo, sino retorna “Nombre no se encuentra en el grupo”. */

const ramones_1996 = ["Johnny", "Joey", "Marky", "C.J."];

const pinhead = (array, name) => {
  if (array.includes(name)) return "Nombre se encuentra en el grupo";
  else return "Nombre no se encuentra en el grupo";
};
console.log(
  pinhead(ramones_1996, "Joey"),
  "\n",
  pinhead(ramones_1996, "Dee Dee")
);