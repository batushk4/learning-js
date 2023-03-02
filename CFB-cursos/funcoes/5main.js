// const s = function(...n1){
//     let rest = 0
//     for(v of n1){
//         rest+=v
//     }
//     return rest
// }

const s = new Function("v1", "v2", "return v1+v2") //Função construtor anônima


console.log(s(2,5))





