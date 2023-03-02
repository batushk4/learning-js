/**if, else if e else
 * 
 * if -> pode ser usado sozinho
 * else if -> sempre que utilizo else, preciso de um if antes e posso ter vários else if na condição
 * else -> só posso ter um else no final na condição
 * podemos usar condições sem else if, utilizamos apenas if e else
 * 
 * //if
 const hora = 12;
 
 if (hora <= 12) {
 console.log('Bom dia');
}
    
//entre 0 - 11 -> bom dia
//entre 12 - 17 -> boa tarde
//entre 18 - 23 -> boa noite
    
const hora = 6;
    
if (hora >= 0 && hora <= 11) {
    console.log('Bom dia!');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde!');
}else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite!');
}
    

const hora = 24;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia!');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde!');
}else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite!');
} else {
    console.log('Olá');
}

*/

const tenhoGrana = false;

if (tenhoGrana) {
    console.log('vou sair de casa');
} else {
    console.log('não vou sair de casa');
}

