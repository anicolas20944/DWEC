//Declaracion de variables
let horaEntrada = '22:30';
let horaSalida = '01:15';
let tipoDescuento = 2;


//Enseñamos la informacion por consola si la hora es valida
if (esHoraValida(horaEntrada) === true && esHoraValida(horaSalida) === true){
    console.log('RESUMEN DEL ESTACIONAMIENTO');
    console.log(`Entrada: ${horaEntrada}`);
    console.log(`Salida: ${horaSalida}`);

    let duracion= calcularDuracion(horaEntrada, horaSalida);
    console.log('Duracion:',formatearDuracion(duracion));

    let importeBase= calcularImporteBase(duracion).toFixed(2)
    console.log(`Importe base: ${importeBase} €`);
    
    if(tipoDescuento == 2){
        console.log(`Descuento por vehiculo electrico ${descuentoElectrico(importeBase).toFixed(2)} €`);
    } else if (tipoDescuento == 3){
        console.log(`Descuento por ser residente ${descuentoResidente(importeBase).toFixed(2)} €`);
    }else{
        console.log('No hay descuento')
    }
    console.log(`Total: ${calcularImporteFinal(importeBase, tipoDescuento)} €`)

}else{
    console.log('introduzca una hora de entrada y salida valida')
}

//Funciones de la hora

//primero comprobamos que hora sea valida
function esHoraValida(hora) {
    //Anters de pasar las horas a numeros comprobamos que sea una hora acceptablt
    if(hora.length === 5 && hora[2] === ':'){
        //separamos el texto y lo cambiamos a numeros
        let horaSeparada = hora.split(':');
        let horas = Number(horaSeparada[0]);
        let minutos = Number(horaSeparada[1]);
        //luego miramos si las horas y minutos estan dentro del rango que le pertoca
        if(horas>=0 && horas<=23){
            if(minutos>=0 && minutos<=59){
                return true
            } else{
                return false
            }
        }else{
            return false
        }
    } else{
        return false

    }
}
//despues de comprobar pasmos todo a minutos
function convertirAMinutos(hora) {
    //volvemos a separar 
    let horaSeparada = hora.split(':');
    let horas = Number(horaSeparada[0]);
    let minutos = Number(horaSeparada[1]);
    //hacemos la conversion
    let horasAMinutos = horas *60;
    return horasAMinutos+minutos;
}
//ahora calculamos la duracions
function calcularDuracion(entrada, salida) {
    
    //separamos las fechas de entrada y salida en hora y minutos
    let entradaSeparada = entrada.split(':');
    let salidaSeparada = salida.split(':')
    //Las pasmos a numeros
    let horaEntrada = Number(entradaSeparada[0]);
    let minutoEntrada = Number(entradaSeparada[1]);

    let horaSalida = Number(salidaSeparada[0]);
    let minutoSalida = Number(salidaSeparada[1]);
    
    let duracionHoras;
    let duracionMinutos;
    //aqui hacemos el tema de que es posible que entre un dia y salga otro y teniendo eso en cuenta devolvemos la duracion
    if(minutoEntrada > minutoSalida){
        duracionMinutos = (minutoSalida+60) - minutoEntrada;
        horaSalida -=1;
    } else{
        duracionMinutos = minutoSalida - minutoEntrada;
    }
    if(horaEntrada> horaSalida){
        duracionHoras =(horaSalida+24) - horaEntrada;
    }else {
        duracionHoras = horaSalida - horaEntrada;
    }
    return (duracionHoras*60)+duracionMinutos
}
//formatemaos la fecha para que devuelva la fecha en horas y minutos
function formatearDuracion(minutos) {
    let hora = Math.floor(minutos / 60);
    let minuto = minutos % 60;
    return `${hora} hora y ${minuto} minutos`
}

//Funciones para el calculo del precio

//Primero calculamos el precio utilizanod los minutos
function calcularImporteBase(minutos) {
    //dependiendo del ranog de tiempo se le suma al contador lo que costaria estar estacionado 1 minuto
    let contador = 0;
    
    for (let i = 0; i <= minutos; i++){
        if(i <= 30){
            contador +=0;
        }else if(i > 30 && i <= 120) {
            contador += 0.03
        }else if (i > 120 && i<=300){
            contador += 0.02
        }
        else{
            contador += 0.01
        }
    }
    // si el precio pasa de 18 € se le pasa a 18
    if (contador<18){
        return contador
    }else {
        return 18
    }
    
}
// calculamos el importe final dependiendo de el descuento que se le aplica
function calcularImporteFinal(importeBase, aplicarDescuento) {
    if(aplicarDescuento == 3){
        return importeBase - descuentoResidente(importeBase)
    } else if (aplicarDescuento == 2){
        return importeBase - descuentoElectrico(importeBase)
    } else {
        return sinDescuento(importeBase)
    }
}

//calculamos el dinero que se le descuenta del importe base 
function sinDescuento(importeBase){
    return importeBase

}

function descuentoElectrico(importeBase){
    return importeBase / 100 *20
}

function descuentoResidente(importeBase){
    return importeBase /100 *30
}
