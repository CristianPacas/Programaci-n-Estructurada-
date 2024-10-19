//Requerir la libreria prompt-sync
const prompt = require ('prompt-sync')();

// Definir el objeto que contiene el precio, el descuento y un método para calcular el precio neto
let producto = {
    precio: 0,   //Propiedad para el precio
    descuento: 0, //Propiedad para el descuento

    // Método para calcular el precio neto con el descuento aplicado
  neto: function () {
    return this.precio - (this.precio * (this.descuento/100));
  
}
};

// Solicitar al usuario que ingrese los valores de el precio y el descuento del producto

producto.precio = parseFloat(prompt("Ingresa el precio del producto: "));
producto.descuento = parseFloat(prompt("Ingresa el porcentaje de descuento "));

//Calcular el precio neto y mostrar el resultado
let precioConDescuento = producto.neto();
console.log("El precio neto con descuento es: $" + precioConDescuento.toFixed(2));


