// 3.5.1
const temperaturas  = [10,5,7,2,-2];

const temperaturaNegativa = temperaturas.find((temperatura) => temperatura<0)
if (temperaturaNegativa !== undefined){
    console.log(`Temperatura negativa: ${temperaturaNegativa}`);
}else{
    console.log('No hay temperatura negativa');
}
console.log("");

// 3.5.2
const numeros = [1,2,3,4,20];

const multiplo5 = numeros.some((numero) => numero % 5==0);
console.log(`${numeros} coniene multiplos de 5? ${multiplo5}`);
console.log("");
// 3.5.3
const contraseñas = ['12345678','12','1'];

const contraseñas8Caracteres = contraseñas.every(contraseña => contraseña.length >=8);
console.log(`${contraseñas} tienen mas de 8 caracteres? ${contraseñas8Caracteres}`);
console.log("");
// 3.5.4
const gastos = [1,2,3,4,5,6,7,8,9,10];

const total = gastos.reduce((acumulador, gasto) => acumulador+gasto);
const media = total/gastos.length;

console.log(`${gastos} tiene un total de ${total} € y hace un a media de ${media}€`)
console.log("");
// 3.5.5

const numeros2= [1,3,2,4];

const numerosOrdenados = numeros2.slice();
numerosOrdenados.sort((a,b) => a-b);
console.log(`${numeros2} estan desordenados, asi ${numerosOrdenados} estan ordenados`);
console.log("");
// 3.5.6
const palabras = ["Aram",""];
const vocales = "aeiou";

const empiezaPorVocal = palabras.find((palabra)=>palabra.toLowerCase().startsWith("a","e","i","o","u"));
console.log(`a`,empiezaPorVocal);

const todasLlenas = palabras.find((palabra)=> palabra.length <=0);
if(todasLlenas == undefined){
    console.log('En todas hay contenido');
} else{
    console.log('Hay alguna vacia')
}
const numeroCaracteres = palabras.reduce((acumulador, caracters) => acumulador + caracters.length, 0);
console.log(numeroCaracteres)