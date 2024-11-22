/*
for(incializacion; condición; incremendo o decremento){
    procedimientos;
}

Analogia while-for
let variable = 0;

while(variable<limite){

    variable ++;
}




for(let i=0;i<=10;i++){
    console.log("Iteracion: ",i);
}


let numero_factorial;
let factorial =1;

numero_factorial = prompt("Indicame el numero para calcular su factorial");

for(let i=1; i<=numero_factorial;i++){
    console.log(factorial, i);
    factorial = factorial*i;
    
}

console.log("El numero factorial es ",factorial);


let numero_factorial;
let factorial =1;

numero_factorial = prompt("Indicame el numero para calcular su factorial");

for(let i = numero_factorial; i>0 ;i--){
    console.log(i, factorial);
    factorial = factorial*i;
}

console.log("El numero factorial es ",factorial);


let numero_factorial;
let factorial =1;

numero_factorial = prompt("Indicame el numero para calcular su factorial");

for(let i = 0; i<numero_factorial ;i++){
    console.log((numero_factorial - i), factorial);
    factorial = factorial*(numero_factorial - i);
}

console.log("El numero factorial es ",factorial);

*/

/*
max
min
elementos
si es la primera iteración no haremos nada
si el numero anterior es mayor o menor que el generado
*/ 
/*
function generarNumeroAleatorio(min, max){
    return Math.floor(Math.random()*(max -min +1) + min);
}

let max, min;
let n_valoresRandom, valor_anterior;
let n_random;

max = prompt("Dame el valor maximo");
min = prompt("Dame el valor minimo");
n_valoresRandom = prompt("Cuantos numeros voy a generar");

for(let i=0;i<n_valoresRandom;i++){
    if(i != 0){
        n_random = generarNumeroAleatorio(min,max);
        if (valor_anterior < n_random){
            console.log("El numero"+valor_anterior+ "es menor que "+n_random);
            valor_anterior = n_random;
        }
        else{
            console.log("El numero"+valor_anterior+ "es mayor que "+n_random);
        }
    }
    else{
        valor_anterior = generarNumeroAleatorio(min,max);
    }
}


for(i=1; i<=100; i++){
    if ( ((i%3!=0)&&(i%5!=0)&&(i%2!=0)) ||(i==2) || (i==3) || (i==5)){
        console.log(i + "es primo");
    }
    else{
        console.log(i+" no es primo");
    }
}



let minUsuario;
let maxUsuario;

minUsuario = Number(prompt("Ingresa el rango minimo a evaluar"));
maxUsuario = Number(prompt("Ingresa el rango maximo a evaluar"));

for (let i = minUsuario; i < maxUsuario; i++){

    if ( ((i%3!=0)&&(i%5!=0)&&(i%2!=0)) ||(i==2) || (i==3) || (i==5)){
        console.log(i + " es primo");
    }

}
    continue
    break


for (let i=0; i<10;i++){
    if(i==1){
        continue;
    }
    else if (i==8){
        break;
    }
    console.log(i);

}



for(let i=0;i <5; i++){
    //i =0,1
    for(let j=0; j<5;j++){
        //j = 0,1,2,3,4,5
        console.log("i:",i,", j:",j);
        if(j ==i){
            break;
        }
    }
}



outlvl:
for (let i=0; i<10; i++){
    if(i==5){

        continue outlvl;
    }
    console.log(i);
}


palabraclave:
for (let i =0 ; i< 10; i++){
    console.log("Ciclo exterior iteracion: ", i);
    for (let j =0; j<5; j++){
        console.log("Ciclo interior iteracion: ", j);
        if(j==1){
            console.log("j==1 ignoramos el resto del ciclo");
            continue palabraclave;
        }
    }
}

function Saludo(nombre){
    console.log("Hola", nombre);
}

let nombreusuario;
nombreusuario = prompt("Ingresa tu nombre: ");

Saludo(nombreusuario);


function Suma(numero1, numero2){
    return numero1 + numero2;
}

let n_1 = 10;
let n_2 = 20;

let suma = Suma(10, 20);
console.log(suma);


function Primo (i){
    return (((i%3!=0)&&(i%5!=0)&&(i%2!=0)) ||(i==2) || (i==3) || (i==5));
}
let numero_p = 53;
console.log(Primo(numero_p));


Dos funciones

Función 1: Reciben 2 valores, y regresamos la multiplicación de esos dos valores. 

Función 2: Verifica si ese numero es multiplo 3. 

Consola:
los dos valores
multiplicación
Si es multiplo o no es multiplo 


function multiplicar (v1, v2)  v1*v2
function multiplo (v1) si v1 multiplo 3 o no. 

function Suma(numero1, numero2){
    return numero1 + numero2;
}
*/

function Multiplicar(v1, v2){
    return v1 * v2;
}

function Multiplo3(v1){
    //Opcion 1
    if (vi%3 == 0){
        return true;
    }
    else{
        return false;
    }
    //Opciones 2
    return v1%3 == 0;

    //Opcion 3
    if (vi%3 == 0){
        console.log("Es multiplo de 3");
    }
    else{
        console.log("No es multiplo de 3");
    }
}