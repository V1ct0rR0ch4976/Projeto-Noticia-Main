const planoBasic = document.querySelector('.basic')
const digitalBasic = planoBasic.querySelector('.digital')
const fisicoBasic = planoBasic.querySelector('.fisico')
const planoPremium = document.querySelector('.premium')
const digitalPremium = planoPremium.querySelector('.digital')
const fisicoPremium = planoPremium.querySelector('.fisico')
const planoGold = document.querySelector('.gold')
const digitalGold = planoGold.querySelector('.digital')
const fisicoGold = planoGold.querySelector('.fisico')
const preco = document.querySelector('.valor-pago')
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
