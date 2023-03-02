/* TIPOS DE DADOS 
Primitivos (valores imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - valores copiados

Referência (mutável) - array, objetos, function - passados por referência

//valores por referências
let a = [1 , 2, 3];
let b = a;
let c = b;

console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push('Luiz');
console.log(c);

*/

const a = {
    nome: 'Oséias',
    sobrenome: 'Laborda'
};

const b = {...a};

a.nome = 'João';
console.log(a);
console.log(b);


