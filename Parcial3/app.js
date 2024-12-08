document.getElementById('btonDatos').addEventListener('click', obtenerDatos);

function obtenerDatos () {
    const url ='https://jsonplaceholder.typicode.com/users';
    
fetch(url)
.then(respuesta => {
      // Verificar si la respuesta es exitosa
      if (!respuesta.ok) {
        throw new Error('Error en la solicitud');
      }
      return respuesta.json(); // Convertir la respuesta a JSON
    })

.then (data =>{
    console.log(data); 

    // Crear una lista desordenada para mostrar los usuarios
    const ul = document.createElement('ul');

  // Iterar sobre los usuarios y crear un elemento <li> para cada uno
  data.forEach(user => {
    const li = document.createElement('li');
    li.textContent = user.name // Muestra el nombre del usuario
    ul.appendChild(li);
  });

  // Insertar la lista en el DOM dentro de un contenedor con id 'contenedor'
  const contenedor = document.getElementById('contenedor')
  contenedor.innerHTML = ''; // Limpiar contenido previo antes de insertar
  contenedor.appendChild(ul);
})
.catch(error => {
    console.error('Error al obtener los datos: ', error);
        });
    }