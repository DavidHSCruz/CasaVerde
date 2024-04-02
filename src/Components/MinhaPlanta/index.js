import styled from "styled-components"
import palmeira from '../../img/palmeira.png'

const MinhaPlantaContainer = styled.div`
    background-color: #ffffff;
    margin: 275px auto 30px auto;
    height: 440px;
    width: 995px;
    position: relative;
    z-index: 10;
    display: flex;
    box-shadow: 10px 10px 30px 0px #0000000F;
    &>div{
        height: 100%;
        padding: 50px 30px;
        font-family: Montserrat;
        font-size: 22px;
        text-align: left;
        color: #202020;
        &>h1{
            font-family: Elsie Swash Caps;
            font-size: 42px;
            margin: 15px 0;
        }
        &>p, &>div>p{
            opacity: 50%;
            margin-bottom: 15px;
        }
        &>div{
            display: flex;
            align-items: center;
            margin-bottom: 15px;
        }
        &>div>div{
            width: 52px;
            height: 52px;
            background-color: #FFCB47;
            border-radius: 26px;
            display: flex;
            margin-right: 15px;
            justify-content: center;
            align-items: center;
        }
    }
`
const ImgComponent = styled.img`
    width: 585px;
    height: 100%;
    background-image: url(${palmeira});
    background-size: cover;
`
function MinhaPlanta() {
    const comoConseguir = [
        {
            svg:<svg width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.79016L8.06999 11.3645L10.58 7.19512L17.97 5.779L1 1.79016Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11 7.43213L17 10.8173" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>, 
            descricao: 'Escolha suas plantas'
        },
        {
            svg:<svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 13.3378C9.55228 13.3378 10 13.0852 10 12.7736C10 12.462 9.55228 12.2094 9 12.2094C8.44772 12.2094 8 12.462 8 12.7736C8 13.0852 8.44772 13.3378 9 13.3378Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20 13.3378C20.5523 13.3378 21 13.0852 21 12.7736C21 12.462 20.5523 12.2094 20 12.2094C19.4477 12.2094 19 12.462 19 12.7736C19 13.0852 19.4477 13.3378 20 13.3378Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1 1.48975H5L7.68 9.04427C7.77144 9.30402 8.02191 9.53735 8.38755 9.70341C8.75318 9.86947 9.2107 9.95769 9.68 9.95261H19.4C19.8693 9.95769 20.3268 9.86947 20.6925 9.70341C21.0581 9.53735 21.3086 9.30402 21.4 9.04427L23 4.3107H6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>, 
            descricao: 'Faça seu pedido'
        },
        {
            svg:<svg width="24" height="13" viewBox="0 0 24 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 1.01025H1V8.34473H16V1.01025Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16 3.83118H20L23 5.52376V8.34473H16V3.83118Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M5.5 11.1656C6.88071 11.1656 8 10.5342 8 9.75519C8 8.97621 6.88071 8.34473 5.5 8.34473C4.11929 8.34473 3 8.97621 3 9.75519C3 10.5342 4.11929 11.1656 5.5 11.1656Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M18.5 11.1656C19.8807 11.1656 21 10.5342 21 9.75519C21 8.97621 19.8807 8.34473 18.5 8.34473C17.1193 8.34473 16 8.97621 16 9.75519C16 10.5342 17.1193 11.1656 18.5 11.1656Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>, 
            descricao: 'Aguarde na sua casa'
        }
    ]
    
    return(
        <MinhaPlantaContainer>
            <ImgComponent />
            <div>
                <p>Como conseguir</p>
                <h1>minha planta</h1>
                {
                    comoConseguir.map(elemento => (
                        <div>
                            <div>{elemento.svg}</div>
                            <p>{elemento.descricao}</p>
                        </div>
                    ))
                }
            </div>
        </MinhaPlantaContainer>
    )
}

export default MinhaPlanta