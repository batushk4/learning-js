// IIFE -> Immediately invoked function expression
// function qualquerCoisa(){
//     console.log(123445);
// }
// qualquerCoisa();

// (function() {
//     const nome = "Oseias";
//     console.log(nome);
// })();


(function(idade, peso, altura) {

    const sobrenome = 'Miranda';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function FalaNome() {
        console.log(criaNome('Luiz'));
    }

    FalaNome();
    console.log(idade, peso, altura);

})(30, 80, 1.80);

//léxico correto 
(function() {

})();

// não haverá conflito com a variável por conta dela está protegida pela função imediata
const nome = 'Qualquer coisa';

