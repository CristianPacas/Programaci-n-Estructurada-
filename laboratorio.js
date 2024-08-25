// Cristian Daniel Pacas Guevara, U20240388

// CONTROL DE INVENTARIO DE UNA TIENDA

//Declara las variables necesarias y asigna valores que representen la cantidad actual de cada producto.
let camisetas = 189;
let pantalones = 107;
let zapatos = 200

//Usa operadores aritméticos para calcular el total de productos en el inventario
let TotaldeProductos = camisetas + pantalones + zapatos;

//Imprime el total de los productos del inventario, usando console.log
console.log("Total de Productos en Inventario: " + TotaldeProductos);

//Ejecucion de estructura de control: if, else

if (camisetas<100){console.log ("Es Necesario reponer camisas");
}
if (pantalones<100){console.log("Es necesario reponer pantalones");
}
if (zapatos<100){console.log("Es necesario reponer zapatos");
}
else {console.log("No es necesario reponer ningún producto");
}
