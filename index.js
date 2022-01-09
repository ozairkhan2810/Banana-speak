let translateInput = document.querySelector("#translate-input")
let translateButton = document.querySelector("#translate-button")
let translateOutput = document.querySelector("#translate-output")

const SERVER_URL = "https://api.funtranslations.com/translate/minion.json"

let getTranslatedURL = text => SERVER_URL + "?" + "text=" + text

let fetchTranslated = () => {
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

translateButton.addEventListener("click", fetchTranslated)
