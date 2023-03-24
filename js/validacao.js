function verificaSeOChuteEValido(chute) {
    const numero = +chute

    if (chuteForValido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido!</div>'
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: Fale um valor que esteja entre ${maiorValor} e ${menorValor}</div>`
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id="btn-jogar" class="btn-jogar">Jogar Novamente</button>
        `
    } else if(numero < numeroSecreto) {
        elementoChute.innerHTML += `<div class="texto-principal">O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
    } else if(numero > numeroSecreto) {
        elementoChute.innerHTML += `<div class="texto-principal">O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`
    }
}

function chuteForValido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor 
}

document.body.addEventListener('click', event => {
    if(event.target.id == 'btn-jogar') {
        window.location.reload()
    }
})