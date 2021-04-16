export default class API {
    getCharacter(id) {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
            const data = await response.json
            return data
        } catch (error) {
            console.error(error)
        }
        // .then((response) => response.json())
        // .then((data) => console.log(data))
        // .catch((error) =>console.error(error))
    }
}