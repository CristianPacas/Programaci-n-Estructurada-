//CRISTIAN DANIEL PACAS GUEVARA U20240388
//"Cálculo de presupuesto familiar"
let GastosMensuales = [
    { Categoria : "Alimentos", monto : 400},
    { Categoria : "Vivienda", monto: 500},
    { Categoria : "Transporte", monto: 200},
    { Categoria : "Entretenimiento", monto : 300}
];
let IngresoMensual = 1825;
let TotaldeGastos = 0;
for (let i= 0; i <GastosMensuales.length; i ++){TotaldeGastos+=GastosMensuales[i].monto;
}

if (TotaldeGastos < IngresoMensual) {
    let ahorro = IngresoMensual - TotaldeGastos;
    console.log("El presupuesto está equilibrado y tienes un ahorro de: $" + ahorro);
}
else if (TotaldeGastos === IngresoMensual) {
    console.log("El presupuesto está equilibrado y no tienes ahorros.");
} else {
    let deficit = TotaldeGastos - IngresoMensual;
    console.log("El presupuesto está excedido. Te faltan $" + deficit + " para cubrir los gastos.");
}