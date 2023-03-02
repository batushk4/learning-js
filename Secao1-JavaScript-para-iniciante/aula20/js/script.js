function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    //uma maneira de se fazer
//    form.onsubmit = function (evento) {
//        evento.preventDefault();
//   };
//pegar um valor é nome.value    

//outra maneira de se fazer, porém mais moderna
    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        //criar um objeto para pegar um valor de uma variável
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} </p>`;
    }

    form.addEventListener('submit', recebeEventoForm);

}

meuEscopo();


