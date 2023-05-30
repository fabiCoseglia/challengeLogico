/* Escriba la función number_cardinality() que toma un número entero y devuelve una cadena, de la siguiente manera:

*
Devuelve la cadena zero si el número termina en 0
Devuelve la cadena five si el número termina en 5
Devuelve la cadena even si el número es par (divisible por 2) Y no termina en 0
Devuelve la cadena odd si el número es impar (no divisible por 2) Y no termina en 5
Asegúrese de que su cadena de retorno sea exactamente como la anterior, usando letras minúsculas. */


const number_cardinality = (num) => {
    // validaciones
    let ERROR = '';
    if (typeof num !== 'number' || !Number.isInteger(num)) {
      ERROR ='El dato ingresado debe ser un número entero';
      return ERROR;
    }
  
    // funcionalidad
    let result = '';

    if (num % 10 === 0) {
      result = 'zero';
      return result;
    } else if (num % 10 === 5) {
      result = 'five';
      return result;
    } else if (num % 2 === 0) {
      result= 'even';
      return result;
    } else {
      result = 'odd';
      return result;
    }
  };

  module.exports = number_cardinality;

  //testing:
/* 
  ERRORES:
  console.log(number_cardinality());
  console.log(number_cardinality(''));

  FUNCIONALIDAD:
console.log(number_cardinality(100)); // Output: zero
console.log(number_cardinality(88)); // Output: even
console.log(number_cardinality(155)); // Output: five
console.log(number_cardinality(99)); // Output: odd */