module.exports = class Cachorro {
    constructor(nome) {
        this.nome = nome;
    }

    laitr() {
        console.log(`${this.nome} está fazendo au au`);
    }
};

