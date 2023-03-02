const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

//pega o estilo
const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#FFFFFF';
}



