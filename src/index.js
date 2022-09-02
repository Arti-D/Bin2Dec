const button = document.querySelector(".form__button")
const form = document.querySelector(".form__container")
const binInput = document.querySelector(".form__input")



//РАБОТА КНОПКИ 
function handleButton() {
    const bin = binInput.value
    const resultValue = document.querySelector(".form__result")
    resultValue.textContent = parseInt(bin, 2)
    console.log('click');
}

button.addEventListener("click", handleButton)

form.addEventListener("submit", (e) => {
    e.preventDefault()
})

//ВАЛИДАЦИЯ ИНПУТА
function validateImput() {
    let valid = true
    const pattern = /[2-9]/
    const input = binInput.value
    if (input.length === 0) {
        console.log("Введите число");
        valid = false
    } else if (pattern.test(input)) {
        valid = false
        console.log("двоичный код должен быть чел");
    }
    if (!valid) {
        button.setAttribute("disabled", true)
    } else {
        button.removeAttribute("disabled")
    }
    
}

// СОБЫТИЯ ИНПУТА
binInput.addEventListener("input", validateImput)
