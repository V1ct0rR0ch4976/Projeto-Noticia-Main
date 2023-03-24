let btnAdicionaTitulo = document.getElementById('adiciona-titulo')
let btnAdicionaSubtitulo = document.getElementById('adiciona-subtitulo')
let btnAdicionaTexto = document.getElementById('adiciona-texto')
let secaoNoticia = document.getElementById('secao-noticia')
let divAdicionaTitulo = document.getElementById('div-adiciona-titulo')
let divAdicionaSubtitulo = document.getElementById('div-adiciona-subtitulo')
let divAdicionaTexto = document.getElementById('div-adiciona-texto')
let dropdownAdicionaTexto = document.getElementById('dropdown-adiciona-texto')
let titulo = JSON.parse(localStorage.getItem('titulo')) || [];
let subtitulo = JSON.parse(localStorage.getItem('subtitulo')) || [];
let texto = JSON.parse(localStorage.getItem('texto')) || [];
let textoAtual = {
    "texto": ''
}
let subtituloAtual = {
    "texto": ''
}
let tituloAtual = {
    "texto": ''
}
showTextInScreenRecarregamento(titulo, subtitulo, texto)


btnAdicionaTitulo.addEventListener('click', () => {
    divAdicionaTitulo.innerHTML += `
        <textarea id="textarea-adicionaTexto" class="textarea-adicionaTexto" cols="30" rows="10"></textarea>
        <button class="btn-confirmaAdicao text-white">Adicionar</button>
    `
    let textarea = document.getElementById('textarea-adicionaTexto')
    let btnConfirmaAdicao = document.querySelector('.btn-confirmaAdicao')
    textarea.focus()
    btnConfirmaAdicao.addEventListener('click', () => {
        divAdicionaTitulo.innerHTML = `
            <h1 class="titulo-noticia">${textarea.value}</h1>
        `
        btnAdicionaTitulo.innerText = 'Editar título'
        tituloAtual.texto = `${textarea.value}`
        titulo.splice(0, 1)
        titulo.push(tituloAtual)
    })
})
btnAdicionaSubtitulo.addEventListener('click', () => {
    divAdicionaSubtitulo.innerHTML += `
        <textarea id="textarea-adicionaTexto" class="textarea-adicionaTexto" cols="30" rows="10"></textarea>
        <button class="btn-confirmaAdicao text-white">Adicionar</button>
    `
    let textarea = document.getElementById('textarea-adicionaTexto')
    let btnConfirmaAdicao = document.querySelector('.btn-confirmaAdicao')
    textarea.focus()
    btnConfirmaAdicao.addEventListener('click', () => {
        divAdicionaSubtitulo.innerHTML = `
        <p class="sub-title">${textarea.value}</p>
        `
        btnAdicionaSubtitulo.innerText = 'Editar subtítulo'
        subtituloAtual.texto = `${textarea.value}`
        subtitulo.splice(0, 1)
        subtitulo.push(subtituloAtual)
    })
})
btnAdicionaTexto.addEventListener('click', () => {
    divAdicionaTexto.innerHTML += `
        <div id="div-temporaria">
            <textarea id="textarea-adicionaTexto" class="textarea-adicionaTexto" cols="30" rows="10"></textarea>
            <button class="btn-confirmaAdicao text-white">Adicionar</button>
        </div>
    `
    let textarea = document.getElementById('textarea-adicionaTexto')
    let btnConfirmaAdicao = document.querySelector('.btn-confirmaAdicao')
    let divTemporaria = document.getElementById('div-temporaria')
    textarea.focus()
    btnConfirmaAdicao.addEventListener('click', () => {
        divTemporaria.innerHTML = ``
        divAdicionaTexto.innerHTML += `
            <section class="noticia-texto">
                <p>${textarea.value}</p>
            </section>
        `
        textoAtual.texto = `${textarea.value}`
        texto.splice(0, 1)
        texto.push(textoAtual)
    })
})

function showTextInScreenRecarregamento(titulo, subtitulo, texto) {
    let mensagem = 'Texto ainda não definido'
    let tituloNovo = titulo[0] == undefined ? mensagem  : titulo[0].texto
    let subtituloNovo = subtitulo[0] == undefined ? mensagem  : subtitulo[0].texto
    let textoNovo = texto[0] == undefined ?  mensagem : texto[0].texto
    divAdicionaTitulo.innerHTML = `
        <h1 class="titulo-noticia">${tituloNovo}</h1>
    `
    divAdicionaSubtitulo.innerHTML = `
        <p class="sub-title">${subtituloNovo}</p>
    `
    divAdicionaTexto.innerHTML = `
        <section class="noticia-texto">
            <p>${textoNovo}</p>
        </section>
    `
}
