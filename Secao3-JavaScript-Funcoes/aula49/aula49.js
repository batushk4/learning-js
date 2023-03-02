// maneiras de declarar funções (function hoisting)
falaOi();
function falaOi() {
    console.log('Oiee');
}

// first-class objects (objetos de primeira classe)
// function expression
const souUmDado = function () {
    console.log('Sou um dado.');
}
souUmDado();

// arrow function 
const funcaoArrow = () => {
    console.log('sou uma arrow function');
};
funcaoArrow();

// Dentro de um objeto posso ter uma função
const obj = {
    falar() {
        console.log('Estou falando...');
    }
};
obj.falar();



