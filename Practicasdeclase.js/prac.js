// EJEMPLO 1

function decirGracias (name){
    console.log ('¡Gracias por tu compra '+ name + '! Valoramos tu preferencia.')
} 
decirGracias ('Cole');

// EJEMPLO 2
function rectangleArea(width, height) {
    return width * height;
}
console.log(rectangleArea(5, 7))

//EJEMPLO 3
function cualEsMayor (a,b) {
    return (a>b)? a: b;
}
let mayor =cualEsMayor(20, 10);
console.log(mayor);

//EJEMPLO 4
function contarCaracter (cadena, caracter){
    let contador = 0;
    for ( let i= 0; i < cadena.length; i++){
        if (cadena[i] === caracter){
            contador ++;
        }
    }
    return contador;
}
//llamar a la función
let cadena = "Programacion en javascript";
let caracter = "a";
let contador = contarCaracter(cadena, caracter);
console.log("El caracter " + caracter + " aparece " + contador + " veces en la cadena.")