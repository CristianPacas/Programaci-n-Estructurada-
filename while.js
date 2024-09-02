//Contador regresivo: 
//Crea un contador regresivo desde 10 hasta 1 usando un ciclo do...while.

let contador = 10;

do {
    console.log("El contador es: " + contador);
    contador--;
} while (contador >= 1);

//Encontrar el primer múltiplo de 7 mayor que 10:
//Usa un ciclo while para encontrar y mostrar el primer múltiplo de 7 que sea mayor que 10.
 let numero = 1;
 let multiplo = 7;

 while (multiplo <= 10) {
     numero++;
     multiplo = numero * 7;
 } console.log ("El primer multiplo de 7 mayor que 10 es: " + multiplo)

 //Imprimir números impares hasta 15:
//Utiliza un ciclo do...while para imprimir los números impares hasta el 15.

 let numeroImpar = 1;

 do {
     console.log("El número impar es: " + numeroImpar);
     numeroImpar += 2;
 } while (numeroImpar <= 15);

 //Contar cuántas veces aparece un número en un array:
//Usa un ciclo while para contar cuántas veces aparece un número específico en un array dado.

 let array = [1, 2, 3, 4, 5, 5, 2, 7, 2, 9, 10];
 let numeroBuscado = 2;
 let contadorN = 0;
 let i = 0;

 while (i< array.length) {
     if (array[i] === numeroBuscado) {
         contadorN++;
     }
     i++;
 } 
 console.log("El número " + numeroBuscado + " aparece " + contadorN + " veces en el array.");

 //Sumar todos los elementos de un array:
//Usa un ciclo do...while para sumar todos los elementos de un array.
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let suma = 0;
let k = 0;

do {
    suma += array2[k]; k++;
} while (k<array2.length) 
console.log("La suma de todos los elementos del array es: " + suma);
 
//Generar una secuencia de Fibonacci hasta el número 20:
//Utiliza un ciclo while para generar los números de la secuencia de Fibonacci que son menores o iguales a 20.

let Fibonacci = [0,1];
let w = 2;

while (Fibonacci[w-1] + Fibonacci[w-2] <= 20) {
    Fibonacci[w] = Fibonacci[w-1] + Fibonacci[w-2];
    w++;
}
console.log("Los números de la secuencia de Fibonacci menores o iguales a 20 son:", Fibonacci);