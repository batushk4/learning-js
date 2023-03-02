const pessoa = {
    nome: 'Oséias',
    sobrenome: 'Laborda',
    idade: 21,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

//const nome = pessoa.nome; -> atribuição normal

// Atribuição via desestruturação 
//const { nome: teste = ' ', sobrenome, idade } = pessoa; -> podendo atribuir em uma variável o método 
//quando usamos o :, falamos que o valor da variavel está indo pra lá
//const { endereco: {rua, numero} } = pessoa;
// sinalizar o resto é: ...resto
const { nome, ...resto } = pessoa;
console.log(resto);


