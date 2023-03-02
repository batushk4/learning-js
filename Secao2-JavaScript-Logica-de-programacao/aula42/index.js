/** Escreva uma função chamada ePaisagem 
 * que recebe dois argumentos, largura e altura 
 *  de uma imagem (number).
 * retorne true se a imagem estiver no modo
 * paisagem 
 */

//primeira opção
function ePaisagem(largura, altura) {
    return largura > altura ? true : false;
}

//segunda opção
function ePaisagem(largura, altura) {
    return largura > altura;
}

// terceira opção (arrow function)
const ePaisagem = (largura, altura) => largura > altura;

console.log(ePaisagem(155, 122))









