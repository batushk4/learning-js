/** For-Clássico - estrutura de repetição 
 * 
 // para criar um for é preciso de 3 coisas no (): 1° criar uma variável, 2° criar uma condição de parada e 3° incrementa uma volta a cada laço
 for (let i = 0; i <= 5; i++) {
     console.log(`Linha ${i}`);
    }
    
.lenght mostra o tamanho das coisas    

for (let i = 0; i < fruta.length; i++) {
    //const par = i % 2 === 0 ? 'par' : 'ímpar';
    console.log(fruta[i]);
}
*/

const fruta = ['maçã', 'pêra', 'uva']

for (let i = 0; i < fruta.length; i++) {
    console.log(`Indice ${i}`, fruta[i]);
}

