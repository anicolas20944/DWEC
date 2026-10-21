//3.2.1
//Creamos la funcion que hace el callback
function ejecutarOperacion(a, b, callback){
    return callback(a,b)
}
//creamos las funciones que nos pide el ejercicio
const sumar = (a,b) => a + b;
const restar = (a,b) => a - b;
const maximo = (a,b) => Math.max(a,b);
//enseñamos los resultados por consola
// console.log(ejecutarOperacion(3,2,sumar));
// console.log(ejecutarOperacion(10, 2, restar));
// console.log(ejecutarOperacion(1,9,maximo));


//3.2.2
const temperaturas = [45, 19, 33, 28, 4]

for (let i = 0; i <temperaturas.length; i++){
    console.log(temperaturas[i])
}
console.log('');
for (const temperatura of temperaturas){
    console.log(temperatura)
}

//3.2.3

const numeros =[45, 19, 33, 28, 4]
let max =0;
let min =999999;
let suma =0;
for (let i = 0; i <numeros.length; i++){
    if (numeros[i]>max){
        max == numeros[i] 
    } 
    if (numeros[i]<min){
        min == numeros[i] 
    } 
    suma += numeros[i]
}
console.log(`Suma: ${suma}`);
console.log(`Maximo: ${max}`);
console.log(`Minimo: ${min}`);
console.log(`media: ${suma/numeros.length}`);

//3.2.4

function contarMayorQue(valores, limite){
    let contador=0;
    for (const valor of valores){
        if(valor > limite){
            contador+=1;
        }
    }
    return contador
}
const valores =[1,2,3,4,5,6,7,8,9,10];
console.log(contarMayorQue(valores,5))

//3.2.5

function transformarArray(valores, callback){
    for (const valor of valores){
        return callback(valor)
    }
}
let multiplicar= (a) => a*2;
console.log(transformarArray(valores,multiplicar))
