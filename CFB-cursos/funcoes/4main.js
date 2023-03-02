function soma(...valores){

    // let tam = valores.length
    let rest=0

    // for(let i =0; i<tam; i++){
    //     rest+=valores[i]
    // }  jeito tradicional de percorrer os valores de um array

    for(let v of valores){
        rest+=v
    }

    return rest
}

console.log(soma(10,5,5,6,4))






