/**Short-Circuit
 * 
 * && -> todas as expressões precisam serem verdadeiras para ser true
 *  || -> true || false -> vai retornar "o valor verdadeiro"
 * tudo em js é avaliado
 * 
 * FALSY -> não é literal
 * false -> literal
 * 0
 * '' "" ``
 * Null // undefined
 * NaN
 * 
 
console.log('Oséias Laborda' && 0 && 'Maria');

//usado para estudar o &&
function falaOi () {
    return 'oi';
}

const vaiExecutar = false; //qualquer valor falso passado aqui dará essa expressão como falso.  

console.log(vaiExecutar && falaOi());
 */

//console.log(0 || false || null || 'Oseias' || true);

const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);
