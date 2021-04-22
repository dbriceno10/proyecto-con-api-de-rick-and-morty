import API from "../src/api.js"
import Character from "../src/character.js"
const previusBtn = document.getElementById("previus")
previusBtn.addEventListener("click", changePreviusBtn)
const nextBtn = document.getElementById("next")
nextBtn.addEventListener("click", changeNextBtn)
const RMAPI = `https://rickandmortyapi.com/api/character/`
const new_API = new API(RMAPI)
let maxId = 0
async function countId(API) {
    try {
        const response = await fetch(API)
        const data = await response.json()
        maxId = data.info.count
    } catch (error) {
        console.error(error)
    }
}
countId(RMAPI)
nextBtn.addEventListener("click", changeNextBtn)
let item = localStorage.getItem("id")
let id = Number(item)
console.log(`actual id ${id}`)
new_API.getCharacter(id)
async function changeNextBtn() {
    id+=1
    if (id <= 0) {
        id = 1
    } else if (id > maxId) {
        id = maxId
    }
    const actualCharacter = await new_API.getCharacter(id)
    const char = new Character(actualCharacter)
    console.log(`char ${char}`)
    localStorage.setItem("id", id)
    console.log(`new id ${id}`)
}
async function changePreviusBtn() {
    id-=1
    if (id <= 0) {
        id = 1
    } else if (id > maxId) {
        id = maxId
    }
    const actualCharacter = await new_API.getCharacter(id)
    new Character(actualCharacter)
    localStorage.setItem("id", id)
    console.log(`new id ${id}`)
}
async function appReady(id) {
    let actualCharacter
    if (id <= 0) {
        actualCharacter = await new_API.getCharacter(1)
        new Character(actualCharacter)
    } else {
        actualCharacter = await new_API.getCharacter(id)
        new Character(actualCharacter)
    }
    console.log(maxId)
}
appReady(id)
// async function initApp(initCharacterId) {
//     const characterData = await new_API.getCharacter(initCharacterId)
//     console.log(characterData)
//     const char = new Character(characterData)
//     char.consulta()
//   }

//   initApp(id)
// const characterData = await new_API.getCharacter(id)
// const char = new Character(characterData)