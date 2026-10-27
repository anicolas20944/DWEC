//3.6.1
//Cremos un array de persona con el nombre y primer appelido
const persona = ['Aram', 'Nicolas'];
//lo desestructuramos y le añadimos un segundo apellido con un valor por defecto
const [nombre, apellido1, apellido2='Pastor'] = persona;
//enseñaom por pantalla el resultado
console.log(`Nombre : ${nombre}
Primer apellido: ${apellido1}
Segundo apellido: ${apellido2}`);

console.log("");

//3.6.2
//cresmos un array de elementos
const elementos = ['H', 'O', 'C', 'Mn', 'He'];
//dividimos el primer elemento del resto del array
const [primero, ...resto]=elementos;
//Enseñamos por pantalla el resultado
console.log(`Del siguiente array: ${elementos}.
${primero} es el primer elemento.
${resto} son el resto de elementos.`);

console.log("");

//3.6.3
//creamos 2 arrays con difereentes elemntos
const coloresCalidos = ['Rojo', 'Amarillo'];
const coloresFrios = ['Negro', 'Azul'];
//juntamos ambos arrays en uno solo y le añadimos 2 elementos
const colores =['Naranja',...coloresCalidos, ...coloresFrios, 'Purpura'];
//enseñamos el resultado del array
console.log(colores);

console.log("");

//3.6.4
//Creamos el objeto libro con lo que nos pide el ejercicio
const libro = {
    titulo: "Juego de tronos",
    autor: "George R.R Martin",
    paginas: 239,
    //Creamos un metodo que nos hace un resumen el libro
    resumen(){
        console.log(`${this.titulo} fue escrito por ${this.autor} y tiene un total de ${this.paginas} paginas.`);
    }

};
//lamamos a la funcion de libro y veremos el resultado por consola
libro.resumen();

console.log("");
//3.6.5
//creamos un objeto contador con un valor inicial
const contador ={
    valor: 100,
    //creamos los metodos que incrementes ese valor y lo disinuyan una cantidad
    incrementar(valor){
        this.valor +=valor

    },
    decrementar(valor){
        this.valor -=valor
    },
    //Enseñamos ese valor por consola
    mostrar(){
        console.log(`El contador tiene un valor de ${contador.valor}`);
    }
};
//llamamos a los metodos de contador para comprobar que funcionan
contador.mostrar();
contador.incrementar(10);
contador.mostrar();
contador.decrementar(20);
contador.mostrar();

console.log("");

//3.6.6
//creamos un producto con nombre y precio
const producto = {
    nombre: 'Auriculares inalambricos',
    precio: 20
};
//creamos una copia del producto usando spread cambiandole el precio a la copia
const copiaProducto = {
    ...producto,
    precio: 15
};
//enseñamos por consola ambos productos
console.log(`Producto original: ${producto.nombre} con un valor de ${producto.precio}€`);
console.log(`Producto copia: ${copiaProducto.nombre} con un valor de ${copiaProducto.precio}€`);