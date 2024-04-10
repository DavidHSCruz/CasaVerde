import styled from "styled-components"
import Oferta from "../Oferta"
import getOfertas from "../../Servicos/ofertas"
import { useEffect, useState } from "react"

const OfertasContainer = styled.section`
    text-align: center;
    position: relative;
    width: 1200px;
    margin: auto;
    z-index: 10;
    &>div{
        display: flex;
        flex-wrap: wrap;
    }
    &>h1{
        font-family: Elsie Swash Caps;
        font-size: 82px;
        font-weight: 900;
        margin: 0;
    }
    &>p{
        font-family: Montserrat;
        font-size: 22px;
        opacity: .5;
        margin: 0;
    }
`

function Ofertas() {

    const [plantasPesquisadas, setPlantasPesquisadas] = useState([])
    
    async function fetchOfertas() {
        const ofertasAPI = await getOfertas()
        setPlantasPesquisadas(ofertasAPI)
    }
    useEffect(() => {
        fetchOfertas()
    },[])

    return(
        <OfertasContainer>
            <p>Conheça nossas</p>
            <h1>ofertas</h1>
            <div>
                {
                    plantasPesquisadas.map(oferta => (
                        <Oferta 
                            nome={oferta.nome} 
                            valor={oferta.valor} 
                            image={oferta.img}
                            width={oferta.width} 
                            heigth={oferta.height}
                            rotate={oferta.rotate}
                            marginRight={oferta.marginRight}
                        />
                    ))
                }
            </div>
            
        </OfertasContainer>
    )
}

export default Ofertas