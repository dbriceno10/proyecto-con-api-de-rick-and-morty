export default class Character {
    constructor({name, image, gender, species, status, origin, location, episode}) {
        this.name = name
        this.image = image
        this.gender = gender
        this.species = species
        this.status = status
        this.origin = origin
        this.location = location
        this.episode = episode
        this.templateName = document.getElementById("name")
        this.templateImg= document.getElementById("photo")
        this.templateSpecies = document.getElementById("specie")
        this.templateGender = document.getElementById("gender")
        this.templateStatus = document.getElementById("status")
        this.templateOrigin = document.getElementById("origin")
        this.templateLocation = document.getElementById("location")
        this.firstAp = document.getElementById("first-ap")
        this.lastAp = document.getElementById("last-ap")
        // this.placeholderBackground = document.getElementById("placeholder-background")
        this.render()
        this.getAparitions()
        // this.renderEpisodes()
    }
    consulta() {
        console.log(this.name)
        console.log(this.image)
        console.log(this.gender)
        console.log(this.species)
        console.log(this.status)
        console.log(this.origin.name)
        console.log(this.location.name)
        console.log(this.episode[0])
        console.log(this.episode[this.episode.length - 1])
    }
    render() {
        this.templateName.innerHTML = `<b>${this.name}`
        // this.placeholderBackground.innerHTML = `<b>${this.name}`
        this.templateImg.innerHTML = `<img src="${this.image}" alt="${this.name} id: ${this.id}" title="Name: ${this.name} Number(id): ${this.id}">`
        this.templateSpecies.innerHTML = `<div class="text">Species: ${this.species}</div>`
        this.templateGender.innerHTML = `<div class="text">Gender: ${this.gender}</div>`
        this.templateStatus.innerHTML = `<div class="text">Status: ${this.status}</div>`
        if(this.location.name != this.origin.name) {
            this.templateOrigin.innerHTML = `<div class="text">Origin: ${this.origin.name}</div>`
            this.templateLocation.innerHTML = `<div class="text">Current Location: ${this.location.name}</div>`
        } else {
            this.templateOrigin.innerHTML = `<div class="text">Origin: ${this.origin.name}</div>`
            this.templateLocation.innerHTML = ""
        }
    }
    async getAparitions() {
            try {
                const responseF = await fetch(this.episode[0])
                const dataF = await responseF.json()
                const responseL = await fetch(this.episode[this.episode.length - 1])
                const dataL = await responseL.json()
                const firstAparition = dataF.name
                const lastAparition = dataL.name
                console.log(`Esta es la primera aparición ${firstAparition}`)
                console.log(`Esta es la última aparición ${lastAparition}`)
                if(dataF.id != dataL.id) {
                    this.firstAp.innerHTML = `<div class="text">First Aparition: ${dataF.name} (${dataF.episode}) - ${dataF.air_date}</div>`
                    this.lastAp.innerHTML = `<div class="text">Last Aparition: ${dataL.name} (${dataL.episode}) - ${dataL.air_date}</div>`
                } else {
                    this.firstAp.innerHTML = `<div class="text">First Aparition: ${dataF.name} (${dataF.episode}) - ${dataF.air_date}</div>`
                    this.lastAp.innerHTML = ""
                }
            } catch(error) {
                console.log(error)
            }
        }
        // async getLastAparition() {
        //     try {
        //         const response2 = await fetch(this.episode[this.episode.length - 1])
        //         const data2 = await response2.json()
        //         const lastAparition = data2.name
        //         console.log(`Esta es la última aparición ${lastAparition}`)
        //     } catch(error) {
        //         console.log(error)
        //     }
        // }
}