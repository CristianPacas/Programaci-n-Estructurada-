let calificaciones = {
    nombre: "Cristian",
    materias: {
        "Inglés": 9.50,
        "Programación": 9.10,
        "Matemáticas": 8.27,
    }

}

// Calcula la calificación promedio del estudiante

let suma = 0;
let contador = 0;

for (let materia in calificaciones.materias) {
    suma += calificaciones.materias[materia];
    contador++;
}

let promedio = suma / contador;

console.log("El promedio de " + calificaciones.nombre + " es: " + promedio.toFixed(2));