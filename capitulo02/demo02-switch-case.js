const readLine = require('readLine')
const terminal = readLine.createInterface({
    //definir o modo de entrada via terminal
    input: process.stdin,
    // todo texto de saída sairá no terminal
    output: process.stdout
})

// texto do menu
const textoMenu = `
Olá, seja bem-vindo ao sistema de média
Digite 1 para acessar o menu inicial
Digite 2 para acessar o menu inicial
Digite 3 para acessar o menu inicial
Digite 0 para sair
`
// console.log('textoMenu', textoMenu)
// const opcao = 2
// switch(opcao) {
//     case 1: 
//         console.log('pressionou 1')
//         break;
//     case 2: 
//         console.log('pressionou 2')
//         break;
//     default: 
//         console.log('opção inválida')
//         break
// }
// terminal.question('Qual é seu nome?', (msg) => {
//     console.log('você escreveu', msg)
//     terminal.close()
// })

const questoes = {
    menuIncial: {
        texto: textoMenu,
        fn: menuIncial
    },
    opcao1: {
        texto: 'submenu! Pressione enter para selecionar mais opções...',
        fn: opcao1
    }
}
function opcao1(msg) {
    console.log('Não há mais opções!')
    terminal.close()
}
function menuIncial(msg) {
    const opcao = Number(msg)
    if(isNaN(opcao)) {
        throw new Error('Não é um número', msg)
    }
    switch(opcao) {
        case 0: 
                console.log('Saindo...')
                terminal.close()
                break;
        case 1:
            console.log('menu inicial')
            terminal.question(
                questoes.opcao1.texto,
                questoes.opcao1.fn
            )
            break;
        default:
            console.log('opção invalida')
            terminal.close()
            break;
    }
}

terminal.question(
    questoes.menuIncial.texto,
    questoes.menuIncial.fn
)






