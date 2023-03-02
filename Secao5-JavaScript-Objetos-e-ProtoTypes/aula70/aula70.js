// // Revisando obj

// // obj literal
// // const pessoa = {
// //     nome: 'Luiz',
// //     nome1: 'Renato',
// //     sobrenome: 'Otávio'
// // }

// // const chave = 'nome1'
// // console.log(pessoa.nome)
// // console.log(pessoa.sobrenome)
// // console.log(pessoa['nome'])
// // console.log(pessoa['sobrenome'])
// // console.log(pessoa[chave])

// // obj construtor 
// // const pessoa1 = new Object();
// // pessoa1.nome = 'Luiz';
// // pessoa1.sobrenome = 'Otávio';

// // console.log(pessoa1.nome)
// // console.log(pessoa1.sobrenome)

// // apagar uma chaeve
// // const pessoa1 = new Object();
// // pessoa1.nome = 'Luiz';
// // pessoa1.sobrenome = 'Otávio';

// // delete pessoa1.nome
// // console.log(pessoa1)

// // métodos e funções
// const pessoa1 = new Object();
// pessoa1.nome = 'Luiz';
// pessoa1.sobrenome = 'Otávio';
// pessoa1.idade = 27
// pessoa1.falarNome = function() {
//     return (`${this.nome} está falando seu nome.`)
// }

// pessoa1.getDataNascimento = function () {
//     const dataAtual = new Date()
//     return dataAtual.getFullYear() - this.idade
// }

// console.log(pessoa1.getDataNascimento())

// // ver as chaves
// // for (let chave in pessoa1) {
// //     console.log(chave)
// // }

// //acessar valor
// for (let chave in pessoa1) {
//     console.log(pessoa1[chave])
// }

// Factory function
// function criaPessoa(nome, sobrenome) {
//     return {
//         nome,
//         sobrenome,

//         //sem o 'get' funciona também
//         nomeCompleto() {
//             return `${this.nome} ${this.sobrenome}`
//         }
//     }
// }

// const p1 = criaPessoa('Luiz', 'Otávio')
// console.log(p1.nomeCompleto())

// função construtora
function Pessoa(nome, sobrenome) {
    this.nome = nome,
    this.sobrenome = sobrenome

    // congelando o this
    Object.freeze(this)
}

// new vai criar uma {} vazio
const p1 = new Pessoa('Luiz', 'Miranda')
// congelar valor da variável 
// Object.freeze(p1)
p1.nome = 'Outra coisa'
const p2 = new Pessoa('Mirando')

console.log(p1)
console.log(p2)

















