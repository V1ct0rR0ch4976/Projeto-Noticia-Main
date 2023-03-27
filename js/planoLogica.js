let basicoPlano = document.querySelector('.basic')
let basicoDigital = basicoPlano.querySelector('.digital')
let basicoFisico = basicoPlano.querySelector('.fisico')
let premiumPlano = document.querySelector('.premium')
let premiumDigital = premiumPlano.querySelector('.digital')
let premiumFisico = premiumPlano.querySelector('.fisico')
let goldPlano = document.querySelector('.gold')
let goldDigital = goldPlano.querySelector('.digital')
let goldFisico = goldPlano.querySelector('.fisico')
let plano = JSON.parse(localStorage.getItem('plano')) || 0;

basicoDigital.addEventListener('click', () => {
    plano = 1
    localStorage.setItem('plano' ,JSON.stringify(plano))
})
basicoFisico.addEventListener('click', () => {
    plano = 1
    localStorage.setItem('plano' ,JSON.stringify(plano))
})
premiumDigital.addEventListener('click', () => {
    plano = 2
    localStorage.setItem('plano' ,JSON.stringify(plano))
})
premiumFisico.addEventListener('click', () => {
    plano = 2
    localStorage.setItem('plano' ,JSON.stringify(plano))
})
goldDigital.addEventListener('click', () => {
    plano = 3
    localStorage.setItem('plano' ,JSON.stringify(plano))
})
goldFisico.addEventListener('click', () => {
    plano = 3
    localStorage.setItem('plano' ,JSON.stringify(plano))
})

