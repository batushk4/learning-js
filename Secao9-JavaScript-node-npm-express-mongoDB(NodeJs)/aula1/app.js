const path = require('path');
const axios = require('axios');
const { Pessoa } = require('./mod1');

const p1 = new Pessoa('Ariel');
console.log(p1);

// axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
//     .then(response => console.log(response.data))
//     .catch(e => console.log(e));


// const { Pessoa } = require('./mod1');

// const p1 = new Pessoa('Ariel');
// console.log(p1)






// bloco de exemplo 1

// exemplo 1
// const mod1 = require('./mod1');
// console.log(mod1.falaNome());
// console.log(mod1);

// exemplo 2: pegar a função sem preciar chamar o arquivo todo
// const falaNome = require('./mod1').falaNome;
// console.log(falaNome());

// exemplo 3: pegar a função com o escopo todo
// const mod1 = require('./mod1');
// const falaNome = mod1.falaNome;
// console.log(falaNome());

// exemplo 4: chamar por array
// const { nome, sobrenome, falaNome } = require('./mod1');
// console.log(nome, sobrenome);
// console.log(falaNome());


