/* 5- Crear un archivo calculadora.js en el cual deberemos requerir los cuatros archivos hechos con anterioridad.
6- Ejecutar la función que permite sumar y la función que permite restar, pasando como argumentos dos números cualesquiera. Mostrar en consola los resultados. */

const { sumar } = require("./sumar");

const { restar } = require("./restar");

const resultado_suma = sumar(1, 1);
console.log(resultado_suma);

const resultado_resta = restar(2, 1);
console.log(resultado_resta);

/* 7- Ejecutar la función que permite multiplicar, pasando como argumentos dos números cualesquiera. Mostrar en consola el resultado.
8- Ejecutar la función que permite multiplicar, pasando ahora como uno de los dos argumentos, el número cero. Mostrar en consola el resultado. */

const { multiplicar } = require("./multiplicar");

const resultado_multiplicar = multiplicar(2, 2);
console.log(resultado_multiplicar);
const resultado_multiplicar_x0 = multiplicar(3, 0);

/* 9- Ejecutar la función que permite dividir, pasando como argumentos dos números cualesquiera. Mostrar en consola el resultado.
10- Ejecutar la función que permite dividir, pasando ahora como uno de los dos argumentos, el número cero. Mostrar en consola el resultado. */

const { dividir } = require("./dividir");

const resultado_dividir = dividir(20, 2);
console.log(resultado_dividir);
const resultado_dividir_1 = dividir(20, 0);
console.log(resultado_dividir_1);

/* - ¿Qué hubiese sucedido si, en vez de generar un archivo por cada operación
matemática, hubiésemos programado todo en un mismo archivo?

- ¿Por qué el mejor camino es generar distintos archivos y luego requerirlos en uno solo?

- ¿Será esta metodología de trabajo una constante de aquí en adelante? */

const { variable_nombre } = require("../parametros");
console.log(variable_nombre); //(Introducción a la programación/parametros.js)
