/*if (sentencia){
    intrucciones
}
else{
    instrucciones
}


let boolean_v = true;

if (boolean_v == true)

if (boolean_v)



let boolean_v = false;

if (boolean_v == true){
    console.log('la variable es verdadera');
}
else{
    console.log('la variable es falsa');
}


let pelota;

pelota = prompt('dame un color de la pelota');

if (pelota == 'rojo'){
    console.log('Has ganado un premio');
}
else{
    console.log('Has perdido');
}


if (sentencia){
    instrucciones
}
else if (sentencia){
    instruccion
}
else{
    instrucciones
}


let MetodoDePago;

MetodoDePago = prompt('Indique metodo de pago: tarjeta/efectivo/transferencia');

if (MetodoDePago == 'efectivo'){
    console.log('procede a realizar el cobro de los insumos');
}
else if (MetodoDePago == 'tarjeta'){
    console.log('Procede a realizar el cobro');
}
else{
    console.log('por el momento no se acepta transferencia');
}

Si un alumno obtiene 

100 : A
90 : B
80: C
70: D
60: E
60> reprueba F
Algo que no es un numero, indicaremos que no se puede procesar. 


let nombre;
let promedio;

nombre = prompt('Indica tu nombre');
promedio = prompt('Indica tu promedio');

if (isNaN(promedio) == false){ 
    if (promedio < 60){
        console.log('El alumno esta reprobado: F');
    }
    else if (promedio < 70){
        console.log('El alumno ha aprobado: E');
    }
    else if(promedio < 80){
        console.log('El alumno ha aprobado: D');
    }
    else if (promedio < 90){
        console.log('El alumno ha aprobado: C');
    }
    else if (promedio < 100){
        console.log('El alumno ha aprobado: B');
    }
    else{
        console.log('El alumno ha aprobado: A');
    }
}
else{
    console.log('Ese no es un numero');
}


if (isNaN(promedio) == false){ 
    if (promedio < 100){
        console.log('El alumno esta aprobado: A');
    }
    else if (promedio < 90){
        console.log('El alumno ha aprobado: B');
    }
    else if(promedio < 80){
        console.log('El alumno ha aprobado: C');
    }
    else if (promedio < 70){
        console.log('El alumno ha aprobado: D');
    }
    else if (promedio < 60){
        console.log('El alumno ha aprobado: E');
    }
    else{
        console.log('El alumno ha reprobado: F');
    }
}
else{
    console.log('Ese no es un numero');
}
 
Revisar que el usuario tenga membresia
Si el método de pago es TC se realizara un descuento del %5
Si el método de pago es diferente a TC no se realizara un descuento a menos
que se hayan comprado 10 productos  3%


let membresia;
let MetodoDePago;
let TotalProductos;
let TotalDeCompra;
let Descuento;


membresia = prompt('Cuenta con membresia: si/no');

if (membresia == 'si'){

    MetodoDePago = prompt('Cual es el metodo de pago a efectuar: TD/TC/Efectivo');
    TotalProductos = prompt('Cuantos productos va a comprar');
    TotalDeCompra = prompt('Cuanto es el monto de tu compra');

    if (MetodoDePago =='TC'){
        Descuento = 0.05;
    }
    else{
        Descuento = 0.0;
        if (TotalProductos >=10 ){
            Descuento = 0.03;
        }
        
    }
    console.log('El usuario ha consumido un total de ', TotalProductos);
    console.log('El monto total es de ', TotalDeCompra);
    if (Descuento != 0.0){
        console.log('Por haber realizado tu pago con TC tienes un descuento es de ', Descuento);
    }
    else if (Descuento == 0.03){
        console.log('Por haber realizado una compra de mas de 10 productos tu descuento es de  ', Descuento);
    }

    console.log('El total ha pagar es de: ', TotalDeCompra*(1-Descuento));

}
else{
    console.log('Al no ser miembro, suscribete');
}

Una caja expendedora a la compra de un producto, te regresa el cambio
con la prioridad de utilizar en menor medida el efectivo de menor valor. 

200, 100, 50,20
10, 5, 1


// Datos del usuario
let CostoDelProducto, Efectivo;

//Datos de la maquina
let b200 = 200, b100 = 100, b50 = 50, b20=20;
let m10 = 10, m5= 5, m2 = 2; m1=1;
let c200 = 0, c100=0, c50=0, c20=0, c10=0, c5=0, c2 = 0 ,c1=0;


//Variables de operaciones
let DifCosto;
let aux;

CostoDelProducto = prompt('Cuanto cuesta el producto seleccionado: ');
Efectivo = prompt('Cuanto es el monto que ingresaras');

DifCosto = Efectivo - CostoDelProducto;

if (DifCosto >=0 ){

    if (DifCosto >b200){
        aux = DifCosto%b200;
        c200 = (DifCosto - aux)/(b200);
        DifCosto = DifCosto - (c200*b200);
        /*
        aux = 1301%200  = 101   100*6 + 101
        c200 = (1301 - 101)/(200) = (1200)/200 = 6
        DifCosto = 1301 - (6*200) = 1301 - 1200 = 101

        Caso 2: 
        Cambio 1562

        aux = 1562/200 = 162     200*7 + 162
        c200 = (1562 - 162)/200    1400/200 = 7
        Cambio = 1562 - (7*200) = 162

        */
    /*}
    if (DifCosto >b100){
        aux = DifCosto%b100;
        c100 = (DifCosto - aux)/(b100);
        DifCosto = DifCosto - (c100*b100);
    }
    if (DifCosto >b50){
        aux = DifCosto%b50;
        c50 = (DifCosto - aux)/(b50);
        DifCosto = DifCosto - (c50*b50);
    }
    if (DifCosto >b20){
        aux = DifCosto%b20;
        c20 = (DifCosto - aux)/(b20);
        DifCosto = DifCosto - (c20*b20);
    }
    if (DifCosto >m10){
        aux = DifCosto%m10;
        c10 = (DifCosto - aux)/(m10);
        DifCosto = DifCosto - (c10*m10);
    }
    if (DifCosto >m5){
        aux = DifCosto%m5;
        c5 = (DifCosto - aux)/(m5);
        DifCosto = DifCosto - (c5*m5);
    }
    if (DifCosto >m2){
        aux = DifCosto%m2;
        c2 = (DifCosto - aux)/(m2);
        DifCosto = DifCosto - (c2*m2);
    }
    if (DifCosto >m1){
        aux = DifCosto%m1;
        c1 = (DifCosto - aux)/(m1);
        DifCosto = DifCosto - (c1*m1);
    }
    console.log('Total de cambio es: \n\
        billetes de 200',c200,'\n\
        billetes de 100',c100,' \n\
        billetes de 50', c50, '\n\
        billetes de 20',c20, '\n\
        monedas de 10', c10, '\n\
        monedas de 5', c5, '\n\
        monedas de 2', c2, '\n\
        monedas de 1', c1, '\n\
        ' );
}
else{
    console.log('No tiene el dinero necesario para comprar el producto');
}



A 100
B 99 - 90  if (calificación<99 )   if (calificacion >=90)
C 89 - 80


if ((sentencia1)&& (sentencia2))

Comprar unas palomitas

Si tenemos dinero 
Si el dinero que tenemos no es suficiente para comprar palomitas

dinero > 0 && palomitas <= dinero 
compramos palomitas

Usuario contraseña
usuario : admin
password : root



let PsswdUser, User;
let pssw = 'root', user = 'admin';

User = prompt("Ingresa usuario");
PsswdUser = prompt("Ingresa contraseña");


if ((User == user) && (pssw == PsswdUser)){
    console.log("Login success");
}
else{
    console.log('datos incorrectos');
}


OR 
if ((sentencia1) || (sentencia2)){

}

DineroTC 
DineroEfect 

me compro las palomitas


if (){
    comprarme 
}

AND. Para efectuar la sentencia ambas condiciones deben ser verdaderas
OR Con que una sea verdad, la sentencia se efectua


Tarjeta1 
Tarjeta2

if  (Tarjeta1 || Tarjeta2){

}

*/


let Pedro = 200;
let Ana = 300;

let compra= prompt('Cuanto costo la canasta');

console.log((Pedro >compra));
console.log((Ana >compra));
console.log((Pedro >compra) || (Ana >compra));
if ((Pedro >compra) || (Ana >compra)){
    console.log('Se compra la canasta');
}
else if ((Pedro + Ana )> compra){
    console.log('Se compra la canasta');
}
else{
    console.log('no tienen suficiente dinero en sus respectivas tarjetas');
}
