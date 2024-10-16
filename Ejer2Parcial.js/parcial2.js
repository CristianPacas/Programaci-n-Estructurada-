function calcularPromedio (notas) { 
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    return suma / notas.length;
    
}
let notas = [7.5, 8.6, 9.5, 10.]
let nombre = "Cristian"
console.log("El promedio de las notas de " + nombre + " es de " + calcularPromedio(notas)); 
