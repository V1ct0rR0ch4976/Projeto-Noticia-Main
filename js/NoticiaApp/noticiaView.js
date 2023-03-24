let sectionNoticias = document.getElementById('noticias')
let noticiasLista = JSON.parse(localStorage.getItem('noticias'))

noticiasLista.forEach((element) => {
    sectionNoticias.innerHTML += `
        <div class="card noticia d-inline-block col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-1 col-1" >
            <img src="${element._imagem[0].url}" class="imagem-fome" alt="${element._imagem[0].alt}">
            <div class="card-body">
                <h5 class="card-title titulo-importante">${element._titulo[0].texto}</h5>
                <p class="card-text" id="p-do-ngc-la">${element._subtitulo[0].texto}</p>
                <a href="novaNoticia.html" class="btn btn-primary btn-card">Saiba mais!</a>
            </div>
        </div>
    `
})
