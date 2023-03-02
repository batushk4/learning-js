//como criar uma função
//passar um parametro e chamar ele no final da função

/*
//como retornar um valor

function saudar(nome) {
    return `Bom dia, ${nome}!`
}

const variavel = saudar('Oséias');
console.log(variavel);

//função que faz uma soma com valor padrão
function soma(x = 2, y = 2) { 
    const resultado = x + y;
    return resultado;
}

console.log(soma());

//neste caso eu preciso terminar com ;
//uma função anonima
const raiz = function(n) {
    return n ** 0.5;
};

console.log(raiz(9))
*/

//(arrow function)criar uma função mais moderna, veio para simplificar a vida do programador
const raiz = n => n ** 0.5; 
  
console.log(raiz(9));

