// Declarando as variaveis
const dia = document.getElementById("days")
const hora = document.getElementById("hours")
const minuto = document.getElementById("mins")
const segundo = document.getElementById("seconds")

const newYears = "30 dec 2021"

function countdow(){

    const newYearsDate = new Date(newYears)
    const currentDate = new Date()

    const totalSeconds = (newYearsDate - currentDate) / 1000

    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds / 3600) % 24
    const mins = Math.floor(totalSeconds / 60) % 60
    const seconds = Math.floor(totalSeconds) % 60


    dia.innerHTML = days
    hora.innerHTML = formatTime(hours)
    minuto.innerHTML = formatTime(mins)
    segundo.innerHTML = formatTime(seconds)

}

function formatTime(time){
    return time < 10 ? `${time}` : time
}


// Chamar o contador
countdow()

setInterval(countdow, 1000)