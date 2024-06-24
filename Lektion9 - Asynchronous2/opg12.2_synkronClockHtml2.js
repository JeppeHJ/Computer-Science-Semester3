let timerId;
let textArea = document.querySelector('#timerArea');
let buttonStart = document.querySelector('#start');
let buttonStop = document.querySelector('#stop');
let startTime;  // Gemmer starttidspunktet

function startTimer() {
    if (!timerId) {  // Tjek om timeren allerede kører
        startTime = new Date();  // Gemmer nuværende tidspunkt som starttidspunkt
        timerId = setInterval(() => {
            let now = new Date();
            let milliseconds = now - startTime; // Beregn forskellen i millisekunder
            textArea.textContent = milliseconds + " ms";
        }, 1); // Opdaterer hver millisekund
    }
}

buttonStart.addEventListener('click', () => {
    startTimer();
    console.log(timerId);
})

function stopTimer() {
    clearInterval(timerId);
    timerId = null; // Nulstiller timerId for at tillade genstart
}

buttonStop.addEventListener('click', () => {
    stopTimer();
    console.log(timerId);
})
