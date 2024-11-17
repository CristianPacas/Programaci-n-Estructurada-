//Ejemplo sincronico
console.log("Inicio del programa");
console.log("Tarea del programa");
console.log("Fin del programa");

function saludo() {
    console.log("Hola, mundo");
}
saludo();

//Ejemplo asincronico SetTimeout
//setTimeout(funcion, ms , arg1, arg2);

function saludo(nombre) {
    console.log(`Hola ${nombre}, Buenos dias`);
}
setTimeout (saludo, 2000, `Cristian`);

//Ejemplo asincronico SetInterval--Despues de cada cieerto tiempo
//setInterval(funcion, ms , arg1, arg2);

let numero = 5;

function conteo() {
    console.log(`lanzamiento en ${numero} segundos`);
    numero--;
    if (numero === 0) {
        clearInterval(lanzamiento);
        console.log("Fin del conteo");
    }
}
let lanzamiento = setInterval(conteo, 1000);
 