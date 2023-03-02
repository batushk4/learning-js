//alert, confirm e prompt
/*
window.alert('Gente boa');
alert('Com a nossa mensagem.');

window.confirm('Are you sure you want to');
confirm('Deseja realmente apagar?');

window.prompt('Digite o seu nome: ');
prompt('Digite seu sobrenome: ');

const confirma = confirm('Realmente deseja apagar?');
*/

//tarefa de conversão de string para número

let num1 = prompt('Digite um número');
let num2 = prompt('Digite outro número');

num1 = Number(num1);
num2 = Number(num2);

//const resultado = num1 + num2; -> é só fazer uma expressão simples, mas em código mais grande tu deve deixar tudo bem claro. LEMBRE-SE: a gente faz código para humano, não para máquinas.
alert(`O resultado da sua conta foi: ${num1 + num2}`)
