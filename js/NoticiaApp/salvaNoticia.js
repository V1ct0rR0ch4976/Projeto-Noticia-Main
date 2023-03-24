let btnSalvar = document.getElementById('btnSalvar')
let viewData = document.getElementById('data-salvamento')
let dataStorage = JSON.parse(localStorage.getItem('data')) || [];

if(!typeof dataStorage[0] == undefined) {

}

viewData.innerHTML = `
    <p>Salvo ${dataStorage[0].dia}/${dataStorage[0].mes + 1}/${dataStorage[0].ano} às ${dataStorage[0].hora}</p>
`

btnSalvar.addEventListener('click', () => {
    let novaData = new Date()
    let novaDataCaracteristicas = novaData.toString().split(" ")
    let dia = novaDataCaracteristicas[2]
    let mes = novaData.getMonth()
    let ano = novaDataCaracteristicas[3]
    let hora = novaDataCaracteristicas[4].split(':', 2).toString()
    hora = hora.replace(',', ':')
    viewData.innerHTML = `
        <p>Salvo ${dia}/${mes + 1}/${ano} às ${hora}</p>
    `
    let dataSalvamento = {
        'dia': dia,
        'mes': mes,
        'ano': ano,
        'hora': hora
    }
    dataStorage.splice(0, 1)
    dataStorage.push(dataSalvamento)
    localStorage.setItem("titulo", JSON.stringify(titulo))
    localStorage.setItem("subtitulo", JSON.stringify(subtitulo))
    localStorage.setItem("texto", JSON.stringify(texto))
    localStorage.setItem("cor", JSON.stringify(cor))
    localStorage.setItem("img", JSON.stringify(imgStorage))
    localStorage.setItem("data", JSON.stringify(dataStorage))
})
