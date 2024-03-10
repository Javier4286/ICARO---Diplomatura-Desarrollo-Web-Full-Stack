/* 1. Para trabajar un poco con los métodos de arrays vamos a crear las siguientes funciones:
a. Una función que reciba un array y devuelva otro que contenga todos los elementos mayores o iguales a 10. */

const arrayUno = [-10, -5, -0.5, 0, 0.75, 5, 10, 25, 75, 500];

const elementosMayoresa10 = (param) => {
  const funcion1 = [];
  param.forEach((item) => {
    if (item >= 10) {
      funcion1.push(item);
    }
  });
  return funcion1;
};
console.log(elementosMayoresa10(arrayUno));

const elementosMayoresa10Arrow = (param) => {
  return param.filter((item) => item >= 10);
};
console.log(elementosMayoresa10Arrow(arrayUno));

/* b. Una función que reciba un array y retorne true si el array incluye el número 5 y false en caso contrario. */

const trueOrFalse = (param) => {
  return param.includes(5);
};
console.log(trueOrFalse(arrayUno));

const trueOrFalseArrow = (param) => {
  return param.some((item) => item === 5);
};
console.log(trueOrFalseArrow(arrayUno));

/* c. Una función que reciba un array y un número, la cual debe retornar un array con todos los elementos mayores o iguales a dicho número. */

const mayoresoIgualesAArrow = (param1, param2) => {
  return param1.filter((item) => item >= param2);
};
console.log(mayoresoIgualesAArrow(arrayUno, 10));

/* d. Por último, una función que reciba un array y un número.
Dicha función, debe retornar true en caso de que el número se encuentre en el array y false en caso contrario. */

const trueOrFalse2Arrow = (param1, param2) => {
  return param1.includes(param2);
};
const y = 5;
trueOrFalse2Arrow(arrayUno, y);
console.log(trueOrFalse2Arrow(arrayUno, y));

/* 2. Vamos a trabajar un poco con objetos, para este ejercicio usaremos un objeto de esta forma:
a. Debemos crear una función que reciba a un usuario como parámetro y que retorne “Hola Luis Miguel sos mayor de edad” en caso de que el usuario tenga al menos 18 años y “Hola Luis Miguel sos menor de edad” si el usuario tiene menos de 18 años.
TIP: Quizás te sirva alguna de las funciones que creaste en ejercicios anteriores. */

const usuario = {
  nombre: "Luis",
  apellido: "Miguel",
  edad: 25,
  cursos: ["JavaScript básico"],
};

const mayorOMenorDeEdadArrow = (param) => {
  if (param.edad >= 18) {
    return `Hola ${usuario.nombre} ${usuario.apellido} sos mayor de edad`;
  }
  return `Hola ${usuario.nombre} ${usuario.apellido} sos menor de edad`;
};
console.log(mayorOMenorDeEdadArrow(usuario));

/* b. Ahora crearemos una función que reciba un usuario y un curso, y retorne el usuario con el nuevo curso.
Por ejemplo si recibimos al usuario del ejemplo y el curso de “Introducción a las bases de datos”, la función debe retornar: */

const usuarioYCurso = (param1, param2) => {
  param1.cursos.push(param2);
  //console.log("Estoy dentro de la funcion", param1);
  return param1;
};
console.log(usuarioYCurso(usuario, "Introducción a las bases de datos"));
