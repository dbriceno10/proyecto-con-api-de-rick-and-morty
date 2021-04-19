window.onload = () => {
    nombre = document.getElementById("name")
    foto = document.getElementById("photo")
    especie = document.getElementById("specie")
    genero = document.getElementById("gender")
    estatus = document.getElementById("status")
    origen = document.getElementById("origin")
    ubicacion = document.getElementById("location")
    firstAp = document.getElementById("first-ap")
    lastAp = document.getElementById("last-ap")
    document.onkeydown = keyboard
}
const returnApiCharacter = (id) => `https://rickandmortyapi.com/api/character/${id}`
const API = `https://rickandmortyapi.com/api/character/`
// async function returnEpisode (url) {
//     const response = await fetch(url)
//     const data = await response.json()
//     try {
//         console.log(data.id)
//     } catch(error) {
//         console.error(error)
//     }
// }
let maxId = 0
let operador = "clear"
// let nombre = document.getElementById("name")
// let foto = document.getElementById("photo")
// let especie = document.getElementById("specie")
// let genero = document.getElementById("gender")
// let estatus = document.getElementById("status")
// let origen = document.getElementById("origin")
// let ubicacion = document.getElementById("location")
// let firstAp = document.getElementById("first-ap")
// let lastAp = document.getElementById("last-ap")

async function fetchData(id) {
    const API = returnApiCharacter(id)
	try {
		const response = await fetch(API)
		const data = await response.json()
        const firstAparition = data.episode[0]
        const LastAparition = data.episode[data.episode.length - 1]
        const responseF = await fetch(firstAparition)
        const dataF = await responseF.json()
        const responseL = await fetch(LastAparition)
        const dataL = await responseL.json()
        nombre.innerHTML = `Name: ${data.name}`
        foto.innerHTML = `<img src="${data.image}" alt="${data.name} id: ${data.id}" title="Name: ${data.name} Number(id): ${data.id}">`
        especie.innerHTML = `Specie: ${data.species}`
        genero.innerHTML = `Gender: ${data.gender}`
        estatus.innerHTML = `Status: ${data.status}`
        if(data.location.name != data.origin.name) {
            origen.innerHTML = `Origin: ${data.origin.name}`
            ubicacion.innerHTML = `Actual Locate: ${data.location.name}`
        } else {
            origen.innerHTML = `Origin: ${data.origin.name}`
        }
        firstAp.innerHTML = `First Aparition: ${dataF.name} (${dataF.episode}) On air: ${dataF.air_date}`
        if(dataF.id != dataL.id) {
            lastAp.innerHTML = `Last Aparition: ${dataL.name} (${dataL.episode}) On air: ${dataL.air_date}`
        }
    } catch (error) {
		console.log(error)
	}
}
async function countId() {
    try {
        const response = await fetch(API)
        const data = await response.json()
        // for(let i = 0; i <= data.info.count; i++) {
        //     maxId = i
        // }
        maxId = data.info.count
    } catch (error) {
        console.error(error)
    }
}
countId()
let item = localStorage.getItem("id")
let id = Number(item)
// console.log(`maxId ${maxId}`)
// if (id == 0) {
//     fetchData(1)
// } else if (id > maxId) {
//     fetchData(maxId)
// } else {
//     fetchData(id)
// }
// console.log(`maxId ${maxId}`)
console.log(`actual id ${id}`)
fetchData(id)
const callToAction = (action) => {
    operador = action
}
const changeButton = () => {
    if (operador == "+") {
        id+=1
        if (id <= 0) {
            id = 1
        } else if (id > maxId) {
            id = maxId
        }
        localStorage.setItem("id", id)
    } else {
        id-=1
        if (id <= 0) {
            id = 1
        } else if (id > maxId) {
            id = maxId
        }
        localStorage.setItem("id", id)
    }
    console.log(`new id ${id}`)
    fetchData(id)
}

const keyboard = (ev) => {
    const eve = ev || window.event
    let key = eve.keyCode
    if (key==37) {
        callToAction("-")
        changeButton()
    } 
    if (key==39) {
        callToAction("+")
        changeButton()
    }
}
