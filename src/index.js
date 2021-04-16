const fetchData = require('../src/utils/fetchData')
const API = "https://rickandmortyapi.com/api/character/"
let info = document.getElementById("profile")
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