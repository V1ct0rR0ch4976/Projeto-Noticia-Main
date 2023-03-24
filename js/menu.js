let btnHome = document.getElementById('btnHome');
let menu = document.querySelector('.menu');
let G3 = document.querySelector('.titulo-principal');
let noticias = document.querySelector('.noticias')
let noticia = noticias.querySelectorAll('.card')
let imgNoticia = document.querySelector('.img-noticia')
let imgBanner = document.querySelector('.imagem-banner')
let footer = document.querySelector('.titulo-footer')
const linkFuvest = document.querySelector('.linkFuvest')
let navbarOptionsNoticias = document.querySelector('.options-criaNoticia')

btnHome.addEventListener('click', () => {
    noticia.forEach(element => {
        if(element.classList.contains('col-1')) {
            element.classList.remove('col-sm-1');
            element.classList.remove('col-md-4')
            element.classList.remove('col-lg-4')
            element.classList.remove('col-xl-4')
            element.classList.remove('col-xxl-4')
        } else {
            element.classList.add('col-sm-1');
            element.classList.add('col-md-4')
            element.classList.add('col-lg-4')
            element.classList.add('col-xl-4')
            element.classList.add('col-xxl-4')
        }
    })
    
    if(menu.classList.contains('oculto')){
        menu.classList.remove('oculto')
        G3.classList.add('titulo-principal-oculto')
        footer.classList.add('titulo-footer-oculto')
        noticias.classList.add('noticia-oculto')
        imgBanner.classList.add('imagem-banner-oculto')
        navbarOptionsNoticias.classList.add('options-criaNoticia-oculto')
    }else{
        menu.classList.add('oculto')
        G3.classList.remove('titulo-principal-oculto')
        footer.classList.remove('titulo-footer-oculto')
        noticias.classList.remove('noticia-oculto');
        imgBanner.classList.remove('imagem-banner-oculto')
        navbarOptionsNoticias.classList.remove('options-criaNoticia-oculto')
}})

linkFuvest.addEventListener('click', () => {
    window.location('https://www.fuvest.br/wp-content/uploads/fuvest2023_chamada_1.pdf')
})
