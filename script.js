let isFocusing = false;
let intervalId;

const timerElem = document.querySelector('.timer')

const form = document.querySelector('form')
form.addEventListener('submit', formSubmitHandler)
let startTime;

function formSubmitHandler(event) {
    event.preventDefault()
    const [input, btn] = this.children
    if (isFocusing) {
        input.style.borderBottom = '0.2rem solid'
        btn.textContent = "+"
        isFocusing = false
        startTime = undefined
        clearInterval(intervalId)
        // timerElem.textContent = '00:00:00'
    } else {
        input.style.borderBottom = 'none'
        btn.textContent = "—"
        isFocusing = true
        startTime = Date.now()
        intervalId = setInterval(updateTimer, 1000)
    }
}

function calculateElapsedTime() {
    const currentTime = Date.now()
    const difference = currentTime - startTime 
    const seconds = (Math.floor(difference / 1000) % 60).toString().padStart(2, '0')
    const minutes = Math.floor((difference / 1000 / 60) % 60).toString().padStart(2, '0')
    const hours = Math.floor((difference / 1000 / 60 / 60) % 60).toString().padStart(2, '0')
    return `${hours}:${minutes}:${seconds}`
}

function updateTimer() {
    timerElem.textContent = calculateElapsedTime()
}

