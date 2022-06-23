// 1 acessar a janela (browser)
// 2 pegar html inteiro
// 3 pegar botão
// 4 saber que está sendo clicado no botão

// 5 acessar a janela
// 6 pegar html todo
// 7 pegar o elements
// 8 mover o elements para direita

const btnRight = document.querySelector('.button-arrow.-right')
const btnLeft = document.querySelector('.button-arrow.-left')
const elements = document.querySelector('.elements')
let pixels = 100

btnRight.addEventListener('click', function() {
    pixels = pixels + 100
    elements.style = `transform: translateX(${pixels}px);`
})

btnLeft.addEventListener('click', function() {
    pixels = pixels - 100
    elements.style = `transform: translateX(${pixels}px);`
})