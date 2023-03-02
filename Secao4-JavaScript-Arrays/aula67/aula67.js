// Reduce - reduzindo o array

// Some todo os números (reduce)
// Retorne um array com os pares (filter)
// Retorne um array com o dobro dos valores (map)

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
// const total = numeros.reduce(function(acumulador, valor, indice, array) {
//     acumulador += valor
//     return acumulador
// }, 0);
// console.log(total)


// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
// const total = numeros.reduce(function(acumulador, valor, indice, array) {
// if(valor % 2 !== 0) -> somar só os impares    
// if(valor % 2 === 0) acumulador.push(valor);
//     return acumulador
// }, []);
// console.log(total)

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
// const total = numeros.reduce(function(acumulador, valor) {
//     acumulador.push(valor * 2)
//     return acumulador
// });
// console.log(total)

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 17 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 82 },
    { nome: 'Wallace', idade: 95 },
]
const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador
    return valor
})
console.log(maisVelha)



