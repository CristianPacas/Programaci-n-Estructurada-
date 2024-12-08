//Sintaxis de fetch
/*fetch('http://api.example.com/data')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error: ' + error))*/

/*Get Traer datos (Ejemplo)
Post: Enviar datos
Put: Actualiza datos 
Delete: Borrar datos*/

/*Aplicación API Publica: OpenWeatherMap
https://home.openweathermap.org/api_keys*/






document.getElementById('btnFrase').addEventListener('click', obtenerFrase);
function obtenerFrase () {
    const url ='https://api.allorigins.win/raw?url=https://zenquotes.io/api/random';
    fetch(url)
//Transformar los datos en Json
.then(respuesta => respuesta.json())
//Aquí trabajamos con la información que nos envía la API
.then (data =>{

    console.log(data); // Inspeccionar la estructura de los datos
    //Mostrar la frase y el autor en el HTML
    document.getElementById('frase').textContent = `Frase: ${data[0].q}`;
    document.getElementById('autor').textContent = `Autor: ${data[0].a}`;
})
.catch(error => {
    console.error('Error al obtener los datos: ', error);
            document.getElementById('frase').textContent = 'Hubo un error al obtener la frase.';
            document.getElementById('autor').textContent = '';
        });
//Si no podemos conectarnos a la API, mostramos un mensaje de error
}

 