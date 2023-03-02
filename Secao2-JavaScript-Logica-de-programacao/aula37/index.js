/**for of -> estrutura de repetição 
 * 
 
for (let valor of nome) {
     console.log(valor);
 }

for clássico - geralmente com iteráveis (arrays ou strings)
for in - retorna o índice ou chave (string, array ou objetos)
for of - retorna o valor em si (iteráveis, arrays ou strings)
 */

const nome = ['Oséias Laborda'];

nome.forEach(function(valor, indice) {
    console.log(valor, indice);
});

