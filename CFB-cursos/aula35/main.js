const caixa1 = document.getElementById("caixa1");
const caixa2 = document.getElementById("caixa2");
const btn = document.getElementById("btn_copiar");
const todosCursos = [...document.getElementsByClassName("curso")];

todosCursos.map((el) => {
    el.addEventListener("click", (evt) => {
        const curso = evt.target;
        curso.classList.toggle("selecionado");
    });
});

btn.addEventListener("click", () => {
    const cursosSelecionados = [
        ...document.getElementsByClassName("selecionado"),
    ];
    cursosSelecionados.map((el) => {
        caixa2.appendChild(el);
    });
});
