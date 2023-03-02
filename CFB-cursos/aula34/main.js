// const c1 = document.getElementById('c1')

const cursos = [...document.getElementsByClassName('curso')]

cursos.map((el) => {
    el.addEventListener('click', (evt) => {
        const el = evt.target
        el.classList.add('destaque')
    })
})

// c1.addEventListener("click", (evt) => {
//     const el = evt.target
//     el.classList.add('destaque')
//  })


// c1.addEventListener("click", () => { alert('Imbrochável') })

// const msg = () => alert('Apertou')


