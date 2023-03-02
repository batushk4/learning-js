/** 
* Aritméticos 
* + adição / concatenação (- / *)
* ** potenciação
* % resto da divisão
* 
* Precedência dos operadores aritmético
() parênteses
** potenciação
* / % multiplicação, divisão e resto da divisão
+ - adição e subtração

Incremento = ++ 
Decremento = -- 


const num1 = 10;
const num2 = 3;
console.log(num1 % num2);


//primeiro incremente as coisas na variável para que não haja bugs
//ex certo:
let contador = 1;
contador++;
console.log(contador);

//errado
let cont = 1;
console.log(cont++);

// operadores de atribuição
**=
+=
let contador = 0;
contador += 2; //seria a mesma coisa: contador = contador + 50
contador += 2;
contador += 2;
console.log(contador);


//NaN - Not a Number parseInt (inteiro)
const num1 = 10;
const num2 = parseInt('5')
console.log(num1 + num2);
console.log(typeof num2);

//NaN - Not a Number parseFloat (decimais)
const num1 = 10;
const num2 = parseFloat('5.2')
console.log(num1 + num2);
console.log(typeof num2);

*/

//NaN - Not a Number
const num1 = 10;
const num2 = Number('5.2')
console.log(num1 + num2);
console.log(typeof num2);





