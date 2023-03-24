const elementoChute = document.querySelector('#chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak);

function onSpeak(event) {
    const chute = event.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificaSeOChuteEValido(chute)
    console.log(chute)
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div class="texto-principal">Você disse: </div>
        <span class="box numero-chute">${chute}</span>
       `
}

recognition.addEventListener('end', () => recognition.start())
