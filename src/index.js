const button = document.querySelector(".form__button")
const form = document.querySelector(".form__container")
const binInput = document.querySelector(".form__input")
const message = document.querySelector(".form__message")
const resultValue = document.querySelector(".form__result")

//РАБОТА КНОПКИ 
function handleButton() {
    const bin = binInput.value
    resultValue.textContent = parseInt(bin, 2)
}

button.addEventListener("click", handleButton)

form.addEventListener("submit", (e) => {
    e.preventDefault()
})

//ВАЛИДАЦИЯ ИНПУТА
function validateImput() {
    let valid = true
    resultValue.textContent = "результат"
    const pattern = /[^0-1]/g
    const input = binInput.value
    if (input.length === 0) {
        message.textContent = "введите число"
        valid = false
    } else if (pattern.test(input)) {
        valid = false
        message.textContent = "введите число в двоичной системе"
    }
    if (!valid) {
        button.setAttribute("disabled", true)
    } else {
        message.textContent = ""
        button.removeAttribute("disabled")
    }
    
}

// СОБЫТИЯ ИНПУТА
binInput.addEventListener("input", validateImput)
