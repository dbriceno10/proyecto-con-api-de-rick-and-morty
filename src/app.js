const returnApiCharacter = (API, id) => `${API}${id}`
const render = (data, dataF, dataL) => {
    templateName.innerHTML = `<b>${data.name}`
    // placeholderBackground.innerHTML = `<b>${data.name}`
    templateImg.innerHTML = `<img src="${data.image}" alt="${data.name} id: ${data.id}" title="Name: ${data.name} Number(id): ${data.id}">`
    templateSpecies.innerHTML = `<div class="text">Species: ${data.species}</div>`
    templateGender.innerHTML = `<div class="text">Gender: ${data.gender}</div>`
    templateStatus.innerHTML = `<div class="text">Status: ${data.status}</div>`
    if(data.location.name != data.origin.name) {
        templateOrigin.innerHTML = `<div class="text">Origin: ${data.origin.name}</div>`
        templateLocation.innerHTML = `<div class="text">Current Location: ${data.location.name}</div>`
    } else {
        templateOrigin.innerHTML = `<div class="text">Origin: ${data.origin.name}</div>`
        templateLocation.innerHTML = ""
    }
    if(dataF.id != dataL.id) {
        firstAp.innerHTML = `<div class="text">First Aparition: ${dataF.name} (${dataF.episode}) - ${dataF.air_date}</div>`
        lastAp.innerHTML = `<div class="text">Last Aparition: ${dataL.name} (${dataL.episode}) - ${dataL.air_date}</div>`
    } else {
        firstAp.innerHTML = `<div class="text">First Aparition: ${dataF.name} (${dataF.episode}) - ${dataF.air_date}</div>`
        lastAp.innerHTML = ""
    }
}
async function fetchData(id) {
    const api = returnApiCharacter(API, id)
	try {
		const response = await fetch(api)
		const data = await response.json()
        console.log(data)
        const firstAparition = data.episode[0]
        const LastAparition = data.episode[data.episode.length - 1]
        const responseF = await fetch(firstAparition)
        const dataF = await responseF.json()
        const responseL = await fetch(LastAparition)
        const dataL = await responseL.json()
        render(data, dataF, dataL)
    } catch (error) {
		console.log(error)
	}
}
async function countId(API) {
    try {
        const response = await fetch(API)
        const data = await response.json()
        maxId = data.info.count
    } catch (error) {
        console.error(error)
    }
}
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