// retorno da função

// return -> retorna um valor e termina a função ali mesmo

// function soma(a, b) {
//     return a + b;
// }
//console.log(soma(1, 3));

// function soma2(a, b) {
//     console.log( a + b)
// }
// soma2(5, 2)

// // criar uma função para criar pessoa
// function criaPessoa(nome, sobrenome) {
//     return { nome, sobrenome };
// }

// const p1 = criaPessoa('Oséias', 'Laborda');
// const p2 = {
//     nome: 'João',
//     sobrenome: 'Oliveira'
// };

// function falaFrase(comeco) {
//     function falaResto(resto) {
//         return comeco  +  ' ' +  resto;
//     }
//     return falaResto;
// }

// const fala = falaFrase('Olá');
// const resto = fala('mundo!');
// console.log(resto);


function criaMultiplicador(multiplicador) {
    // multiplicador 
    return function(n) {
        return n * multiplicador;
    };
}

const duplica =  criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(3));
console.log(triplica(3));
console.log(quadriplica(20));




