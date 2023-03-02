//Base das funções geradoras em js

// function* cores(){
//     yield 'vermelho'
//     yield 'verde'
//     yield 'Azul'
// }

// const itc = cores()
// console.log(itc.next().value)
// console.log(itc.next().value)
// console.log(itc.next().value)

//Função geradora

// function* perguntas(){
//     const nome = yield "Qual é o teu nome?"
//     const esporte = yield 'Qual seu esporte favorito?'
//     return `Seu nome é ${nome}, seu esporte favorito é ${esporte}`
// }

// const itp = perguntas()
// console.log(itp.next().value)
// console.log(itp.next('Pinga').value)
// console.log(itp.next('Karate').value)

function* contador(){
    let i=0
    while(true){
        yield i++
        if(i > 5){
            break
        }
    }
}

const itc = contador()
    for (c of itc){
        console.log(c)
    }



