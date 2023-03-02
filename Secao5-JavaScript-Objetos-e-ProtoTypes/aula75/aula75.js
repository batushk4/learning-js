// // New object -> Object.prototype
// const objA = {
//     chaveA: 'A'
//     // __proto__: Object.prototype
// }

// // New object -> Object.prototype
// const objB = {
//     chaveA: 'B'
//     // __proto__: objA
// };

// const objC = new Object()
// objC.chaveC = 'C'

// Object.setPrototypeOf(objB, objA);
// Object.setPrototypeOf(objC, objB)
// console.log(objB.chaveA);

function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
}

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const p1 = new Produto('Camiseta', 50)
// p1.desconto(100)
// p1.aumento(100)

// Literal
const p2 = {
    nome: 'Caneca',
    preco: 15
}
Object.setPrototypeOf(p2, Produto.prototype)

p2.aumento(10)

// console.log(p1)
// console.log(p2)

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42 
     },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 46 
    }
})
p3.aumento(10)
console.log(p3)
