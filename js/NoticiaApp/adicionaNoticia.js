import { Noticia } from "./Noticia.js";
import { Noticias } from "./Noticias.js";

let btnAdiconaNoticiaNaHome = document.getElementById('btnAdiconaNoticiaNaHome')
let noticias = JSON.parse(localStorage.getItem('noticias')) ? JSON.parse(localStorage.getItem('noticias')) : new Noticias()
console.log(noticias)

if(JSON.parse(localStorage.getItem('noticias'))) {
    btnAdiconaNoticiaNaHome.addEventListener('click', () => {
        let imgStorage = JSON.parse(localStorage.getItem('img')) || [];
        let titulo = JSON.parse(localStorage.getItem('titulo')) || [];
        let subtitulo = JSON.parse(localStorage.getItem('subtitulo')) || [];
        let id = JSON.parse(localStorage.getItem('id')) || 0;
        let noticiaNova = new Noticia(titulo, subtitulo, imgStorage, id)
        noticias.push(noticiaNova)
        console.log(noticias)
        localStorage.setItem('noticias' ,JSON.stringify(noticias))
    })
} else {
    btnAdiconaNoticiaNaHome.addEventListener('click', () => {
        let imgStorage = JSON.parse(localStorage.getItem('img')) || [];
        let titulo = JSON.parse(localStorage.getItem('titulo')) || [];
        let subtitulo = JSON.parse(localStorage.getItem('subtitulo')) || [];
        let id = JSON.parse(localStorage.getItem('id')) || 0;
        let noticiaNova = new Noticia(titulo, subtitulo, imgStorage, id)
        noticias.adiciona(noticiaNova)
        console.log(noticias.lista())
        localStorage.setItem('noticias' ,JSON.stringify(noticias.lista()))
    })
}
