function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
        reject('Cais NO ERRO')
        return
    }    

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise')
            return
        }, tempo)
    })    
}

// #Promise.all : ele vai te entregar tudo resolvida na ordem
// que foi feito, mas caso tenha algum erro, ele irá cair no catch  
// const promises = [
//     'Primeiro valor', 
//     esperaAi('Promise 1', 3000),
//     esperaAi('Promise 2', 500),
//     esperaAi('Promise 3', 1000),
//     // esperaAi(1000, 1000),
//     'Outro valor'
// ]

// Promise.all(promises)
// .then(function(valor) {
//     console.log(valor)
// })
// .catch(function(erro) {
//     console.log(erro)
// })

// #Promise.race: retorna apenas o primeiro valor resolvido
// 
// const promises = [
//     //'Primeiro valor', 
//     esperaAi('Promise 1', rand(1, 5)),
//     esperaAi('Promise 2', rand(1, 5)),
//     esperaAi('Promise 3', rand(1, 5)),
//     // esperaAi(1000, 1000),
//     //'Outro valor'
// ]

// Promise.race(promises)
// .then(function(valor) {
//     console.log(valor)
// })
// .catch(function(erro) {
//     console.log(erro)
// })


// #Promise.resolve: se estiver tudo ok, ele irá te dar o resultado
// caso contrário ele consertará e se for impossível, ele irá para o erro
// function baixaPagina() {
//     const emCache = false

//     if(emCache) {
//         return Promise.resolve('Página em cache.')
//     } else {
//         return esperaAi('Baixei a página' , 3000)
//     }
// }

// baixaPagina()
//     .then(dadosPagina => {
//         console.log(dadosPagina)
//     })
//     .catch(e => console.log(e))


// #Promise.reject
function baixaPagina() {
    const emCache = true

    if(emCache) {
        return Promise.reject('Página em cache.')
    } else {
        return esperaAi('Baixei a página' , 3000)
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(e => console.log('É UM ERRO', e))



