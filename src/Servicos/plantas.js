import axios from "axios"

const plantasAPI = axios.create({baseURL: 'https://gist.githubusercontent.com/bugan/41d60ffa23fa0c4044cc138bf670780d/raw?utm_medium=email&_hsmi=231361624&_hsenc=p2ANqtz-9xTwJxAdbYvgcsVYd3X6n56-lZZY3MU2EERjqfky6s_5_zZ0RaEJzuxz2v18DAMC2g5QSlGd0Co4UpKzmrOf6soNKHiA&utm_content=231361624&utm_source=hs_automation'})

async function getPlantas()  {
    const response = await plantasAPI.get('/')

    return response.data
}

export {
    getPlantas
}