export default class API {
    constructor(api) {
        this.api = api
    }
    async getCharacter(id) {
        try {
            const response = await fetch(`${this.api}${id}`)
            const data = await response.json()
            console.log(data)
            return data
            // const firstAparition = data.episode[0]
            // const LastAparition = data.episode[data.episode.length - 1]
            // const responseF = await fetch(firstAparition)
            // const dataF = await responseF.json()
            // const responseL = await fetch(LastAparition)
            // const dataL = await responseL.json()
            // render(data, dataF, dataL)
        } catch (error) {
            console.log(error)
        }
    }
    // async getFirstAparition(id) {
    //     try {
    //         const response = await fetch(`${this.api}${id}`)
    //         const data = await response.json()
    //         const firstAparition = data.episode[0]
    //         console.log(firstAparition)
    //     } catch(error) {
    //         console.log(error)
    //     }
    // }
}
