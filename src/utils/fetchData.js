let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest
const fetchData = (api) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest()
        xhttp.open("GET", api, true)
        xhttp.onreadystatechange = () => {
            if(xhttp.readyState === 4) {
                if(xhttp.status === 200) {
                    console.log(`Status = 200 petición realizada`)
                    resolve(JSON.parse(xhttp.responseText))
                } else {
                    console.log(`Ha ocurrido un error con la petición`)
                    reject(new Error(`Error `, api))
                }
            }
        }
        xhttp.send()
    })
}

module.exports = { fetchData }