// const fetchData = require('../src/utils/fetchData')
const API = "https://rickandmortyapi.com/api/character/"
let nombre = document.getElementById("name")
let foto = document.getElementById("photo")
let especie = document.getElementById("specie")
let genero = document.getElementById("gender")
let estatus = document.getElementById("status")
let origen = document.getElementById("origin")
let ubicacion = document.getElementById("location")
let firstAp = document.getElementById("first-ap")
let lastAp = document.getElementById("last-ap")
let i = 0

async function fetchData(API) {
	try {
		const response = await fetch(API)
		const data = await response.json()
        const response2 = await fetch(`${data.results[i].episode[0]}`)
        data2 = await response2.json()
        console.log(`${data.results[i].episode.length}`)
        console.log(data2.id)
        const last = data.results[i].episode.length - 1
        const response3 = await fetch(`${data.results[i].episode[last]}`)
        const data3 = await response3.json()
		// console.log(data);
        // console.log(data.results[i])
        nombre.innerHTML = `Name: ${data.results[i].name}`
        foto.innerHTML = `<img src="${data.results[i].image}" alt="${data.results[i].name}">`
        especie.innerHTML = `Specie: ${data.results[i].species}`
        genero.innerHTML = `Gender: ${data.results[i].gender}`
        estatus.innerHTML = `Status: ${data.results[i].status}`
        origen.innerHTML = `Origin: ${data.results[i].origin.name}`
        ubicacion.innerHTML = `Actual Locate: ${data.results[i].location.name}`
        firstAp.innerHTML = `First Aparition: ${data2.name} (${data2.episode}) On air: ${data2.air_date}`
        lastAp.innerHTML = `Last Aparition: ${data3.name} (${data3.episode}) On air: ${data3.air_date}`
    } catch (error) {
		console.log(error)
	}
}
fetchData(API)

// const data = fetch(API)
// data
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .then(response => console.log(response))
// 	.catch(error => console.log(error))
/*
const consAPI = async (url_api) => {
    try {
        const data = await fetchData(url_api)
        const character = await fetchData(`${API}${data.results[0].id}`)
        console.log(`El URL ${character.origin.url}`)
        let origin
        if (character.origin.url == "") {
            origin = "N/A"
        } else {
            origin = await fetchData(character.origin.url);
        }
    } catch(error) {
        console.error(error)
    }
    info.innerHTML = `<img src="${character.image} alt="${character.name}">`
}

consAPI(API)

*/
// const AFunction = async (url_api) => {
//     try {
//         const data = await fetchData(url_api);
//         const character = await fetchData(`${API}${data.results[15].id}`);//"results" es un espacio que asugnamos en memoria para guardar el dato que vamos a traer
//         console.log(`El URL ${character.origin.url}`)
//         let origin//el origen lo traemos a partir de otra url
//         // console.log(character.origin.url)
//         if (character.origin.url == "") {
//             origin = "N/A"
//         } else {
//             origin = await fetchData(character.origin.url);
//         }
//         console.log(`Tamaño de resultados (pagina 1) ${data.results.length}`)
//         const episode1 = await fetchData(character.episode[0])
//         console.log(`Count ${data.info.count}`);
//         console.log(`Pages ${data.info.pages}`);
//         console.log(`Next Page ${data.info.next}`);
//         console.log(`Prev ${data.info.prev}`);
//         console.log(`ID ${character.id}`);
//         console.log(`Name ${character.name}`);
//         console.log(`Status ${character.status}`);
//         console.log(`Species ${character.species}`);
//         if (character.type == "") {
//             console.log(`Type N/A`)
//         } else {
//             console.log(`Type ${character.type}`);
//         }
//         console.log(`Gender ${character.gender}`);
//         //console.log(origin.dimension);
//         console.log(`Origin Name ${origin.name}`)
//         console.log(`Origin URL ${origin.url}`)
//         console.log(`Image URL ${character.image}`)
//         // for (let i = 0; i < character.episode.length; i++) {
//         //     console.log(`Episode ${i + 1} ${character.episode[i]}`)
//         // }
//         console.log(`Aparece en ${character.episode.length} episodios`)
//         console.log(`Aparece por primera vez en el episodio ${episode1.id}(${episode1.episode}): "${episode1.name}" emitido ${episode1.air_date}`)
//     } catch (error) {
//         console.error(error);
//     }
// }

// // console.error("Before");
// AFunction(API);
// // console.error("After");