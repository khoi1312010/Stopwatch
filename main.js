const timer = document.getElementById('timer');
const timer2 = document.getElementById('timer2');
const timer3 = document.getElementById('timer3');
const timer4 = document.getElementById('timer4');
const timer5 = document.getElementById('timer5');
const stopwatchStart = null;
let [seconds, minutes] = [0, 0];

function stopwatch(){
    seconds++;
    if (seconds == 60){
        seconds = 0;
        minutes++;
    }
    if (minutes == 60){
        minutes = 0;
    }
    let mins = minutes < 10 ? "0" + minutes : minutes;
    let secs = seconds < 10 ? "0" + seconds : seconds;

    timer.innerHTML = mins + ':' + secs;
}

function stopwatch2(){
    seconds++;
    if (seconds == 60){
        seconds = 0;
        minutes++;
    }
    if (minutes == 60){
        minutes = 0;
    }
    let mins = minutes < 10 ? "0" + minutes : minutes;
    let secs = seconds < 10 ? "0" + seconds : seconds;

    timer2.innerHTML = mins + ':' + secs;
}

function stopwatch3(){
    seconds++;
    if (seconds == 60){
        seconds = 0;
        minutes++;
    }
    if (minutes == 60){
        minutes = 0;
    }
    let mins = minutes < 10 ? "0" + minutes : minutes;
    let secs = seconds < 10 ? "0" + seconds : seconds;

    timer3.innerHTML = mins + ':' + secs;
}

function stopwatch4(){
    seconds++;
    if (seconds == 60){
        seconds = 0;
        minutes++;
    }
    if (minutes == 60){
        minutes = 0;
    }
    let mins = minutes < 10 ? "0" + minutes : minutes;
    let secs = seconds < 10 ? "0" + seconds : seconds;

    timer4.innerHTML = mins + ':' + secs;
}

function stopwatch5(){
    seconds++;
    if (seconds == 60){
        seconds = 0;
        minutes++;
    }
    if (minutes == 60){
        minutes = 0;
    }
    let mins = minutes < 10 ? "0" + minutes : minutes;
    let secs = seconds < 10 ? "0" + seconds : seconds;

    timer5.innerHTML = mins + ':' + secs;
}


function start(){
    if(stopwatchStart !== null){
        clearInterval(stopwatchStart);
    }
    stopwatchStart = setInterval(stopwatch,1000);
}

function stop(){
    clearInterval(stopwatchStart);
    [seconds, minutes] = [0, 0];
    timer.innerHTML = "00:00";
}

function start2(){
    if(stopwatchStart !== null){
        clearInterval(stopwatchStart);
    }
    stopwatchStart = setInterval(stopwatch2,1000);
}

function stop2(){
    clearInterval(stopwatchStart);
    [seconds, minutes] = [0, 0];
    timer.innerHTML = "00:00";
}

function start3(){
    if(stopwatchStart !== null){
        clearInterval(stopwatchStart);
    }
    stopwatchStart = setInterval(stopwatch3,1000);
}

function stop3(){
    clearInterval(stopwatchStart);
    [seconds, minutes] = [0, 0];
    timer.innerHTML = "00:00";
}

function start4(){
    if(stopwatchStart !== null){
        clearInterval(stopwatchStart);
    }
    stopwatchStart = setInterval(stopwatch4,1000);
}

function stop4(){
    clearInterval(stopwatchStart);
    [seconds, minutes] = [0, 0];
    timer.innerHTML = "00:00";
}

function start5(){
    if(stopwatchStart !== null){
        clearInterval(stopwatchStart);
    }
    stopwatchStart = setInterval(stopwatch5,1000);
}

function stop5(){
    clearInterval(stopwatchStart);
    [seconds, minutes] = [0, 0];
    timer.innerHTML = "00:00";
}