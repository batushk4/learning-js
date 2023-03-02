//objeto básico
/*
const nome01 = 'Oseias';
const sobrenome01 = 'Laborda';
const idade01 = 25;

//a difereça entre objeto e array é no array se cria com colchetes e objetos com chaves
//criando um objeto literal
const pessoa1 = {
    nome: 'Oséias',
    sobrenome: 'Laborda',
    idade: 25
};

const pessoa2 = {
    nome: 'Rafael',
    sobrenome: 'Souza',
    idade: 28
};

console.log(pessoa2.idade);
console.log(pessoa2.sobrenome);

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);

//Criar uma função para criar um objeto assim
//o que fica entre () chama-se de parametro
//esta função chama-se de factory
function criaPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}

//o que fica entre () chama-se de argumento
const pessoa1 = criaPessoa('Oséias', 'Laborda', 35 );
console.log(pessoa1.nome);
*/

const pessoa1 = {
    nome: 'Oséias',
    sobrenome: 'Laborda',
    idade: 25,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando Oi`)
    },

    incrementaIdade() {
        this.idade++;
        console.log(`A minha idade atual é ${this.idade}`);
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();

