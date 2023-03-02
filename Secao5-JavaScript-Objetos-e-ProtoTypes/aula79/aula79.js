const falar = {
    falar() {
        console.log(`${this.nome} está falando`)
    },
}

const comer = {
    comer() {
        console.log(`${this.nome} está comendo`)
    },
}

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo`)
    },
}

const pessoaPrototype = Object.assign({}, falar, comer, beber)
// const pessoaPrototype = { ...falar, ...comer, ...beber } -> rest operado

function CriaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, { 
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    })
}

const p1 = CriaPessoa('Luiz', 'Otávio')
const p2 = CriaPessoa('Maria', 'Fernanda')

console.log(p1)
console.log(p2)
 