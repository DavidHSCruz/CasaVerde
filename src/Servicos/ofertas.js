async function getOfertas()  {
    const response = await fetch('https://raw.githubusercontent.com/DavidHSCruz/CasaVerde_backend/main/ofertas.json')
    const responseJSON = response.json()
    return responseJSON
}

export default getOfertas