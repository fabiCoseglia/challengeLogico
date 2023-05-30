/* Crear la función range_vision() que, dado un entero no negativo, determine si hay al menos un dígito 1 en el entero que tiene el valor de visualización más bajo de todos los dígitos del entero. La función debe devolver un booleano: true cuando un dígito 1 tiene el valor de vista más bajo en el número dado, false de lo contrario.

*
Imagine un número entero no negativo, digamos 34315. Cada dígito en el número entero tiene un llamado rango de visión . El primer dígito, 3, tiene un rango de visión de 3. En otras palabras, puede 3 "ver" 3 dígitos a cada lado de sí mismo. En nuestro ejemplo, puede mirar a la derecha de sí mismo y ver 4, 3 y 1. A la izquierda, no hay nada. El rango de visión de cada dígito es su propio valor.

Ahora bien, el rango de visión de un dígito define el llamado valor de visión, que es la suma de los dígitos dentro del rango de visión. Entonces, el valor de visión del primer dígito, 3 es 4+3+1=8. Para el segundo dígito, 4 el valor de visión es 3+3+1+5=12. */





  
  const range_vision = (numero) => {
    // Convertir el número en un array de dígitos
    const digitos = String(numero)
    .split('')
    .map(Number); // mapeamos un array de numeros
  

    // Variable para almacenar si se encuentra un dígito 1 con el valor de visión mínimo
    let tieneMinimaVisionUno = false; 
    // inicializo el valor mínimo de visión como null
    let minimaVision = null; 
  
    digitos.forEach((digitoActual, i) => {
    
    // calculamos el rango de visión a la izquierda
    //con Math.max(0,...) me aseguro de no tomar numeros negativos
    // utilizando .slice extraigo una porcion del array digitos
      const rangoIzquierda = digitos.slice(Math.max(0, i - digitoActual), i); 
    // Calculo el rango de visión a la derecha
      const rangoDerecha = digitos.slice(i + 1, i + 1 + digitoActual); 
  
    // Calculo el valor de visión del dígito actual
      const vision = rangoIzquierda.concat(rangoDerecha).reduce((suma, digito) => suma + digito, 0); 
  
      if (minimaVision === null || vision < minimaVision) {
        minimaVision = vision; // Actualizo el valor mínimo de visión si es null o menor al mínimo actual
        tieneMinimaVisionUno = digitoActual === 1; // Actualizo tieneMinimaVisionUno si el dígito actual es 1
      } else if (digitoActual === 1 && vision === minimaVision) {
        tieneMinimaVisionUno = true; // Actualizo tieneMinimaVisionUno si el dígito actual es 1 y tiene el valor de visión mínimo
      }
    });
    
    //Por último, retornamos si existe un 1 con el valor de vision minimo!. de lo contrario false 
    return tieneMinimaVisionUno; 
  };
  
module.exports= range_vision;
  
  

  