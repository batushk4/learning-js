// Pilhas: coleção ordenada de itens que segue o princípio LIFO(Last In First Out), 
// ou seja, o último a entrar é o primeiro a sair. 
// Temos vários exemplos da vida real que podem nos ajudar a compreender este princípio,
// um deles é a pilha de livos.

function Stack() {
    var itens = []

    this.push = function(element) {
        //adiciona um novo item à pilha
    }

    this.pop = function() {
        //remover o intem do topo da pilha
    }

    this.peek = function() {
        //devolve o elemento que está no topo da pilha
    }

    this.isEmpty = function() {
        //informar se a pilha está vazia ou não
    }

    this.clear = function() {
        //limpa a pilha
    }

    this.size = function() {
        //informar o tamanho da pilha
    }

    this.print = function() {
        //imprime a pilha ao console
    }

}
