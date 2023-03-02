// defineProperty -> define apenas no singular
// defineProperties -> define no plural 

function Produto(nome, preco, estoque) {
    //propriedas pública
    this.nome = nome
    this.preco = preco
    //this.estoque = estoque

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque,  // valor da chave
        writable: false, // pode alterar ou não a chave
        configurable: false // pode reconfigurar a chave 
    })

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome,  // valor da chave
            writable: true, // pode alterar ou não a chave
            configurable: true // pode reconfigurar a chave
        },
        preco: {
            enumerable: true, // mostra a chave
            value: preco,  // valor da chave
            writable: true, // pode alterar ou não a chave
            configurable: true // pode reconfigurar a chave
        },
    })
}

const p1 = new Produto('Camiseta', 20, 3)
console.log(p1)
console.log(Object.keys(p1))

for(let chave in p1) {
    console.log(chave)
}





