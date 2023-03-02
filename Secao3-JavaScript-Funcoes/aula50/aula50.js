// parâmetro da função

// toda função declarada com function tem os argumentos que sustenta
// todos os argumentos enviados
// function funcao() {
//     let total = 0;
//     for (let argumento of arguments) {
//         total += argumento;
//     }

//     console.log(total);
// }
// funcao(1, 2, 3, 4, 5, 6, 7);

// function funcao(a, b = 2, c = 4) {
//     // b = b || 0; => maneira antiga de se resolver
//     console.log(a + b)
// }
// funcao(2, 10);

// function funcao([valor1, valor2, valor3]) {
//     console.log(valor1, valor2, valor3);
// }
// funcao(['Luiz Otavio', 'Miranda', 30]);
// let obj = { nome: 'Luiz', sobrenome: 'Otávio', idade: 20};
// funcao(obj);
// funcao({ nome: 'Luiz', sobrenome: 'Otávio', idade: 20});

// se for usar o rest operador, ele tem de ser o último parametro
// function conta(operador, acumulador, ...numeros) {
//     for(let numero of numeros) {
//         if (operador === "+") acumulador += numero;
//         if (operador === "-") acumulador -= numero;
//         if (operador === "/") acumulador /= numero;
//         if (operador === "*") acumulador *= numero;
//     }

//     console.log(acumulador);
// }
// conta('+', 1, 20, 30, 40, 50);


const conta = function(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if (operador === "+") acumulador += numero;
        if (operador === "-") acumulador -= numero;
        if (operador === "/") acumulador /= numero;
        if (operador === "*") acumulador *= numero;
    }

    console.log(acumulador);
};
conta('+', 1, 20, 30, 40, 50);


