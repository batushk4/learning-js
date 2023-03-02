/**
//padrão do js: IEEE 754.2008

let num1 = 0.7; //Number
let num2 = 0.1; //Number  

//resolvendo bug decimal com cálculo simples mesmo
//num1 = ((num1 * 100) + (num2 * 100)) / 100; //0.8 
//num1 = ((num1 * 100) + (num2 * 100)) / 100; //0.9
//num1 = ((num1 * 100) + (num2 * 100)) / 100; //1.0
let temp = num1 + num2;

console.log(temp.toFixed(1));
console.log(Number.isInteger(num1));
num1 = parseFloat(num1.toFixed(2)); // isso ajeita o valor, mas pode usar o Number que já conserta

 ***Mais sobre numbers
num1 = num1.toString(); // transforma de vez um número numa string
console.log(num1.toString() + num2); // transforma o número numa string
console.log(num1.toString(2)); //ver o número em binário
console.log(num1.toFixed(2)); // para arredondar o número decimal 
console.log(Number.isInteger(num1)); // verifica se o número é inteiro ou não
console.log(Number.isNaN(temp)); // verifica se a variável não é um número. TODA VEZ QUE FOR FAZER CÁLCULO É PRECISO MUDAR A STRING PARA QUE NO FUTURO NÃO GERE UM ERRO.
let temp = num1 * '5';
*/

//let num1 = 10; //Number let num2 = 2.5; //Number  console.log();
