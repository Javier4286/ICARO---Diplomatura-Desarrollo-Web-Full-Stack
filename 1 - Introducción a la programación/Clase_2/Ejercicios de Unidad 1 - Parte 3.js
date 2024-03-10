/* Ejercicios de Unidad 1 - Parte 3
Ejercicios de map: (El método map nos permite aplicar una función a cada elemento en un array y crear un nuevo array con los resultados.)
1. Dado un array de números, crea un nuevo array que contenga los números multiplicados por 2. */

const arrayDeNumerosMap = [3, 6, 9, 12, 15];
const multiplicadosPorDos = arrayDeNumerosMap.map((numeros) => numeros * 2);
console.log(multiplicadosPorDos);

/* 2. Dado un array de nombres, crea un nuevo array que contenga los nombres en mayúsculas. */

const arrayDeNombres = [
  "Javier",
  "Alexis",
  "Antonia",
  "Josefa",
  "Felipe",
  "Delfor",
];
const nombresEnMayusculas = arrayDeNombres.map((nombres) =>
  nombres.toUpperCase()
);
console.log(nombresEnMayusculas);

/* 3. Dado un array de objetos con la propiedad 'nombre', crea un nuevo array que contenga solo los nombres de cada objeto. */

const arrayDeObjetos = [
  { nombre: "Javier", edad: 33 },
  { nombre: "Antonia", edad: 67 },
  { nombre: "Felipe", edad: 72 },
];
const soloNombresDeCadaObjeto = arrayDeObjetos.map((algo) => algo.nombre);
console.log(soloNombresDeCadaObjeto);

/* 4. Dado un array de números, crea un nuevo array que contenga los números elevados al cuadrado. */

const arrayDeNumeros4 = [1, 2, 3, 4, 5];
const numerosElevadosAlCuadrado = arrayDeNumeros4.map(
  (numeros) => numeros ** 2
);
console.log(numerosElevadosAlCuadrado);

/* 5. Dado un array de strings, crea un nuevo array que contenga la longitud de cada string. */

const arrayDeStringsMap = ["array", "De", "Strings"];
const longitudDeCadaStrings = arrayDeStringsMap.map(
  (strings) => strings.length
);
console.log(longitudDeCadaStrings);

/* Ejercicios de find: (El método find nos permite encontrar el primer elemento en un array que cumpla una cierta condición.)
1. Dado un array de números, encuentra el primer número que sea divisible entre 7. */

const arrayDeNumerosFind = [1, 3, 5, 7, 1, 9, 25, 49];
const divisibleEntreSiete = arrayDeNumerosFind.find(
  (numeros) => numeros % 7 === 0
);
console.log(divisibleEntreSiete);

/* 2. Dado un array de objetos con la propiedad 'nombre', encuentra el primer objeto cuyo nombre sea 'Juan'. */

const arrayDeObjetosFind = [
  { nombre: "Antonia", edad: 67 },
  { nombre: "Felipe", edad: 72 },
  { nombre: "Javier", edad: 33 },
  { nombre: "Juan", edad: 57 },
];
const primerObjeto = arrayDeObjetosFind.find(
  (objeto) => objeto.nombre === "Juan"
);
console.log(primerObjeto);

//3. Dado un array de strings, encuentra el primer string que contenga la letra 'o'.

const arrayDeStringsFind = ["A24com", "Neura Media", "Vorterix"];
const primerStringsConO = arrayDeStringsFind.find((strings) =>
  strings.includes("o")
);
console.log(primerStringsConO);

/* 4. Dado un array de números, encuentra el primer número negativo. */

const arrayDeNumerosFind4 = [0, 2, -2, 4, -4];
const primerNumeroNegativo = arrayDeNumerosFind4.find((numeros) => numeros < 0);
console.log(primerNumeroNegativo);

/* 5. Dado un array de objetos con la propiedad 'edad', encuentra el primer objeto cuya edad sea mayor o igual a 18 y menor o igual a 25. */

const arrayDeObjetosFind5 = [
  { nombre: "Antonia", edad: 67 },
  { nombre: "Felipe", edad: 72 },
  { nombre: "Javier", edad: 33 },
  { nombre: "Ozzy", edad: 24 },
];
const primerObjetoEdad = arrayDeObjetosFind5.find(
  (objeto) => objeto.edad >= 18 && objeto.edad < 25
);
console.log(primerObjetoEdad);

