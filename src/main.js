import API from "../src/api.js"
import Character from "../src/character.js"
const RMAPI = `https://rickandmortyapi.com/api/character/`
const new_API = new API(RMAPI)
// new_API.getCharacter(1)
let currentId = 7
const characterData = await new_API.getCharacter(currentId)
const char = new Character(characterData)
char.consulta()