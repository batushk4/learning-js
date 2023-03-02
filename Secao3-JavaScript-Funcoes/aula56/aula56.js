// Função fábrica (factory Functions)
// Funções que retornam objeto
// quando uma função está dentro de um objeto, a gente chama de método

// function criaPessoa(nome, sobrenome, altura, peso) {
//     return {
//         nome, 
//         sobrenome,
//         //pode se escrever a função assim ou fala: function(){}
//         fala(assunto) {
//             return `${this.nome} está ${assunto}.`;
//         },
//         altura: altura,
//         peso: peso,
//         imc() {
//             const indice = this.peso / (this.altura ** 2);
//             return indice.toFixed(2);
//         }
//     };
// }

// const p1 = criaPessoa('Oséias','Laborda', 1.8, 52);
// console.log(p1.imc(), p1.fala('comendo a tua mãe'));

// const p2 = criaPessoa('Marcela','Silva', 1.6, 45);
// console.log(p2.fala('falando sobre JS'));

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter 
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' '); 
        },

        //pode se escrever a função assim ou fala: function(){}
        fala(assunto) {
            return `${this.nome} está ${assunto}.`;
        },
        
        altura: altura,
        peso: peso,
        
        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Oséias','Laborda', 1.8, 52);
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.imc);
p1.nomeCompleto = "Oséias de Souza Laborda"
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala('com muito sono'))