/* Ejercicios de filter: (El método filter nos permite crear un nuevo array que contenga solo los elementos que cumplan ciertas condiciones.)
1. Dado un array de números, crea un nuevo array que contenga solo los números pares. */

const arrayDeNumerosFilter = [10, 15, 20, 25, 30, 35, 40, 45, 50];
const arrayNumerosPares = arrayDeNumerosFilter.filter(
  (pares) => pares % 2 === 0
);
console.log(arrayNumerosPares);

/* 2. Dado un array de objetos con la propiedad 'edad', crea un nuevo array que contenga solo los objetos con edad mayor o igual a 18. */

const arrayDeObjetosFilter = [
  { nombre: "Astor", edad: 13 },
  { nombre: "Sabina", edad: 9 },
  { nombre: "Javier", edad: 33 },
  { nombre: "Walter", edad: 44 },
];
const objetosMayoresDeEdadFilter = arrayDeObjetosFilter.filter(
  (objeto) => objeto.edad >= 18
);
console.log(objetosMayoresDeEdadFilter);

//3. Dado un array de strings, crea un nuevo array que contenga solo las palabras con longitud mayor o igual a 5.

const arrayDeStringsFilter = [
  "Alejandro",
  "Draw",
  "Esteban",
  "Hi!",
  "For",
  "Mario",
];
const palabrasConLongitud5 = arrayDeStringsFilter.filter(
  (mayor) => mayor.length >= 5
);
console.log(palabrasConLongitud5);

/* 4. Dado un array de objetos con las propiedades 'nombre' y 'edad', crea un nuevo array que contenga solo los objetos con nombre que empiecen por la letra 'J' y edad mayor o igual a 25. */

const arrayDeObjetosFilter4 = [
  { nombre: "Fabricio", edad: 4 },
  { nombre: "Ian", edad: 5 },
  { nombre: "Jorge", edad: 46 },
  { nombre: "Jose", edad: 33 },
  { nombre: "Julieta", edad: 21 },
  { nombre: "Franco", edad: 32 },
];
const objetosJy25 = arrayDeObjetosFilter4.filter(
  (objetos) => objetos.nombre[0] === "J" && objetos.edad >= 25
);
console.log(objetosJy25);

//5. Dado un array de números, crea un nuevo array que contenga solo los números negativos.

const arrayDeNumerosFilter5 = [0, 5, -15, 10, -0.25, 0.75, -100, 75];
const arraySoloNumerosNegativos = arrayDeNumerosFilter5.filter(
  (numeros) => numeros < 0
);
console.log(arraySoloNumerosNegativos);

/* Ejercicios de slice: (El método slice nos permite crear un nuevo array a partir de un subconjunto de elementos en un array existente.)
1. Dado un array de números, crea un nuevo array que contenga los primeros tres elementos. */

const arrayDeNumerosSlice = [0, 10, 20, 30, 40, 50, 100];
const primerosTresElementos = arrayDeNumerosSlice.slice(0, 3);
console.log(primerosTresElementos);

//2. Dado un array de objetos con la propiedad 'nombre', crea un nuevo array que contenga los dos primeros objetos.

const arrayDeObjetosSlice = [
  { nombre: "Genesis" },
  { nombre: "Gabriela" },
  { nombre: "Luciana" },
  { nombre: "Susana" },
  { nombre: "Valeria" },
];

const dosPrimerosObjetos = arrayDeObjetosSlice.slice(0, 2);
console.log(dosPrimerosObjetos);

//3. Dado un array de strings, crea un nuevo array que contenga los últimos tres strings.

const arrayDeStringsSlice = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
];
const ultimosTresStrings = arrayDeStringsSlice.slice(-3);
console.log(ultimosTresStrings);

//4. Dado un array de números, crea un nuevo array que contenga todos los elementos excepto el primero y el último.

const arrayDeNumerosSlice4 = [-3.75, -2, -1.5, -0.75, 75, 1050, 2075, 5000];
const exceptoPrimeroYUltimo = arrayDeNumerosSlice4.slice(1, -1);
console.log(exceptoPrimeroYUltimo);

//5. Dado un array de objetos con la propiedad 'edad', crea un nuevo array que contenga los objetos con edad mayor o igual a 25 y menor o igual a 30. */

