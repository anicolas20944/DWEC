//Creamos la clase cunentaBancaria
class cuentaBancaria{
    //Cremaos el contructor con sus parametros
    constructor(titular, saldoInicial){
        //comprobamos que el titular no este vacio y que sea un string
        if(typeof titular === "string" && titular.trim() !== ""){
            //si cumple las condiciones lo guardamos
            this.titular = titular;
        }else{
            // si no habisamos al ausuario por consola
            console.log(`El titular ${titular} no es valido`);
        }
        //Comporbamos que el saldo sea un numero y sea >= 0
        if (typeof saldoInicial === "number" && saldoInicial >= 0){
            //si lo cumpre guardamos el saldo inicial
            this.saldoInicial = saldoInicial;
        }else {
            // si no habisamos al ausuario por consola
            console.log('El slado incial tiene que ser un numero >= 0');
        }
    }
    //implementamos los metodos

    //metodo ingresar que recibe un saldo
    ingresar(saldo){
        //comprobamos que el saldo se aun numero y que sea mayor a 0
        if(typeof saldo === "number" && saldo > 0){
            // si cumple con los requisitos el saldo se le suma al saldo inical 
            this.saldoInicial += saldo;
            //enseñamos por consola que el ingrso se ha hecho
            console.log('Ingreso realizado con exito');
        }else{
            //Si no cumple con los requisitos avisamos al usuario
            console.log('No puedes añadir dinero a una cuenta si no es un numero mayor a 0');
        }
    }
    //Metodo retirado que recibe un import
    retirar(importe){
        //comprobamos que el importe sea un numero >0
        if(typeof importe == "number"  && importe > 0){
            //comporbamos que el saldo inical sea > que el importe
            if(this.saldoInicial > importe){
                //si cumple le quitamos el importe al saldo de la cuenta
                this.saldoInicial -= importe;
                //avisamos de que la retirada se ha hecho con exito
                console.log('Retirada realizada con exito');
            }else{
                //si el importe> saldo avisamos al usuario
                console.log('No se pueda hacer al retirada debido a falta de fondos.');
            }
        } else{
            //si no cumple la condicion avisamos al usuario 
            console.log(`No puedes hacer una retirada debido a que no se ha introducido un numero positivo`)
        }
    }
    //Metodo transferirA que recibe una cuneta y un import
    transferirA(otraCuenta, importe){
        //comprobamos si se ha podido retirar el dinero de la cuenta
        if(this.retirar(importe)){
            //si se ha podido se le da el dinero a la cuenta nueva
            otraCuenta.ingresar(importe);
            //se avisa por consola de que la transferencia se ha realizado
            return console.log('Tranferenccia realizada con exito');
        }

    }
    //metodo getter resumen que devuelve el titular y saldo de la cuenta
    get resumen(){
        return `${this.titular} - ${this.saldoInicial.toFixed(2)}`
    }
    //metodo to jSON
    toJSON(){
        //devolvemos los datos serializados
        return {
            titular: this.titular,
            saldoInicial: this.saldoInicial
        }
    }
    //metodo statico desdeObjeto
    static desdeObjeto(dato){
        //devuelve un nuevo objeto
        return new cuentaBancaria(dato.titular, dato.saldoInicial);

    }
}
//Creacion de las 3 cuentas bancarias
const cuentaBancaria1 = new cuentaBancaria("Aram", 1000);
const cuentaBancaria2 = new cuentaBancaria("Juan", 500);
const cuentaBancaria3 = new cuentaBancaria("Anna", 2000);
//Operaciones con las diferentes cuentas
cuentaBancaria1.retirar(100);
cuentaBancaria2.ingresar(200);
cuentaBancaria3.transferirA(cuentaBancaria1, 200);

//juntamos todas las cuentas en un unico array
const cuentas = [cuentaBancaria1,cuentaBancaria2,cuentaBancaria3];
//creamos una variable para saber el saldo total de las cuentas utilizando un reduce
const saldoTotal = cuentas.reduce((acumulador, cuenta) =>{ 
    //devolvemos la suma de todo los saldos iniciales
    return acumulador += cuenta.saldoInicial;
},0);
//enseñamos el saldo total por pantalla
console.log(`Saldo total de todas las cuentas: ${saldoTotal.toFixed(2)}€`);

//Serializamos las cuentas
const cuentaSerializada1 = cuentaBancaria1.toJSON();
const cuentaSerializada2 = cuentaBancaria2.toJSON();
const cuentaSerializada3 = cuentaBancaria3.toJSON();
const cuentasSerializadas = [cuentaSerializada1,cuentaSerializada2, cuentaSerializada3];

//las recostruimos desde la misma cuenta
const cuentasNuevas = cuentasSerializadas.map((c) =>{
    return cuentaBancaria.desdeObjeto(c);
});
//la enseñamos por consola
console.log(cuentasNuevas);