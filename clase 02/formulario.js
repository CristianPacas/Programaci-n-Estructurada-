// Seleccionamos el formulario y el área de mensaje
const formulario = document.getElementById('formularioContacto');
const mensaje = document.getElementById('mensaje');

// Agregamos el evento 'submit' para capturar el envío del formulario
formulario.addEventListener('submit', function(event) {
 // Prevenir el envío del formulario si los campos no están completos
 event.preventDefault();
 // Obtenemos el valor de los campos
 const nombre = document.getElementById('nombre').value;
 const email = document.getElementById('email').value;
 // Verificamos si los campos están vacíos
 if (nombre === '' || email === '') {
 mensaje.style.color = 'red';
 mensaje.textContent = 'Por favor, completa todos los campos.';
 } else {
 mensaje.style.color = 'green';
 mensaje.textContent = `¡Gracias, ${nombre}! Tu mensaje fue enviado.`;
 }
});
// Agregamos el evento 'reset' para limpiar el mensaje
formulario.addEventListener('reset', function() {
 mensaje.textContent = ''; // Limpiamos el mensaje
});