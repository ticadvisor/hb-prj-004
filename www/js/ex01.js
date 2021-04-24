/* #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Define una función a la que le pases como parámetro un número y nos diga
 * si dicho número es primo (true) o no (false).
 *
 * [Opcional]: crea una segunda función a la que le pases como parámetro un nº
 * máximo y nos muestre por consola todos los nº primos del 2 al nº que hemos
 * pasado como parámetro. La función que creaste al principio comprueba si un
 * número es primo o no, quizás puedas hacer uso de ella.
 *
 */

'use strict';

const numberInput = 89;
let isPrimeNumber = false;

if (numberInput === 0 || numberInput === 1) {
} else {
    for (let index = 2; index <= numberInput; index++) {
        if (numberInput % index !== 0) {
            if (numberInput === index) {
                // When number is divided by itself
                isPrimeNumber = true;
                break;
            } else {
            }
        } else {
            // When reminder is 0
            if (numberInput === index) {
                // When number is divided by itself
                isPrimeNumber = true;
                break;
            } else {
                // When number is divided by other number
                break;
            }
        }
    }
}
if (isPrimeNumber) {
    console.log(`${numberInput} is a prime number`);
} else {
    console.log(`${numberInput} is not a prime number`);
}
