// Método Splice

// negativos     -5      -4        -3       -2           -1 
// positivos      0       1         2        3            4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nome.splice(qual indíce quer mexer e quantos elementos quer remover)
// nome.splice(indice atual, delete, elem1, elem2)

// const removidos = nomes.splice(3, 0, 'Luiz'); //adicionou o Luiz

//pop
//const removidos = nomes.splice(-1, 1);

//SHIFT
// const removidos = nomes.splice(0, 1)

//push
// nomes.splice(nomes.length, 0, 'Luiz');
// console.log(nomes);

//unshift
nomes.splice(0, 0, 'Luiz', 'Oséias');
console.log(nomes);



