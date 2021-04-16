export default class API {
    getCharacter(id) {
        if(id == 0) {
            fetch(`https://rickandmortyapi.com/api/character/`)
            .then((response) => response.json())
            .then((data) => console.log(data.info.count))
            .catch((error) =>console.error(error))
        } else {
            fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) =>console.error(error))
        }
    }
}