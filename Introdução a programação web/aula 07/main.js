
//array
const alunosA = [
    {
        nome: "oseias",
        nota: 6
    },
    {
        nome: "Rafael",
        nota: 7
    },
    {
        nome: "Paula",
        nota: 9
    },
]

function calculaMedia(alunos) {
    let soma = 0
    for (i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota
    }

    const media = soma / alunos.length
    return media
}

const media1 = calculaMedia(alunosA)

console.log(media1)
