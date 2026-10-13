//Declaracion de variables
let numeroUsuario = 7;
let numeroPar;
let numeroPrimo;
let susDivisores;
let sumaDivisores;
let clasificacionNumero;

//Comprobacion de que el numero sea positivo
if(numeroUsuario>0){
    //Guardamos el resultado de las funciones en una variable
    numeroPar = esPar(numeroUsuario);
    numeroPrimo = esPrimo(numeroUsuario);
    susDivisores = divisoresPropios(numeroUsuario,numeroPrimo)
    sumaDivisores = sumaDivisoresPropios(numeroUsuario,numeroPrimo);
    clasificacionNumero = clasificarNumero(numeroUsuario,sumaDivisores);

    //Enseñamos por consola lo que nos pide el ejercicio 
    console.log(`ANALISIS DEL NUMERO ${numeroUsuario}.`);
    console.log(numeroPar? 'Es par.' : 'No es par.');
    console.log(numeroPrimo ? 'Es primo.' : 'No es primo.');
    console.log(`Divisores propios:${susDivisores}`)
    console.log(`Suma de sus divisores: ${sumaDivisores}`);
    console.log(`El numero ${numeroUsuario} es ${clasificacionNumero}.`)

//Avisamos al usuario en caso de que el numero no sea positivo
} else{
    console.log('El numero tiene que ser positivo.')
}

//Funciones para hace lo que nos pide el ejercicio
function esPar(numero){
    //devolvemos true o false dependiendo de si el numero es par
    return numero %2 == 0
}

function esPrimo(numero){
    //Declaramos variables y hacemos un bucle para comporbar si es primo
    let divisores = 0;
    for(let i=1; i <= numero; i++){
        if (numero % i === 0){
            divisores+=1;
        }
    }
    //Si el numero tiene mas de 2 divisores consideramos que no es primo y devolvemos esa informacion al usuario
    if(divisores == 2){
        return true;
    } else{
        return false;
    }
}

function divisoresPropios(numero, primo){
    //declarmos una variable de texto vacia y hacemos un bucle
    let divisores='';
    for(let i=1; i < numero; i++){
        //Cada vez que el numero sea un divisor lo guardamos como texto en la variabel antes creada 
        if (numero % i === 0){
            divisores +=` ${i},`
           
        }
        
    }
    //Si el numero es primo lo tnemos en cuneta como divisor y devolvemos como toca

    if(primo == true){
        divisores +=` ${numero},` 
    }
    return divisores
}

function sumaDivisoresPropios(numero,primo){
    //declarmos una variable inicializada en 0 Y hacemos un bucle
    let sumaDivisores=0;
    for(let i=0; i < numero; i++){
        //cada vez que el numero sea un divisor lo sumamos
        if (numero % i === 0){
            sumaDivisores+=i;
        }
    }
    //Si el numero es primo lo añadimos a la suma
    if (primo == true){
        sumaDivisores+=numero;
    }
    return sumaDivisores
}

function clasificarNumero(numero,sumaDivisores){
    // utilizamos la funcion sumaDivisoresPropios para que devuelva un texto o otro
    if(sumaDivisores>numero){
        return 'abundante'
    }else if (sumaDivisores<numero){
        return 'deficiente'
    }else{
        return 'perfecto'
    }
}