//1
alert('Un mensaje');

//2
document.write('Hello Word' + "<br>");

//3
document.write(3 + 5 + "<br>");

//4
let nombreUsuario = prompt('Escriba su nombre de usuario');

document.write(nombreUsuario + "<br>");

//5
let num1 = prompt('Digite un numero');
num1=parseInt(num1)
let num2 = prompt('Digite otro numero'); 
num2=parseInt(num2)
document.write(num1+num2 + "<br>")

//6
let num3 = prompt('Digite un numero'); 
num3=parseInt(num3)
let num4 = prompt('Digite otro numero'); 
num4=parseInt(num4)

if (num3 > num4) {
    document.write('El numero mayor es: ' , num3 )
} else {
    document.write('El numero mayor es: ' , num4)
}

//7
let num7 = prompt('Digite el primer numero');
num7= parseInt(num7)
let num8 = prompt('Digite el segundo numero');
num8= parseInt(num8)
let num9 = prompt('Digite el tercero numero');
num9= parseInt(num9)

if(num7 < num8 < num9){
    console.log('El mayor es: ', num9)
}

//8
let numdiv = prompt('Digite un numero');

if( numdiv % 2 === 0){
    console.log('El numero es divisible por 2')
}else{
    console.log('El numero no es divisible por 2')
}