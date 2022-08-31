const resultContainer = document.querySelector(".form__result");
const button = document.querySelector(".form__button")
const form = document.querySelector(".form__container")
const inputValue = document.querySelector(".form__input")



function handleButton(bin) {
    console.log("click")
    resultContainer.textContent = parseInt(bin, 2)
}

button.addEventListener("click", handleButton)
form.addEventListener("submit", (e) => {
    e.preventDefault()
})