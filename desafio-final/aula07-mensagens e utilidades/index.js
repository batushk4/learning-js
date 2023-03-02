function onLoad () {
    // 1o
    // console.log(
    //     `Carregou a tela!!`, Tela, JogoDaMemoria
    // )
    
    /*
    2o
    const heroi = {
        img: './arquivos/batman.png',
        nome: 'batman'
    }
    const codigoHtml = Tela.setTemplate(heroi)
    Tela.alterarConteudoHTML(codigoHtml.concat(codigoHtml).concat(codigoHtml))
    */
   const dependencias = {
       tela: Tela,
       util: Util
   }
   // inicializamos o jogo da memória
   const jogoDaMemoria = new JogoDaMemoria(dependencias)
   jogoDaMemoria.inicializar()
}

window.onload = onLoad