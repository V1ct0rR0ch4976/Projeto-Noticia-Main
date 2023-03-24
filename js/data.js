let dataElement = document.getElementById('data')
let horario = document.getElementById('diaHorario')
let diaSemana = document.getElementById('diaSemana')
let data = new Date()
let dataCaracteristicas = data.toString().split(" ")
if(dataCaracteristicas[0] == 'Wed') {
    diaSemana.innerHTML = 'Qua'
} else if(dataCaracteristicas[0] == 'Thu') {
    diaSemana.innerHTML = 'Qui'
} else if(dataCaracteristicas[0] == 'Fri') {
    diaSemana.innerHTML = 'Sex'
} else if(dataCaracteristicas[0] == 'Sat') {
    diaSemana.innerHTML = 'Sab'
} else if(dataCaracteristicas[0] == 'Sun') {
    diaSemana.innerHTML = 'Dom'
} else if(dataCaracteristicas[0] == 'Mon') {
    diaSemana.innerHTML = 'Seg'
} else if(dataCaracteristicas[0] == 'Tue') {
    diaSemana.innerHTML = 'Ter'
}
horario.innerHTML = dataCaracteristicas[4].toString().split(':', 2)
horario.innerHTML = horario.innerHTML.replace(',', ':')
