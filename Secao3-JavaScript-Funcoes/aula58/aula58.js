// Função construtora -> objetos
// Funcção fábrica - objetos 
// Construtora -> Pessoa (new)// (seus nomes iniciam com letra maiúscula)
function Pessoa(nome, sobrenome) {
    // Atributos ou métodos privados 
    const ID = 123456;
    const metodoInterno = function() {
    };

    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um método');
    };
}

const p1 = new Pessoa('Luiz', 'Otávio')
const p2 = new Pessoa('Maria', "Nazaré")
p2.metodo();

console.log(p1.nome);
console.log(p2.sobrenome);














