let translateInput = document.querySelector("#translate-input")
let translateButton = document.querySelector("#translate-button")
let translateOutput = document.querySelector("#translate-output")

const SERVER_URL = "https://api.funtranslations.com/translate/minion.json";

translateButton.addEventListener("click", fetchTranslated)

function getTranslatedURL(text) {
    return SERVER_URL + "?" + "text=" + text
}

function fetchTranslated() {
    let inputText = translateInput.value

    fetch(getTranslatedURL(inputText))
        .then(res => res.json())
        .then(data => {
            var translatedText = data.contents.translated
            translateOutput.innerText = translatedText
        })
        .catch(err => {
            console.log(err)
            alert("Server did not respond")
        })
}