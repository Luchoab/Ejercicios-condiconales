//9 - No me sale wey
let frase = prompt('Escribe una frase');
frase = frase.toLowerCase();
console.log(frase);
for (let i = 0; i < frase.length; i++) {
	if (
		frase.substr(i, 1) == 'a' ||
		frase.substr(i, 1) == 'e' ||
		frase.substr(i, 1) == 'i' ||
		frase.substr(i, 1) == 'o' ||
		frase.substr(i, 1) == 'u'
	) {
		document.write(frase.substr(i, 1));
	}
}
//10 y 11
// let numero = prompt('Digite un numero');

// if(numero % 2 === 0 && numero % 3 ===0 && numero % 5 ===0){
//     document.write('El numero es divisible por 2, 3 y 5')
// }
// else if(numero % 2 === 0 && numero % 3 ===0){
//     document.write('El numero es divisible por 2 y 3 ')
// }
// else if(numero % 2 === 0 && numero % 5 ===0){
//     document.write('El numero es divisible por 2 y 5 ')
// }
// else if (numero % 2 === 0 ){
//     document.write('El numero es divisible por 2')
// }
// else if(numero % 3 === 0  && numero % 5 ===0){
//     document.write('El numero es divisible por 3 y 5')
// }
// else if(numero % 3 === 0 && numero %7 ===0 ){
//     document.write('El numero es divisible por 3 y 7')
// }
// else if(numero % 3 === 0){
//     document.write('El numero es divisible por 3')
// }
// else if (numero % 7 === 0 && numero % 5 === 0){
//     document.write('El numero es divisible por 7 y 5')
// }
// else if(numero % 5 === 0){
//     document.write('El numero es divisible por 5')
// }
// else if (numero % 7 === 0){
//     document.write('El numero es divisible por 7')
// }
// else{
//     document.write('No es divisible ni por 2, 3, 5 o 7')
// };

