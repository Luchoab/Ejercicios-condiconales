//9 - No me sale wey

//10 y 11
let numero = prompt('Digite un numero');

if(numero % 2 === 0 && numero % 3 ===0 && numero % 5 ===0){
    document.write('El numero es divisible por 2, 3 y 5')
}
else if(numero % 2 === 0 && numero % 3 ===0){
    document.write('El numero es divisible por 2 y 3 ')
}
else if(numero % 2 === 0 && numero % 5 ===0){
    document.write('El numero es divisible por 2 y 5 ')
}
else if (numero % 2 === 0 ){
    document.write('El numero es divisible por 2')
}
else if(numero % 3 === 0  && numero % 5 ===0){
    document.write('El numero es divisible por 3 y 5')
}
else if(numero % 3 === 0 && numero %7 ===0 ){
    document.write('El numero es divisible por 3 y 7')
}
else if(numero % 3 === 0){
    document.write('El numero es divisible por 3')
}
else if (numero % 7 === 0 && numero % 5 === 0){
    document.write('El numero es divisible por 7 y 5')
}
else if(numero % 5 === 0){
    document.write('El numero es divisible por 5')
}
else if (numero % 7 === 0){
    document.write('El numero es divisible por 7')
}
else{
    document.write('No es divisible ni por 2, 3, 5 o 7')
};

