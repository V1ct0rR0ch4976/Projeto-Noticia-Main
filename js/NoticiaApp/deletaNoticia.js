let noticiasList = JSON.parse(localStorage.getItem('noticias'))
let btnDeletaNoticia = document.querySelectorAll('#btnDeletaNoticia')

btnDeletaNoticia.forEach(element => {
    element.addEventListener('click', (event) => {
        let itemDeletado = event.target
        let indice = itemDeletado.getAttribute('data-indice')
        console.log(indice);
        noticiasList.splice(indice, 1)
        localStorage.setItem('noticias', JSON.stringify(noticiasList))
        itemDeletado.parentNode.parentNode.classList.add('d-none')
    })
})
