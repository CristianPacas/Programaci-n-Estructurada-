//Ejercicio 1: 
let age = "cirilo"

// Convertir el valor ingresado a un número
age = Number(age);

// Verificar si es un número y si es válido
if (isNaN(age) || age < 0) {
console.log("Por favor, ingresa una edad válida.");} 
else if (age >= 18) {console.log("Puedes ingresar a la discoteca.");} 
else {console.log("No puedes ingresar a la discoteca.");}

//Ejercicio 2

let calificacion = 71;

// Verificar si la calificación es válida (entre 0 y 100)
if (calificacion < 0 || calificacion > 100) {
    console.log("Por favor, ingresa una calificación válida entre 0 y 100.");
} else 
    // Clasificar según la escala de calificaciones
    if (calificacion >= 90 && calificacion <= 100) {
        console.log("Tu calificación es: A");
    } else if (calificacion >= 80 && calificacion <= 89) {
        console.log("Tu calificación es: B");
    } else if (calificacion >= 70 && calificacion <= 79) {
        console.log("Tu calificación es: C");
    } else if (calificacion >= 60 && calificacion <= 69) {
        console.log("Tu calificación es: D");
    } else {
        console.log("Tu calificación es: F");
    }

//Ejercicio 3
let day = 0 
let dayname;

switch (day) {
    case 1: 
           dayname = "Lunes";
           break;
    case 2: 
           dayname = "Martes";
           break;
    case 3: 
           dayname = "Miércoles";
           break;
    case 4: 
           dayname = "Jueves";
           break;
    case 5: 
           dayname = "Viernes";
           break;
    case 6: 
           dayname = "Sábado";
           break;
    case 7: 
           dayname = "Domingo";
           break;
        default: 
        dayname = "Día inválido"
    }
    console.log(dayname);
    
    //Ejercicio 4
let numero = 1;
numero = Number(numero)
if (numero > 0){console.log("El numero es positivo");}
     else if (numero < 0){console.log("El numero es negativo");}
     else {console.log("El numero es igual a 0");}

