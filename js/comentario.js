let btnComenta = document.querySelector('#btn-comenta')
let newComentarioDiv = document.querySelector('.newComentarioDiv')
let nomeDoUsuario = document.querySelector('.nomeNoComentario')
let item = JSON.parse(localStorage.getItem("item")) || []
let comentarioArea = document.querySelector('.area-comentario')
let comentario = document.querySelector('.comentario')

btnComenta.addEventListener('click', (event) => {
    if(comentarioArea.value == '') {
        document.querySelector('.erro-comentario-digitar').classList.remove('d-none')
        throw new Error('Você precisa digitar algo antes de comentar!')
    } else if (item.length == 0) {
        document.querySelector('.erro-comentario-conta').classList.remove('d-none')
        throw new Error('Você precisa ter uma conta para poder comentar!')
    } else {
        document.querySelector('.erro-comentario').classList.add('d-none')
        document.querySelector('.erro-comentario-digitar').classList.add('d-none')
        comentario = event.target.parentNode.children[1].children[0];
        let newComentario = document.createElement('div');
        newComentario.classList.add('novo-comentario');
        nomeDoUsuario.innerHTML = item[0].nome
        newComentario.innerHTML = `${comentario.value}`;
        newComentarioDiv.appendChild(newComentario);
        comentario.value = '';
    }
    
});
