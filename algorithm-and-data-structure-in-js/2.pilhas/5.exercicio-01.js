// Pilhas: coleção ordenada de itens que segue o princípio LIFO(Last In First Out), 
// ou seja, o último a entrar é o primeiro a sair. 
// Temos vários exemplos da vida real que podem nos ajudar a compreender este princípio,
// um deles é a pilha de livos.

// function Stack() {
//     var itens = []

//     this.push = function(element) {
//         //adiciona um novo item à pilha

//         itens.push(element)
//     }

//     this.pop = function() {
//         //remover o intem do topo da pilha

//         return itens.pop()
//     }

//     this.peek = function() {
//         //devolve o elemento que está no topo da pilha
    
//         return itens[itens.length - 1]
//     }

//     this.isEmpty = function() {
//         //informar se a pilha está vazia ou não

//         return itens.length === 0
//     }

//     this.clear = function() {
//         //limpa a pilha

//         itens = []
//     }

//     this.size = function() {
//         //informar o tamanho da pilha

//         return itens.length
//     }

//     this.print = function() {
//         //imprime a pilha ao console

//         console.log(itens.toString())
//     }
// }


function dec2Bin(decNumber) {
    var reststack = [],
    rest,
    binaryString = ''

    while(decNumber > 0) {
        rest = Math.floor(decNumber % 2)
        reststack.push(rest)
        decNumber = Math.floor(decNumber / 2)
    }

    while(reststack.length > 0) {
        binaryString += reststack.pop().toString()
    }

    return binaryString
}

console.log(dec2Bin(25))

