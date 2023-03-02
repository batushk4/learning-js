/**For in - estrutura de repetição
 * 
array normal

 const frutas = ['Pera', 'Maçã', 'Uva', 'Banana'];
 
 for (let i = 0; i < frutas.length; i++) {
     console.log(frutas[i]);
    }
    
    
    // for in -> lê os indices ou chaves do objeto
    const frutas = ['Pera', 'Maçã', 'Uva', 'Banana'];
    
    for (let indice in frutas ) {
        console.log(frutas[indice]);
    }
*/

const pessoa = {
    nome: 'Oséias',
    sobrenome: 'Laborda',
    idade: 20
};

for (let chave in pessoa) {
    console.log(pessoa[chave]);
}


