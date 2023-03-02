/** Objeto Date
 * 
 //função construtora começa com new e com a seunda palavra em Maiúsculo
 const tresHoras = 60 * 60 * 3 * 1000;
 const umDia = 60 * 60 * 24 * 1000;
 const data = new Date(0 + tresHoras + umDia);
 
 const data = new Date(2021, 6, 01, 13, 49,); // 0-1 mês começa do 0// ano, mês, dia, hora, minuto, segundo, milésimo de segundos
 
 const data = new Date('2021-07-01 14:02');
 
 const data = new Date(Date.now());
 console.log('Dia', data.getDate());
 console.log('Mês', data.getMonth() +1); //mês começa do zero
 console.log('Ano', data.getFullYear());
 console.log('Hora', data.getHours());
 console.log('Min', data.getMinutes());
 console.log('Seg', data.getSeconds());
 console.log('ms', data.getMilliseconds());
 console.log('Dia semana', data.getDay()); //0 -> domingo, 6 -> sábado
 console.log(Date.now());//pega milésimo de segundos
 */

function zeroAEsquerda (num) {
    return num >=10 ? num : `0${num}`
}

function formataData(data) {
   const dia = zeroAEsquerda(data.getDate());
   const mes = zeroAEsquerda(data.getMonth() +1);
   const ano = zeroAEsquerda(data.getFullYear());
   const hora = zeroAEsquerda(data.getHours());
   const minuto = zeroAEsquerda(data.getMinutes());
   const segundo = zeroAEsquerda(data.getSeconds());

   return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);