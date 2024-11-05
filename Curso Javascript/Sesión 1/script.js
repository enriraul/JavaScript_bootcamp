/*
let variable;
console.log(typeof variable);

let nombre = "Nombre a";
console.log(typeof nombre);

let edad = 32.2;
console.log(typeof edad);

var trabaja = true;
console.log(typeof trabaja);

let nula = null;
console.log(typeof nula);

const mascota = "perro";
console.log(mascota);

let peso;
peso = prompt("indicanos tu peso: ");

console.log(peso);


let num = 3;

console.log(num === 3);
console.log(num === "3");

let num1 = 3;

console.log(num1 !== 3);
console.log(num1 !== "3");

console.log(23>4);

console.log(4>23);



let Equipo1;
let Equipo2;

Equipo1 = prompt("Cuantos goles metio el equipo 1");
Equipo2 = prompt("Cuantos goles metio el quipo 2");

if (Equipo1 > Equipo2)
{
    console.log("Equipo 1 gano el partido");
}

if (Equipo2 > Equipo1)
{
    console.log("Equipo 2 gano el partido");
}

if (Equipo1 == Equipo2){
    console.log("El partido termino en empate");
}

let pass="root";
pass_user = prompt("Ingresa la contrasena");

if (pass_user == pass){
    console.log("La contrasena es correcta")
}
if (pass_user != pass){
    console.log("La contrasena no  es correcta")
}

suma 
v1 + v2

resta 
v1 - v2

division

v1/v2

multiplicacion

v1*v2



let DanielPeso;
let DanielEstatura;
let PedroPeso;
let PedroEstatura;

// Formula imc = peso/estatura**2

DanielPeso = prompt("Ingresa el peso de Daniel");
DanielEstatura = prompt("Ingresa la estatura de Daniel");

PedroPeso  = prompt("Ingresa el peso de Pedro");
PedroEstatura = prompt("Ingresa la estatura de Pedro");

let DanielImc = DanielPeso/ (DanielEstatura*DanielEstatura);
let PedroImc = PedroPeso/ (PedroEstatura**2);


console.log("Daniel ", DanielPeso," ", DanielEstatura," ", DanielImc);
console.log("Pedro ", PedroPeso," ", PedroEstatura," ", PedroImc );

// Quien tiene mayor indice masa
//Quien es el mas alto
//Quien es el mas pesado

//Comparacion Pesos
if (DanielPeso > PedroPeso){
    console.log("Daniel tiene mayor peso que Pedro");
}
if (PedroPeso > DanielPeso)
{
    console.log("Pedro tiene mayor peso que Daniel");
}
if (DanielPeso == PedroPeso){
    console.log("Ambos tienen el mismo peso")
}
//Comparacion Estaturas
if (DanielEstatura > PedroEstatura){
    console.log("Daniel tiene mayor peso que Pedro");
}
if (PedroEstatura > DanielEstatura)
{
    console.log("Pedro tiene mayor peso que Daniel");
}
if (DanielEstatura == PedroEstatura){
    console.log("Ambos tienen el mismo peso")
}

//Comparacion imc

if (DanielImc > PedroImc){
    console.log("Daniel tiene mayor peso que Pedro");
}
if (PedroImc > DanielImc)
{
    console.log("Pedro tiene mayor peso que Daniel");
}
if (DanielImc == PedroImc){
    console.log("Ambos tienen el mismo peso")
}

*/

let numero1;
let numero2;

numero1 = prompt("Dame el numero 1");
numero2 = prompt("Dame el numero 2");


if( numero2%numero1 == 0){
    console.log("el numero 1: ",numero1," es multiplo del numero 2: ", numero2);
}
else{
    console.log("el numero 1: ",numero1," no es multiplo del numero 2: ", numero2);
}