// 1. Crea una función que reciba dos números y devuelva su suma
function sumatoriade2numeros (numero1, numero2)
    {
    return numero1 + numero2;
    
} console.log( sumatoriade2numeros(5,7))

//////////////////////////////////////////////////////////////////////////////////////////////////////////




// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function encontrarMayorNumero(arr) {
    if (arr.length == 0) {
        return null;
    }

    let mayor = arr[0]; // Inicializa con el primer elemento del array

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > mayor) {
            mayor = arr[i]; // Actualiza el mayor si encuentra un número más grande
        }
    }

    return mayor; // Retorna el número mayor
}

let numeros = [3, 5, 6, 7, 8, 9, 10];

console.log(encontrarMayorNumero(numeros)); // Debe devolver 

//////////////////////////////////////////////////////////////////////////////////////////////////////////


// 3. Crea una función que reciba un string y devuelve el número de vocales que contiene

function contarVocales(str) {
    let vocales = ['a', 'e', 'i', 'o', 'u'];
    let contador = 0;

    for (let i = 0; i < str.length; i++) {
        if (vocales.includes(str[i].toLowerCase())) {
            contador++;
        }
    }

    return contador;
}
console.log (contarVocales("Cristian"));

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

function convertirMayusculas(arr) {
    let mayusculas = [];

    for (let i = 0; i < arr.length; i++) {
        mayusculas.push(arr[i].toUpperCase());
    }

    return mayusculas;
}   

let strings = ["hola", "mundo", "javascript"];

console.log(convertirMayusculas(strings)); // Debe devolver ["HOLA", "MUNDO", "JAVASCRIPT"]

//////////////////////////////////////////////////////////////////////////////////////////////////////////




// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function esPrimo(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}   

console.log(esPrimo(17)); // Debe devolver true
