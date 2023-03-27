let planoBasic = document.querySelector('.basic')
let digitalBasic = planoBasic.querySelector('.digital')
let fisicoBasic = planoBasic.querySelector('.fisico')
let planoPremium = document.querySelector('.premium')
let digitalPremium = planoPremium.querySelector('.digital')
let fisicoPremium = planoPremium.querySelector('.fisico')
let planoGold = document.querySelector('.gold')
let digitalGold = planoGold.querySelector('.digital')
let fisicoGold = planoGold.querySelector('.fisico')
let preco = document.querySelector('.valor-pago')
digitalBasic.addEventListener('click', () => {
    preco.innerHTML = 'R$12,99'
    digitalBasic.classList.add('selecionado')
    fisicoBasic.classList.remove('selecionado')
    digitalPremium.classList.remove('selecionado')
    fisicoPremium.classList.remove('selecionado')
    digitalGold.classList.remove('selecionado')
    fisicoGold.classList.remove('selecionado')
})
fisicoBasic.addEventListener('click', () => {
    preco.innerHTML = 'R$15,99'
    digitalBasic.classList.remove('selecionado')
    fisicoBasic.classList.add('selecionado')
    digitalPremium.classList.remove('selecionado')
    fisicoPremium.classList.remove('selecionado')
    digitalGold.classList.remove('selecionado')
    fisicoGold.classList.remove('selecionado')
})
digitalPremium.addEventListener('click', () => {
    preco.innerHTML = 'R$17,99'
    digitalBasic.classList.remove('selecionado')
    fisicoBasic.classList.remove('selecionado')
    digitalPremium.classList.add('selecionado')
    fisicoPremium.classList.remove('selecionado')
    digitalGold.classList.remove('selecionado')
    fisicoGold.classList.remove('selecionado')
})
fisicoPremium.addEventListener('click', () => {
    preco.innerHTML = 'R$20,99'
    digitalBasic.classList.remove('selecionado')
    fisicoBasic.classList.remove('selecionado')
    digitalPremium.classList.remove('selecionado')
    fisicoPremium.classList.add('selecionado')
    digitalGold.classList.remove('selecionado')
    fisicoGold.classList.remove('selecionado')
})
digitalGold.addEventListener('click', () => {
    preco.innerHTML = 'R$23,99'
    digitalBasic.classList.remove('selecionado')
    fisicoBasic.classList.remove('selecionado')
    digitalPremium.classList.remove('selecionado')
    fisicoPremium.classList.remove('selecionado')
    digitalGold.classList.add('selecionado')
    fisicoGold.classList.remove('selecionado')
})
fisicoGold.addEventListener('click', () => {
    preco.innerHTML = 'R$28,99'
    digitalBasic.classList.add('selecionado')
    fisicoBasic.classList.remove('selecionado')
    digitalPremium.classList.remove('selecionado')
    fisicoPremium.classList.remove('selecionado')
    digitalGold.classList.remove('selecionado')
    fisicoGold.classList.add('selecionado')
})
