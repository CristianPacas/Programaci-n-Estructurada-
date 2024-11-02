//CRISTIAN DANIEL PACAS GUEVARA U20240388
//SELECCION POR ID 
let titulo = document.getElementById('titulo');
let boton1 = document.getElementById('btnCambiarTexto');
let boton2 = document.getElementById('btnCambiarColor');
let boton3 = document.getElementById('btnCambiarAlineacion');
let boton4 = document.getElementById('btnCrearTexto');
let boton5 = document.getElementById('btnBorrarTexto');

//Agregar un evento a los botones 

    boton1.addEventListener('click', function() {
        titulo.textContent = 'Hola Mundo con Javascript';
    });

    boton2.addEventListener('click', function() {
        titulo.style.color = 'red';
    });

    boton3.addEventListener('click', function() {
        titulo.style.textAlign = 'center';
    });

    boton4.addEventListener('click', function() {
        let nuevoTexto = prompt('Ingrese el texto a crear');
        let parrafo = document.createElement('p');
        parrafo.textContent = nuevoTexto;
        document.body.appendChild(parrafo);
    });

    boton5.addEventListener('click', function() {
        let ultimoParrafo = document.body.lastChild;
        if (ultimoParrafo && ultimoParrafo.nodeType === 1) {
            document.body.removeChild(ultimoParrafo);
        }
    });