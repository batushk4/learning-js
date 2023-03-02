/**
 * Object.values
 * Object.entries
 * Object.assign(des, any)
 * Object.getOwnPropertyDescriptor(o, 'prop')
 * ... (spread) -> espalha os valores para outros obj
 */

const produto = { nome: 'Produto', preco: 1.8, material: 'Porcelana' }
// console.log(Object.values(produto)) -> funciona como Object.key
// console.log(Object.entries(produto)) -> retorna os valores como um array

for(let valor of Object.entries(produto)) {
    console.log(valor[0], valor[1])
}

// inteirar sobre o objeto
// for(let [chave, valor] of Object.entries(produto)) {
//     console.log(chave, valor)
// }

//volta como um array inteirado 
// for(let entry of Object.entries(produto)) {
//     console.log(entry)
// }

// Object.defineProperty(produto, 'nome', {
    //     writable: false,
//     configurable: false
// })

// const caneca = {
//     ...produto,
//     material: 'Porcelana'
// }

// copiar um obj
// const caneca = Object.assign({}, produto, { material: 'porcelana' })
// const caneca = { nome: produto.nome, preco: produto.preco } 

// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))

// caneca.nome = 'Otávio'
// caneca.preco = 2.8
// // produto.nome = 'Luiz'
// console.log(produto)
// console.log(caneca)
















