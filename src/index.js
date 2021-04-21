// import { returnApiCharacter, fetchData, countId, callToAction, changeButton, keyboard} from "../src/app.js"
window.onload = () => {
    // templateName = document.getElementById("name")
    // templateImg= document.getElementById("photo")
    // templateSpecies = document.getElementById("specie")
    // templateGender = document.getElementById("gender")
    // templateStatus = document.getElementById("status")
    // templateOrigin= document.getElementById("origin")
    // templateLocation = document.getElementById("location")
    // firstAp = document.getElementById("first-ap")
    // lastAp = document.getElementById("last-ap")
    // placeholderBackground = document.getElementById("placeholder-background")
    document.onkeydown = keyboard
}
let templateName = document.getElementById("name")
let templateImg= document.getElementById("photo")
let templateSpecies = document.getElementById("specie")
let templateGender = document.getElementById("gender")
let templateStatus = document.getElementById("status")
let templateOrigin= document.getElementById("origin")
let templateLocation = document.getElementById("location")
let firstAp = document.getElementById("first-ap")
let lastAp = document.getElementById("last-ap") 
const API = `https://rickandmortyapi.com/api/character/`
let maxId = 0
let operador = "clear"
countId(API)
let item = localStorage.getItem("id")
let id = Number(item)
console.log(`actual id ${id}`)
if (id <= 0) {
    fetchData(1)
} else {
    fetchData(id)
}