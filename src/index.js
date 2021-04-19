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
let operador
let nombre = document.getElementById("name")
let foto = document.getElementById("photo")
let especie = document.getElementById("specie")
let genero = document.getElementById("gender")
let estatus = document.getElementById("status")
let origen = document.getElementById("origin")
let ubicacion = document.getElementById("location")
let firstAp = document.getElementById("first-ap")
let lastAp = document.getElementById("last-ap")

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
        foto.innerHTML = `<img src="${data.image}" alt="${data.name}">`
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
        for(let i = 0; i <= data.info.count; i++) {
            maxId = i
        }
    } catch (error) {
        console.error(error)
    }
}
countId()
let id = 1
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
    } else {
        id-=1
        if (id <= 0) {
            id = 1
        } else if (id > maxId) {
            id = maxId
        }
    }
    fetchData(id)
}

