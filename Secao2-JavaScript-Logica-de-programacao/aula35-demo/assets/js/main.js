const elementos = [
    {tag: 'p', texto: 'Qualquer texto que você quiser. 1'},
    {tag: 'div', texto: 'Qualquer texto que você quiser 2.'},
    {tag: 'section', texto: 'Qualquer texto que você quiser. 3'},
    {tag: 'footer', texto: 'Qualquer texto que você quiser. 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto;
    div.appendChild(tagCriada);
}

container.appendChild(div);


