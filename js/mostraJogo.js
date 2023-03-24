let valor1 = 60;
let valor2 = 100;
let areaJogo = document.querySelector('#areaJogo')

let numeroParaAparecerOjogo = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * valor2 + 1)
}
console.log(numeroParaAparecerOjogo)

if(numeroParaAparecerOjogo == 69) {
    areaJogo.innerHTML += `
        <a href="jogo.html"><div class="jogoPage">Jogo do número</div></a>
    `
}