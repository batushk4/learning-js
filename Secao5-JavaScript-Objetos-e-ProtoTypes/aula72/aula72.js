// defineProperty -> Getter e Setter (uma maneira de proteger a propriedade)
// getter para obter um valor
// setter é para configurar um valor

function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco

    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if(typeof valor !== 'number') {
                throw new TypeError('Mensagem')
            }

            estoquePrivado = valor
        }
    })
}

function criaProduto(nome) {
    return {
        get nome() {
            return nome
        },
        set nome(valor) {
            valor = valor.replace('coisa', '') //pegou o valor 'coisa'
            nome = valor
        }
    }
}

const p2 = criaProduto('Camiseta')
p2.nome = 'Qualquer coisa' //mudou o valor do nome
console.log(p2.nome)

// const p1 = new Produto('Camisa', 20, 3)
// p1.estoque =  'O valor que eu quero'
// console.log(p1.estoque)









