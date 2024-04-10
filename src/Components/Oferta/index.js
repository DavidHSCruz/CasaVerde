import styled from 'styled-components'

const OfertaConponent = styled.div`
    width: 380px;
    height: 200px;
    margin: 10px;
    display: flex;
    justify-content: end;
    align-items: center;
    overflow: hidden;
    background-color: #ffffff;
    box-shadow: 10px 10px 30px 0px #0000000F;
    font-family: Montserrat;
    font-size: 16px;
    &>div{
        position: absolute;
        width: 165px;
        text-align: start;
    }
    &>div>h2{
        font-family: Elsie Swash Caps;
        font-size: 32px;
        font-weight: 900;
        margin-bottom: 0;
    }
    &>div>p{
        margin-top: 5px;
        opacity: 50%;
    }
    &>div>p + p{
        color: #FFCB47;
        opacity: 100%;
        &::after{
            content: '---►';
            margin-left: 20px;
        }
    }
`
function Oferta({ nome, valor, image, width, heigth, rotate, marginRight, id }) {
    return(
        <OfertaConponent>
            <img 
                src={image}
                alt={nome} 
                width={width} 
                height={heigth} 
                style={{rotate: rotate, marginRight: marginRight}}
            />
            <div>
                <h2>{nome}</h2>
                <p>R${valor}</p>
                <p>Comprar</p>
            </div>
        </OfertaConponent>
    )
}

export default Oferta