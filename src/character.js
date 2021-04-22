export default class Character {
    constructor({name, image, gender, species, status, origin, location}) {
        this.name = name
        this.image = image
        this.gender = gender
        this.species = species
        this.status = status
        this.origin = origin
        this.location = location
        this.templateName = document.getElementById("name")
        this.templateImg= document.getElementById("photo")
        this.templateSpecies = document.getElementById("specie")
        this.templateGender = document.getElementById("gender")
        this.templateStatus = document.getElementById("status")
        this.templateOrigin = document.getElementById("origin")
        this.templateLocation = document.getElementById("location")
        this.render()
    }
    consulta() {
        console.log(this.name)
        console.log(this.image)
        console.log(this.gender)
        console.log(this.species)
        console.log(this.status)
        console.log(this.origin.name)
        console.log(this.location.name)
    }
    render() {
        this.templateName.innerHTML = `<b>${this.name}`
        // placeholderBackground.innerHTML = `<b>${this.name}`
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
}