const pessoas = [
    { id: 3, nome: 'Luiz'},
    { id: 2, nome: 'Maria'},
    { id: 1, nome: 'Helena'}
]

// const novasPessooas = {}
// for (const pessoa of pessoas) {
//     const { id } = pessoa
//     novasPessooas[id] = { ... pessoa }
// }

const novasPessooas = new Map()
for (const pessoa of pessoas) {
    const { id } = pessoa
    novasPessooas.set(id, { ...pessoa })
}

console.log(novasPessooas)