/*let n = 1;

while(n<=10){
    console.log("valor de n:",n);
    n++;
}

let n = 1;

while(n<=10){
    if((n%2)==0){ 
        console.log("valor de n :",n,"es par");
    }
    else{
        console.log("valor de n :",n,"es impar");
    }
    n++;
}

let n = 1;

while(n<=10){
    console.log("valor de n:",n*2);
    n++;
}

let n = 1;
let par = 0;
let impar = 0;
let total = 0;

//Correr del 1 al 30, no debe ser multiplo 2, 3, 5

while(n<=10){
    total = total + n;
    if((n%2)==0){ 
        par = par + n;  //2 + 4 = 6
    }
    else{
       impar = impar + n; //1 + 3 = 4
    }
    n++;
}
console.log("La suma total de los numeros pares es: ",par);
console.log("La suma total de los numeros impares es: ", impar);
console.log("La suma total de los numeros es: ", total);


let n = 10;

while (n>0){
    console.log("El valor de n es: ",n);
    n = n - 1; // n--;
}

let n_i = 0;
let limite = 10;

while (n_i<10){
    console.log("El valor de n es: ",(limite - n_i));
    n_i = n_i + 1; // n_i ++;
}


    Correr del 1 al 30, no debe ser multiplo 2, 3, 5




n = 1;

while( n <= 30){

    if(n%2 != 0){
        if (n%3 != 0){
            if (n%5 != 0){
                console.log("n: ",n);
            }

        }
    }

    n++;
}

n = 1;

while(n<=30){
    
    if( (n%2 != 0) && (n%3 != 0) && (n%5 != 0)){
        console.log("n: ", n);
    } 
    n++;
}



let n_usuario = prompt("Cuantos numeros vamos a sumar");
let numeros_u = Number(n_usuario);
let c = 0;
let n_iUsuario;


while(numeros_u != 0){
    n_iUsuario = Number(prompt("Dame un numero a sumar: "));
    c = c + n_iUsuario; //c = 0 + 6
    numeros_u--;
}

console.log("La suma total de los numeros solicitados es: ",c);



let palabra_magica = "gato";
let palabra_usuario = prompt("Cual es la palabra magica: ");

while(palabra_magica != palabra_usuario){
    console.log("Esa no es la palabra magica");
    palabra_usuario = prompt("Cual es la palabra magica: ");
}

console.log("Esa es la palabra magica");


let palabra_magica = "gato";
let palabra_usuario = prompt("Cual es la palabra magica: ");
let intentos = 3;

while(palabra_magica != palabra_usuario){

    if (intentos > 1){    
        console.log("Esa no es la palabra magica");
        palabra_usuario = prompt("Cual es la palabra magica: ");
        intentos --;
    }
    else{
        break;
    }
    
}

if(palabra_magica == palabra_usuario){
    console.log("Esa es la palabra magica");
}
else{
    console.log("Excedio el limite de intentos");
}


function generarNumeroAleatorio(min, max){
    return Math.floor(Math.random()*(max -min +1) + min);
}

let random = generarNumeroAleatorio(1,100);
console.log(random);
let intentos = 1;
let numero_usuario = prompt("Adivina el numero aleatorio");


while(numero_usuario != random){
    
    
    if(numero_usuario > random){
        console.log("El numero dado es mayor al numero aleatorio");
    }
    else if(numero_usuario< random){
        console.log("El numero dado es menor al numero aleatorio");
    }
 
    if(numero_usuario == 'exit'){
        break;
    }
    intentos ++;
    numero_usuario = prompt("Adivina el numero aleatorio");
}

if(numero_usuario == random){
    console.log("Encontraste el numero aleatorio");
    console.log("Realizaste: ", intentos, " intento(s)")
}
else{
    console.log("Mala suerte");
}





function generarNumeroAleatorio(min, max){
    return Math.floor(Math.random()*(max -min +1) + min);
}

let random = generarNumeroAleatorio(1,100);
console.log(random);

let numero;

do {
    numero = prompt("Adivina el numero");
    console.log(numero);
    if (numero != random){
        console.log("Numero equivocado");
        console.log("Trata de nuevo");
        
    }
    else{
        console.log("El numero es correcto");
    }
}while(numero != random);



let router_user = "admin";
let router_password = "root";
let user;
let password;

do{
    user = prompt("Ingresa el usuario: ");
    password = prompt("Ingresa la contraseña");

    if ((router_password != password)||(router_user != user)){
        console.log("Usuario o contraseña son incorrectos");
    }

}while((router_password != password)||(router_user != user));
alert("Ingreso exitoso");

==  ===

*/



function eleccionComputadora() { 
    const opciones = ["piedra", "papel", "tijera"]; 
    const indice = Math.floor(Math.random() *opciones.length); 
    return opciones[indice]; 
}

let opciones = eleccionComputadora();

do{
    eleccionUsuario = prompt();
}while(eleccionUsuario = "exit");