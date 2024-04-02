import axios from "axios"

const plantasAPI = axios.create({baseURL: 'https://davidhscruz.github.io/CasaVerde_backend/ofertas.json'})

async function getPlantas()  {
    const response = await plantasAPI.get('/')

    return response.data
}

export {
    getPlantas
}