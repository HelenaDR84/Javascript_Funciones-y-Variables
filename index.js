
// variables de diferentes tipos de datos:
// Número
let num = 21; //Integer

// Cadena de texto
let str = "Hola Femcoders"; // No es Integer. Tipo texto

// Booleano
let bool = false;  // NO es Integer

//Realiza operaciones matemáticas básicas con las variables creadas anteriormente (suma, resta, multiplicación, división).

let suma = 5+6
suma 
console.log(suma);
document.write(suma);

let resta = 12-6
resta
console.log(resta);
document.write(resta);

let multiplicación = 3*4
multiplicación
console.log(multiplicación);
document.write(multiplicación);

let division = 12/3
division
console.log(division);
document.write(division);

//De las variables declaradas anteriormente, identifica las que son de tipo texto y concatena dichas cadenas de texto.

let frase = "Hola "+""+"Femcoders"
console.log(frase);
document.write(frase);

//Crear una función que imprima por la pantalla del navegador y la consola el mensaje "Hola, [nombre]"
//con un parámetro para el nombre.

let nombre = "Helena ";

function llamar_persona (){
    let mensaje = "Hola " + nombre;
    console.log (mensaje);
    document.write(mensaje);
}
llamar_persona(nombre);

 //Crear función que reciba como parámetros dos números y que devuelva la suma de ellos.
 let número_1 = 2;
 let número_2 = 6;
 function sumar (a, b){
    return a +b;l
 }
 let resultado = sumar(número_1,número_2);

 console.log(resultado);
 document.write(resultado);

 //Crear función que determine si un número es par o impar.
 function esPar(n)
{
    if (n % 2 == 0) {            //con el 0 nos referimos a que al dividir cualquier número con 2 no queda residuo, por lo tanto es par, de lo contrario si quedase algún decimal o residuo sería impar.
        
    return "Es par";
} else {return "Es inpar";}
}
console.log (esPar(7));
console.log (esPar(8));
document.write(esPar(7));
document.write(esPar(8));

