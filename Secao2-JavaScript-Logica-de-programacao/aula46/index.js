// setInterval e serTimeOut

function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

// configura uma função de intervalo de tempo
// function funcaoDoInterval() {
//     console.log(mostraHora());
// }

const timer = setInterval(function() {
    console.log(mostraHora);
}, 1000)

setTimeout(function() {
    clearInterval(timer);
}, 3000);

setTimeout(function() {
    console.log('Olá, mundo');
}, 5000)


