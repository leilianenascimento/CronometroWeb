var segundos =0
var minutos =0
var interval

function start(){
    interval=setInterval(wach,10 )
}

function pause() {
    clearInterval(interval)
}

function stop () {
    clearInterval(interval)
    segundos=0
    minutos=0
    document.getElementById('relogio').innerText='00:00'
}

function wach(){
    segundos++
    if(segundos==60){
        minutos++
        segundos=0
    }
    document.getElementById('relogio').innerText=minutos+':'+segundos
}