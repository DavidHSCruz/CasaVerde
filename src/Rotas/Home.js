import styled from "styled-components"
import AssinaturaNewsletter from "../Components/AssinaturaNewsletter"
import MinhaPlanta from "../Components/MinhaPlanta"
import Ofertas from "../Components/Ofertas"

const ImgBackground = styled.div`
  position: absolute;
  width: 2605px;
  height: 2705px;
  top: -550px;
  background: url('https://s3-alpha-sig.figma.com/img/36ab/1516/89501e73d7d398d81b1614e30f0940a6?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S9-uxvGjPnBZkXcP7q30RPaX-3kQLvMcalpqumRLU6GtspTBUdo2XmHARsuLMoN2MjN6Saxpy1VD4goeieTfqOzAwiQ5AN6ka98ucdhfQiqKj069Pb0rfchV9zVT0UFbTVOao6LQh2jMhAvow9B2xe5jMjf25f5vWjxquClkcDn-FfWnHH1YxTYkErkRFIAkxJabo30RMghpCcpd8AtpV-~EeP8MjQwRqVuJcYrfz~qjwGWyD0u~8FvZr-GTcVD8JikKXzOOUDhnUWxcPkqaSmKZdvERQpdB0jm8LtFFP-iQTLBoBiLSag-nKff6knTI7mMuBP6nytWNYtQs0iWvrA__');
  opacity: 0.1;
  rotate: -90deg;
  z-index: 1;
`

const SvgFundoComponent = styled.svg`
  position: absolute;
  top: 0;
  z-index: 1;
`

function Home() {
  return (
    <>  
        <AssinaturaNewsletter />
        <MinhaPlanta />
        <Ofertas />
        <ImgBackground>
        </ImgBackground>
        <SvgFundoComponent width="1846" height="2105" viewBox="0 0 1846 2105" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.2">
            <rect x="307" width="1" height="2105" fill="#C4C4C4"/>
            <rect x="410" width="1" height="2105" fill="#C4C4C4"/>
            <rect x="512" width="1" height="2105" fill="#C4C4C4"/>
            <rect x="615" width="1" height="2105" fill="#C4C4C4"/>
            <rect x="717" width="1" height="2105" fill="#C4C4C4"/>
            <rect x="820" width="1" height="2105" fill="#C4C4C4"/>
            <rect x="922" width="1" height="2105" fill="#C4C4C4"/>
            <rect x="1025" width="1" height="2105" fill="#C4C4C4"/>
            <rect x="1127" width="1" height="2105" fill="#C4C4C4"/>
            <rect x="1230" width="1" height="2105" fill="#C4C4C4"/>
            <rect x="1332" width="1" height="2105" fill="#C4C4C4"/>
            <rect x="1435" width="1" height="2105" fill="#C4C4C4"/>
            <rect x="1537" width="1" height="2105" fill="#C4C4C4"/>
            <rect x="1640" width="1" height="2105" fill="#C4C4C4"/>
            <rect x="1742" width="1" height="2105" fill="#C4C4C4"/>
            <rect x="1845" width="1" height="2105" fill="#C4C4C4"/>
            <rect width="1" height="2105" fill="#C4C4C4"/>
            <rect x="102" width="1" height="2105" fill="#C4C4C4"/>
            <rect x="205" width="1" height="2105" fill="#C4C4C4"/>
          </g>
        </SvgFundoComponent>

    </>
  )
}

export default Home