let timerId;
let seconds = 0;
let textArea =  document.querySelector('#timerArea');
let buttonStart = document.querySelector('#start');
let buttonStop = document.querySelector('#stop');

function startTimer() {
    timerId = setInterval(() => {
        seconds++;
        textArea.textContent = seconds;
    }, 1000);
}
    

buttonStart.addEventListener('click', () => {
    startTimer();
    console.log(timerId);
})

function stopTimer() {
    if (seconds > 0) {
        clearInterval(timerId);
    }
}

buttonStop.addEventListener('click', () => {
    stopTimer();
    console.log(timerId);
})
