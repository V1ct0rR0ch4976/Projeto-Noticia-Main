let sectionOpcoes = document.getElementById('options')
let required2 = document.querySelectorAll('.required-2')
let required3 = document.querySelectorAll('.required-3')
let btnCriaNoticia = document.getElementById('btnCriaNoticia')

if(typeof item[0] == undefined || item[0].perfil == 0) {
    sectionOpcoes.innerHTML = ''
    btnCriaNoticia.innerHTML = ''
} else if(item[0].perfil <= 1) {
    required2.forEach(element => {
        element.innerHTML = ''
    })
    required3.forEach(element => {
        element.innerHTML = ''
    })
} else if(item[0].perfil <= 2) {
    required3.forEach(element => {
        element.innerHTML = ''
    })
}
