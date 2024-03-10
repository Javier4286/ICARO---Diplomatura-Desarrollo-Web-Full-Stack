/* 1. Crear un archivo index.js, crear una variable con tu nombre, e imprimir por pantalla ‘Hola Icaro”(cambia Icaro por tu nombre). */

const variableConTuNombre = "Javier";
console.log("Hola", variableConTuNombre);

/* 2. Ahora vamos a cambiar un poco el ejercicio, vamos a crear una función que imprima por pantalla “”Hola Icaro” (cambia Icaro por tu nombre). */

function saludar() {
  const saludo = "Javier";
  console.log("Hola", saludo);
}
saludar();

/* 3. Para seguir complicando el problema, vamos a crear una función que reciba como parámetro un nombre y retorne “Hola Icaro” (cambia Icaro por tu nombre). */

function saludar_1(nombre) {
  return "Hola " + nombre;
}
const x = saludar_1("Javier");

console.log("(Ejercicio 3)", x, "(Función con variable)");

//(Función con Template Literals (Template Strings)

function saludarConNombre(nombre) {
  return `(Ejercicio 3) Hola ${nombre} (Función con Template Literals (Template Strings))`;
}
const saludarJavier = saludarConNombre("Javier");
console.log(saludarJavier);

/* 4. Para cambiar el aire, vamos a hacer una función que reciba la edad de una persona y nos retorne “sos mayor de edad” si la persona tiene al menos 18 años.
Sino debe retornar “sos menor de edad”. */

function edad(edades) {
  if (edades < 18) return "sos menor de edad";
  else edades >= 18;
  return "sos mayor de edad";
}
console.log("17", edad(17));
console.log("18", edad(18));

/* 5. Vamos a crear una función, que recibe 2 parámetros: el primero será el nombre de la persona, y el segundo será la edad.
Esta función debe retornar “Hola Icaro sos mayor de edad” (tiene al menos 18 años) si el usuario es mayor de edad, sino “Hola Icaro sos menor de edad” (menor de 18 años).
TIP: Podes usar las funciones que hiciste en 3 y 4, para resolver el problema más fácil. */

function nombre_y_edad(nombre, edades) {
  const y = saludar_1(nombre);
  const z = edad(edades);
  return y + z;
}
console.log(nombre_y_edad("Javier ", 18));
