// Escopo léxicos

const nome = 'Oséias';

function falaNome() { 
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Laborda';
    falaNome();
}
usaFalaNome();

