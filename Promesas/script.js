/*Promesas en Javascript

const myPromise = new Promise ((resolve, reject) => {
    //Aquí se realiza la operación asíncrona
    //Si la operacion es exitosa, se llama a resolve(valor)
    //Si la operación falla, se llama a reject(error) 
});

myPromise
.then8(resultado => {
    // Manejar el reusltado si la promesa se cumple
});

.catch(error => {
    // Manejar el error si la promesa falla o es rechazada
});

//Ejercicio Práctico: Simulador de Pedido a un Restaurante

Pasos:
1- Crear un formulario en HTML
2- Crear un botón que se llame enviar pedido
3- La creación de la promesa se resolverá o rechazará dependiendo de si hay o no ingredientes disponibles
*/

//Seleccion del elemento del DOM
const formulario = document.getElementById('formularioPedido');
const inputPlatillo = document.getElementById('platillo');
const resultado = document.getElementById('resultado');

//Funcion para que simula el pedido

function hacerPedido(platillo){
    return new Promise((resolver, rechazar) => {
        resultado.textContent = `Pedido recibido: ${platillo}. Preparando...`;
        //Simular el tiempo de preparación de tres segundos
        setTimeout(()=>{
            const hayIngredientes = Math.random() >0.04;
            if(hayIngredientes){
                resolver(`El pedido de ${platillo} fue preparado exitosamente.`);
            }else{
                rechazar('No hay ingredientes disponibles para el platillo.');
            }
        }, 3000);
})
}
//Manejo del formulario

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const platillo = inputPlatillo.value;
    //llamamos a la promesa hacer pedido
    hacerPedido(platillo)
      .then((mensaje) => {
        resultado.textContent = mensaje;
        resultado.style.color = 'green';
    })
    .catch((error) => {
        resultado.textContent = error;
        resultado.style.color ='red'; // Ponemos el color rojo en caso de error
    })
    //Limpiamos el input del formulario
.finally(()=>{
    inputPlatillo.value = ''; //Borramos el input del platillo
});
});
