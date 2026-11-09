
//Creacion de la infuncion de importar productos que recibe como parametro un JSON
function importarProductos(textoJSON){
    //Declaracion de variables
    const productos = [];
    const errores = [];
    const idsUsados = [];
    let producto;
    let posicion = 1;

    //Probamos a dividir el texto JSON
    try {
       producto = JSON.parse(textoJSON);

       //Comprobamos que el elemento raiz es un array
        if(!Array.isArray(producto)){
            errores.push('El elemento raiz no es un array');
        } else{
            producto.forEach(elemento => {
                //Comprobamos que el id se un numeor entero y unico
                if (Number.isInteger(elemento.id) && !idsUsados.includes(elemento.id)){
                    //Añadimos el id a un array de numeros para evitar numeros duplicados
                    idsUsados.push(elemento.id);

                    //Comprobamos que el nombre sea un string o no este vacio
                    if (typeof elemento.nombre == "string" && elemento.nombre.trim() !== ""){

                        //Comporbamos que el precio sea un numero y que sea mayor a 0
                        if(typeof elemento.precio == "number" && elemento.precio >0){

                            //Comprobamos que el stock sea entero y sea >=0
                            if(Number.isInteger(elemento.stock) && elemento.stock >= 0){
                                //Si cumple todas las condiciones lo guardamos como un producto nuevo dentro del arrat productos
                                productos.push(new Producto (elemento.id, elemento.nombre, elemento.precio, elemento.stock))
                            }else{
                                //Si no cumple la condicion del stock lo guardamos en errores con la posicion de el elemento
                                errores.push(`El stock del elemento  ${posicion} tien que ser un numero entero y mayor a 0`);
                            }
                        }else{
                            //Si no cumple la condicion del precio lo guardamos en errores con la posicion de el elemento

                            errores.push(`El precio del elemento ${posicion} tien que ser un numero mayor a 0`);
                        }
                    }else{
                        //Si no cumple la condicion del nombre lo guardamos en errores con la posicion de el elemento

                        errores.push(`El nombre ${posicion} no puede estar vacio y tiene que ser un string`);
                    }
                }else{
                    //Si no cumple la condicion del eid lo guardamos en errores con la posicion de el elemento

                    errores.push(`El id del elemento ${posicion} tien que ser un numero entero y no repetido`);
                }
                //aumentamos la posicion para los mensajes de error
                posicion +=1;
            });
        }
    } catch (error) {
        //infromamos al usuario que el JSOn no es una array
        errores.push('Error en el JSON principal');
    }
    //devolvemos los arrays de productos como errores
    return {productos, errores};
    
    
}
//la clase producto que se utiliza para crear y guardar porductos nuevos
class Producto{
    //El constructor de la calse con los atributos que pide el ejercicio
    constructor(id,nombre,precio,stock){
        this.id=id;
        this.nombre=nombre;
        this.precio=precio;
        this.stock=stock;

    }
}
//creos una variable para hacer las pruebas
const JSONPrueba = '[{"id":1,"nombre":"Auriculares", "precio": 9.99,"stock":10},{"id":1,"nombre":"Auriculares", "precio": 9.99,"stock":10}]';
//Enseñamos por consola la funcion de importar producto
console.log(importarProductos(JSONPrueba))