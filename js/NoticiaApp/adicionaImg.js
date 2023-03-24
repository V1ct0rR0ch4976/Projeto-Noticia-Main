let divAdicionaImg = document.getElementById('div-adiciona-img')
let btnAdicionaImg = document.getElementById('btn-adiciona-img')
let campoURLImagem = document.getElementById('campo-Url-img')
let campoAltImagem = document.getElementById('campo-Alt-img')
let alertaAreaModalImg = document.querySelector('.alerta-preenche-url')
let imgStorage = JSON.parse(localStorage.getItem('img')) || [];

divAdicionaImg.innerHTML = `
    <img src="${imgStorage[0].url}" alt="${imgStorage[0].alt}">
`

btnAdicionaImg.addEventListener('click', () => {
    let url = campoURLImagem.value
    let alt = campoAltImagem.value
    if(url == '' || alt == '') {
        alertaAreaModalImg.classList.remove('d-none')
        throw new Error('Digite a URL para adicionar a imagem')
    } else {
        alertaAreaModalImg.classList.add('d-none')
        divAdicionaImg.innerHTML = `
            <img src="${url}" alt="${alt}">
        `
    }
    let img = {
        'url': url,
        'alt': alt
    }
    imgStorage.splice(0, 1)
    imgStorage.push(img)
})
