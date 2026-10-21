//3.4.1
const nombres = ['Paco', 'lucia', 'Isaac', 'Sara'];

nombres.forEach((nombre, indice) => console.log(`${nombre} esta en la posicion ${indice}`));

// 3.4.2
const precios=[10,20,30,40];

const precioDescuento = precios.map(precio => (precio /1.15).toFixed(2));
console.log(precioDescuento);

//3.4.3
const palabras = ['Hola', 'que', 'Haces'];

const palabrasLargas = palabras.filter(palabra => palabra.length >=5);
console.log(palabrasLargas);

//3.4.4
const minutos = [30, 90, 120, 135];

const tiempo = minutos.map(minuto => `${Math.floor(minuto/60)} horas y ${minuto%60} minutos.`);
console.log(tiempo);


//3.4.5
const numeros = [-10, -9, -5, 4, 10, 0, 2];

const cuadradosPositivos = numeros
    .filter(numero => numero > 0)
    .map(numero => numero*numero);
console.log(cuadradosPositivos);
