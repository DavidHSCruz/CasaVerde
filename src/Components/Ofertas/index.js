import styled from "styled-components"
import Oferta from "../Oferta"
import { useEffect, useState } from "react"
import { getPlantas } from "../../Servicos/plantas"


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

    const ofertas = [
        {
            img: 'https://s3-alpha-sig.figma.com/img/20cc/beaf/dfd5a17f6daa31969c4b1f32762ecc5a?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NiGSJsHWqAW26MzzyJ~joY1LDMzzeD2h-M6TgoQjqwF07APqAzQzMESlQv7GkoqC-sDeC0qcoeWCSDfbT3xvaauX6sEcN1ttHz6F1poZBv~fW-23gkpA6pLR542cQlztdst62hEsUBbFHBVQa5CimuhNhvqDKcTozvh-RrpNnaA9xtMSMO-FVgG0R8ZMWCSRqRXfgs8tdrgLzJUb6N7c-ez5gwExjqy6llpKaF0qH5t88Brx3edVWVdDVoRBqI9dVsA5QITvimf25iP9T6WQ-huOS2T4HnJL44pqeKU2za4~DktpWMP8LEMcGBGjCq~MuipeBB1PM8-uZo87sT67mA__',
            width: '225px',
            height: '337px',
            marginRight: '150px',
            nome: 'Ajuga reptans',
            valor: 20.00
        },
        {
            img: 'https://s3-alpha-sig.figma.com/img/5047/6d4b/6396a5ab4e182d3442bf0227275d6b1b?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jSpa1YKaPyi7a64K0hYTd8SftLqnAo9d850ldGILVCUPhBrMWjefDg2J-LUO8leWNOgH6KVywZlbMvKBWtFX9tx~KVl02wgLUf~Y4sEblE8BX7oXiEigkq2bm4ng2RR4OmTjS8kF9~DyMQNLrG6QMm-du1-8QL0JbWOqcUmSYCSHA41B1LShWf5I-u4q2uyW2CKMkSjSpFAPSkWcpEE-UrN4Kl-qp1Qsrl8gPkB~Nt5~AndEiHXGP6ngKqpzUfVUkcYiqGzGehdshejf-Bb-ELVjPTm3yolHnH89QOJHus1kUcYbwtlxbRCys~fsyyfG4gHdsXAHGQAHHfB9T9aNKQ__',
            width: '330px',
            height: '220px',
            marginRight: '100px',
            nome: 'Cordyline fruticosa',
            valor: 20.00
        },
        {
            img: 'https://s3-alpha-sig.figma.com/img/d60d/4c56/e42bf8a367f6f52d79e2fcce6435eca1?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=idgW3aivijZkqcBJQwzwqoA8keQr9Pa-kDFE0FsYxZPx-TpTqPhehqkMqvZeRyFUU3IDW7Vtn0037IkJ~hBhpWQQ6TuQiggJJovF1ruK~NjGoi2wtjkZLZw4-g33OQgwZaTF-4j~HjfNXKcy~mDSCKMLbLdVpFx0M-X54RKzs5XH2VeSZes1jN9q9A4EjSrtyCZ1Lzn6o~vwApHB5H-Os8bCM08jzoJaScJankRv2cuWCTC~CZTdt5DY6bbUv8ducPT4BJf5sQnWj9qomPxzJ79HLx0PihDJNeLPsBre66j00NLa2ojIsMApYxLevj8KUY2OIHkuDdcLUeY9coGWAA__',
            width: '276px',
            height: '414px',
            marginRight: '130px',
            nome: 'Crassula ovata',
            valor: 20.00
        },
        {
            img: 'https://s3-alpha-sig.figma.com/img/089e/ea7c/c8dc02a30df1fdefb3afc9a681dd8e74?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TfuxhpAwj1Ra-PbYIRkHCVJKr~H4myp0ocfh4ayaX-EOJIeU80iDSnzlYcFesEB2vBJYawi33gPfRaMYIemam4xVUNjb4O6Cy5knB8k2wKO2Ir10KSjlCxTvLNTkwh0TQc~ivvQVR6cwyMljsPK6-IhMShqFeojd3LuXrU~qr0jbNsMt-pkXoHLWXfVizEtR-n3jDeaQntaheVkL-Senj1ZpBFbRmTXk0SoPGexPtG~HWnh0s2V0nMjilHN075blhzpSdDWNbskF7ZcexoOAmHFjRzpJnd6m5XpLAs4aSjS4C4WJ-8waqLwJf8mE02~1lT2VkCYiny2-vAZ2uIQRsg__',
            width: '237.36px',
            height: '356.04px',
            marginRight: '150px',
            rotate: '38.4deg',
            nome: 'Cyperus rotundus',
            valor: 20.00
        },
        {
            img: 'https://s3-alpha-sig.figma.com/img/1e97/e1d6/7fdf16cf2010166a8f037923cc7d09fa?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jUo9oPsnN~bfbsw4BryZyAQJYtfY78hH59gMlCkt9aMhtG0NOwvgDD8srCIkA9n9R9PECf6lggUK1k4oHdkE~SJj85KO4uAXH1bKC~7ZesRjpwoTbPrcFrScPUAZyXVCAV6vWSRO7Cq1JWSgVwVIl2Nku06diCab-wZy5~E33mY5wEWd8TIRPPvHzszfLQ3He1QLAzu726p5j5CgxsXDb2TZqbQZkGmtQjX0f~L1Gns95UTfpcBRgrqLqbCzXzrebwd9iPHPHztb5Fjc7ioqd5HU1ZOz7J6UxHc8SjCkrjkKxpRtTa4TK1mh6UD3hx3NXl35UmeuGpuWDrcKTuAt2A__',
            width: '400px',
            height: '267px',
            marginRight: '150px',
            nome: 'Delairea odorata',
            valor: 20.00
        },
        {
            img: 'https://s3-alpha-sig.figma.com/img/2b15/5241/e52da1da0b1b9954518b5a7c668c7c39?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=odBo4Dedt9~CvDt7o9P~nuaPeGS91Db--RoWUoD2Xh-Le0jZGJHhCnGRjuihxPocvDAvDe7USHl~MJXwMg7HNNIZQovsu4qt5ke9hnBsbQhaFK6y82s3HtmHBLZH~AWULXRod7kaNkYHI4pEekZ5hWW6jgn5ewfgdMvjfd0sM5uB1Y06A4TLs1GFaGrBv14Am5g7pmbE9JVGL375e32UC15DsmSSKwT~qmiKS61q2ItZQRV0wZ4EwCTKEpjvgthlTYNZyMvpglOGfd-WYk3xHLHRj-kKjaIuBjHw9grOQTBnH0WDl9P4i4Z2AI31lZPqzHw~Y~-sA2Pb4OnstcC6eg__',
            width: '166px',
            height: '248px',
            marginRight: '210px',
            rotate: '38.96deg',
            nome: 'Datura metel',
            valor: 20.00
        }
        
    ]
    const [plantasPesquisadas, setPlantasPesquisadas] = useState([])

    async function fetchPlantas() {
        const plantasAPI = await getPlantas()
        setPlantasPesquisadas(plantasAPI)
    }

    useEffect(() => {
        fetchPlantas()
    }, [])

    return(
        <OfertasContainer>
            <p>Conheça nossas</p>
            <h1>ofertas</h1>
            <div>
                {
                    plantasPesquisadas.map(planta => (
                        <Oferta 
                            nome={planta.name}
                            valor={planta.preco}
                            image={planta.img}
                        />
                    ))
                    // ofertas.map(oferta => (
                    //     <Oferta 
                    //         nome={oferta.nome} 
                    //         valor={oferta.valor} 
                    //         image={oferta.img} 
                    //         width={oferta.width} 
                    //         heigth={oferta.height}
                    //         rotate={oferta.rotate}
                    //         marginRight={oferta.marginRight}
                    //     />
                    // ))
                }
            </div>
            
        </OfertasContainer>
    )
}

export default Ofertas