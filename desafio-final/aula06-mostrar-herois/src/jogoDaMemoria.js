class JogoDaMemoria {
    // 3o importar a tela como dependencia
    // iria funcionar sem importar chamando a variavel Tela global
    // mas não é uma boa prática, a melhor prática é obter esse valor por dependencia
    // depois usar a partir do this
    
    constructor({ tela }) {
        this.tela = tela

        this.heroisIniciais = [
            // relativo ao index.html pois será carregado lá
            { img: './arquivos/batman.png', nome: 'batman'},
            { img: './arquivos/ciclop.png', nome: 'ciclop'},
            { img: './arquivos/deadpool.png', nome: 'deadpool'},
            { img: './arquivos/mulhermaravilha.png', nome: 'mulhermaravilha'},
        ]
        this.iconePadrao = './arquivos/default.png'
        this.heroisEscondidos = []
        this.heroisSelecionados = []
    }

    // 1o -para usar o this, nao podemos usar o static
    inicializar() {
        // 2o - vamos precisar importar a tela para fazer alterações nela
        // 3o - chamar a funcao de tela apara atualizar as imagens
        this.tela.atualizarImagens(this.heroisIniciais)
        // força a tela a usar o THIS de jogo da memoria
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
        this.tela.configurarBotaoVerificarSelecao(this.verificarSelecao.bind(this))
    }
    embaralhar() {
        const copias = this.heroisIniciais
        // duplicar os itens
        .concat(this.heroisIniciais)
        // entrar em cada item e criar um id aleatorio
        .map(item => {
            return Object.assign({}, item, { id: Math.random() / 0.5})
        })
        // ordenar
        .sort(() => Math.random() - 0.5)
        this.tela.atualizarImagens(copias)
        // vamos esperar 1 segundo para atualizar a tela
        setTimeout(() => {
            this.esconderHerois(copias)
        }, 1000)
    }
    esconderHerois(herois) {
        // vamos trocar a imagem de todos os heróis existentes
        //pelo ícone padrão
        // como fizemos no construtor, vamos extrair somente o necessario
        // usando a sintaxe ({ chave: 1 }) estamos falando que vamos retornar
        // o que tiver dentro dos parenteses
        // quando não usamos: (exemlo do id), o JS entende que o nome
        // é o mesmo do valor. Ex: id: id, vira id,
        const heroisOcultos = herois.map(( { nome, id }) => ({
            id,
            nome,
            img: this.iconePadrao
        }))
        // atualizamos a tela com os herois ocultos
        this.tela.atualizarImagens(heroisOcultos)
        // guardamos os herois para trabalhar com eles depois
        this.heroisOcultos = heroisOcultos
    }
    exibirHerois(nomeDoHeroi) {
        // vamos procurar esse heroi pelo nome em nossos heroisIniciais
        // vamos obter somente a imagem dele
        const { img } = this.heroisIniciais.find(({ nome }) => nomeDoHeroi === nome)
        // vamos criar a função na tela para exibir somente o heroi selecionado
        this.tela.exibirHerois(nomeDoHeroi, img) 
    }
    verificarSelecao(id, nome) {
        const item = { id, nome }
        // vamos verificar a quantidade de heróis selecionados
        // e tomar ação se escolheu certo ou errado
        const heroisSelecionados = this.heroisSelecionados.length
        switch(heroisSelecionados) {
            case 0:
                // adiciona a escolha na lista, esperando pela proxima
                // clicada
                this.heroisSelecionados.push(item)
                break;
            case 1:
                // se a quantidade de escolhidos for 1, significa
                // que o usuário só pode escolher mais um
                // vamos obter o primeiro item da lista
                const [ opcao1 ] = this.heroisSelecionados
                // zerar itens para nao selecionar mais de dois
                this.heroisSelecionados = []
                // conferimos se os nomes e ids batem conforme
                // o esperado
                if(opcao1.nome === item.nome &&
                    // aqui verificamos se são ids diferentes para
                    // o usuario nao clicar duas vezes no mesmo
                    opcao1.id !== item.id
                    ) {
                        this.exibirHerois(item.nome)
                        // como padrão e true, não precisa passar nada
                        this.tela.exibirMensagem()
                        // para a execução
                        return;
                    }

                    this.tela.exibirMensagem(false)
                    // fim do case!
                    break;
        }
    }
    jogar() {
        this.embaralhar()
    }
}