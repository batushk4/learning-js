function rand(min = 0, max = 3) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

// class EsperaAi {
//     constructor(msg, tempo) {
//         return new Promise((resolve, reject) => {
//             if(typeof msg !== 'string') {
//                 reject('Cai no erro')
//             }

//             setTimeout(() => {
//                 resolve(msg.toUpperCase() + ' - Passei na promise')
//             }, tempo)
//         })
//     }
// }

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
        reject('Cai NO ERRO')
        return
    }    

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise')
            return
        }, tempo)
    })    
}

// new EsperaAi('Fase 1', rand)
//     .then(valor => { 
//         console.log(valor)
//         return new EsperaAi('Fase 2', rand())
//     })
//     .then(fase => {
//         console.log(fase)
//         return new EsperaAi('Fase 3', rand())
//     })
//     .then(fase => {
//         console.log(fase)
//         return fase
//     })
//     .then(fase => {
//         console.log('Terminanos na fase:',fase)
//     })
//     .catch(e => console.log(e))

async function executa() {
    try { 
    const fase1 = await esperaAi('Fase 1', rand())
   console.log(fase1)

   const fase2 = await esperaAi('Fase 2', rand())
   console.log(fase2)
   
   const fase3 = await esperaAi('Fase 3', rand())
   console.log(fase3)

   console.log('Terminanos na fase:', fase3)
    } catch(e) {
        console.log(e)
    }
}

executa()

