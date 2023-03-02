/** Escreva uma função que recebe um número e 
 * retorne o seguinte: 
 * número é divisível por 3 = Fizz
 * número é divisível por 5 = Buzz
 * número é divisível por 3 e 5 = FizzBuzz
 * Número não é divisível por 3 e 5 = Retorna o próprio número
 * Checar se o número é ralmente um número
 * use a função com número de 0 a 100
 */

function FizzBuzz(n) {
    if (typeof n !== 'number') return n;
    if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
    if (n % 3 === 0) return 'Fizz';
    if (n % 5 === 0) return 'Buzz';
    return n
}

for (let i = 0; i <= 100; i++) {
    console.log(i, FizzBuzz(i))
}








