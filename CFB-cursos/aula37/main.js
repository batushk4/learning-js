const caixa1 = document.querySelector("#caixa1");
const btn_c1 = document.querySelector("#c1");
const cursos = [...document.querySelectorAll(".c1")];

caixa1.addEventListener("click", () => {
    console.log("Clicou errado, mané");
});

cursos.map((el) => {
    el.addEventListener("click", (evt) => {
        evt.stopPropagation();
    });
});
