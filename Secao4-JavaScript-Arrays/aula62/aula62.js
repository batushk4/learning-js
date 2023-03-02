//Revisão do básico em Arrays
// arrays são valores por referência

//                 0         1        2
// const nomes = ['Eduardo', 'Maria', 'Joana'];
// funciona para strings, objetos, funções, números
// const nomes = new Array('Eduardo', 'Maria', 'Joana');

// nomes[2] = 'João';
// delete nomes[2] //usar o delete quando quiser remover os arrays
// console.log(nomes);
// const novo = [...nomes]; -> faz uma copia do array para essa nova variável
// console.log(nomes.length); -> verificar o tamanho do array

//verá o array e o que o foi removido dele
// const removido = nomes.pop();
// console.log(nomes, removido);

// const novo = nomes;
// novo.pop(); -> deleta o último valor do array
// push adiciona no final
// shift remove do inicio
// unshift coloca no início

// nomes.push('Wallace');
// nomes.push('João Rafael');
// nomes.pop();
// nomes.shift();
// nomes.unshift("Mamão");

// fatiar o array
// const novo = nomes.slice(1, -1);
// console.log(novo);

// const nome = 'Luz Otavio Miranda';
// const nomes = nome.split(', ');
// console.log(nomes);

// tira a vírgula do array e une eles
// const nomes = [ 'Luiz', 'Otavio', 'Miranda'];
// const nome = nomes.join(' ');
// console.log(nome);


// console.log(nomes);

