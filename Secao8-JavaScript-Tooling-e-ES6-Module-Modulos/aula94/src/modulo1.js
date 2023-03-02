const nome = 'Oseias';
const sobrenome = 'Laborda';
const idade = 21;

function soma (x, y) {
    return x + y;
}

export default class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

export { nome as nome2, sobrenome, idade, soma };

