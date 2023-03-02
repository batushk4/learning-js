/** if, else if e else
 * 
 */
const numero = 5;

// se (numero >= 0 && numero <= 5) ocorrer, faça isso {código}
//senão faça isso {o código}
if(numero === 5){
    console.log('vai ser verdadeiro');
}

if (numero >= 0 && numero <= 5) {
    console.log('Sim, o número é maior ou igual a zero.');
} else if (numero >= 6 && numero <= 10) {
    console.log('O número está entre 6 e 10');    
} else if (numero >= 11 && numero <= 18) {
    console.log('O seu número está entre 11 e 18');
} else {
    console.log('O número não está entre 0 e 18');
}

console.log(`Não tem nada a ver com os if's`);

