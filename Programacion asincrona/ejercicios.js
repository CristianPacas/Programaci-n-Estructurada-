//CRISTIAN DANIEL PACAS GUEVARA U20240388
//Ejercicio 1. 
//Mensaje con setTimeout 
function saludo() {
    console.log(`Hola, bienvenidos a la clase`);
}
setTimeout (saludo, 3000);

//Ejercicio 2. 
//Temporizador de Cuenta Regresiva
let numero = 5;

console.log("Cuenta regresiva en:");
function conteo() {
    console.log(`${numero} segundos`);
    numero--;
    if (numero === 0) {
        clearInterval(lanzamiento);
        console.log("¡Tiempo terminado!");
    }
}
let lanzamiento = setInterval(conteo, 1000);


//Ejercicio 3.
//Mostrar Fecha y Hora Actual Cada Segundo
//Escribe un programa que muestre la fecha y hora actual en la consola cada segundo usando serInterval.

function mostrarFechaHora() {
    let fecha = new Date();
    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();

    console.log(`${horas}:${minutos}:${segundos}`);
}

let intervalo = setInterval(mostrarFechaHora, 1000);
 
// Ejercicio 4.
//Simulación de Petición de Datos con setTimeout
//Simula una petición a un servidor que tarda 2 segundos en responder. 
//Debe mostrar "Obteniendo datos..." inmediatamente, y después de 2 segundos, debe mostrar "Datos recibidos: [1, 2, 3, 4, 5]".

console.log("Oobteniendo datos");

function servidor(
    nombre = "Datos recibidos: [1, 2, 3, 4, 5]"
) {
    console.log(`${nombre}`);
}
setTimeout (servidor, 2000,);


//Ejercicio 5.
//Detener un Temporizador Después de 5 Ejecuciones

//Crea un programa que muestre "Ejecutando tarea..." cada segundo, pero que se detenga automáticamente después de 5 ejecuciones.

let contador = 0;

function tarea() {
    console.log("Ejecutando tarea...");
    contador++;

    if (contador === 5) {
        clearInterval(intervalo2);
        console.log("Programa detenido");
    }
}

let intervalo2 = setInterval(tarea, 1000);