//CRISTIAN DANIEL PACAS GUEVARA U20240388
//"Cálculo de presupuesto familiar"
let peliculas = [
    { Titulo : "Toy Story", Género : "Animación" },
    { Titulo : "Deadpool", Género : "Ficción" },
    { Titulo : "8 Mile", Género : "Musical" },
    { Titulo : "No respires", Género : "Terror" },
    { Titulo : "Scary Movie", Género : "Comedia" },
]

let generodeseado = "Musical";
let pelicularecomendada = null
for (let a = 0; a < peliculas.length; a ++) {
    if (peliculas[a].Género === generodeseado) {pelicularecomendada = peliculas[a].Titulo;
    }}

if (pelicularecomendada) {
    console.log ("Te recomendamos ver la película: " + pelicularecomendada)
}
else {
    console.log ("Lo sentimos, no hay recomendaciones para el género seleccionado")}