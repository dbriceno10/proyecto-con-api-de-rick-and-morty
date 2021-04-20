// import { returnApiCharacter, fetchData, countId, callToAction, changeButton, keyboard} from "../src/app.js"
window.onload = () => {
    templateName = document.getElementById("name")
    templateImg= document.getElementById("photo")
    templateSpecies = document.getElementById("specie")
    templateGender = document.getElementById("gender")
    templateStatus = document.getElementById("status")
    templateOrigin= document.getElementById("origin")
    templateLocation = document.getElementById("location")
    firstAp = document.getElementById("first-ap")
    lastAp = document.getElementById("last-ap")
    // placeholderBackground = document.getElementById("placeholder-background")
    document.onkeydown = keyboard
}

const API = `https://rickandmortyapi.com/api/character/`
let maxId = 0
let operador = "clear"

countId()
let item = localStorage.getItem("id")
let id = Number(item)
console.log(`actual id ${id}`)
if (id <= 0) {
    fetchData(1)
} else {
    fetchData(id)
}