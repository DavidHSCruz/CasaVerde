import { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import emailjs from '@emailjs/browser'

const AssinaturaNewsletterContainer = styled.section`
`
const ImgPlanta = styled.img`
  position: absolute;
  width: 787px;
  height: 1183px;
  left: 718px;
  top: -208px;
  z-index: 2;
`
const SvgYellowComponent = styled.svg`
  width: 1009px;
  height: 1087px;
  position: absolute;
  top: -184.22px; left: 965px;
  z-index: 2;
`
const NewsletterComponent = styled.div`
  margin-left: 360px;
  margin-top: 210px;
  font-family: Montserrat;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  position: relative;
  z-index: 5;
  &>label{
    display: flex;
    cursor: text;
    width: 585px;
    height: 75px;
    align-items: center;
    background-color: #ffffff;
    margin-top: 30px;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    &>svg{
      margin: 15px;
    }
    &>form{
      display: flex;
      width: 100%;
      height: 100%;
    }
  }
`
const Titulo = styled.h1`
  width: 375px;
  font-family: Elsie Swash Caps;
  font-size: 82px;
  font-weight: 900;
  line-height: 94px;
  margin-top: 0;
  margin-bottom: 30px;
`
const Paragrafo = styled.p`
  font-size: 22px;
  color: #202020;
  opacity: 50%;
  margin: 0;
`
const ParagrafoMenor = styled(Paragrafo)`
  font-size: 16px;
  width: 481px;
`
const Input = styled.input`
  width: 341px;
  border: none;
  &:focus{
    outline: none;
  }
  &::-webkit-input-placeholder{
    color: #0003;
    font-family: Montserrat;
  }
`
const Botao = styled.button`
  cursor: pointer;
  width: 194px;
  background-color: #FFCB47;
  height: 100%;
  border: none;
  color: #ffffff;
  font-family: Montserrat;
  box-shadow: 10px 10px 30px rgba(255, 203, 71, 0.3);
  opacity: 1;
  transition: 500ms;
  &:disabled{
    background-color: #202020;
    cursor: default;
    opacity: .5;
  }
`
function AssinaturaNewsletter() {
  const [email, setEmail] = useState('')
  const botao = useRef(null)
  const form = useRef(null)
  const input = useRef(null)

  useEffect(() => validarEmail(), [email])

  function validarEmail() {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) botao.current.disabled = false
    else botao.current.disabled = true
  }

  function EnviarEmail(e) {
    e.preventDefault()

    emailjs.sendForm('gmailMessage', 'templateMessage', form.current, {
        publicKey: 'pRiHF5Ky4BQsmE5Ck',
      })
      .then(
        () => {
          alert(`Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${email}.`)
        },
        (error) => {
          alert('FAILED...', error.text);
        })
    input.current.value = ''
  }

  return (
    <AssinaturaNewsletterContainer>
      <SvgYellowComponent viewBox="0 0 955 637" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M284.914 -328.488C378.816 -388.839 500.328 -305.147 606.445 -270.44C695.841 -241.201 781.671 -207.371 850.687 -143.445C922.505 -76.9232 976.461 4.47409 1004.51 98.2672C1036.23 204.339 1064.83 320.816 1019.74 421.899C973.65 525.226 876.3 611.001 765.538 633.99C662.06 655.466 576.585 552.577 472.273 535.525C367.351 518.373 251.989 590.47 161.155 535.189C65.3803 476.901 -6.1279 360.625 1.04142 248.736C8.06001 139.198 147.437 91.9167 195.868 -6.56121C246.231 -108.969 188.927 -266.797 284.914 -328.488Z" fill="#FFCB47"/>
      </SvgYellowComponent>
      <ImgPlanta src="https://s3-alpha-sig.figma.com/img/1ddc/a8c9/c84ea93fe10aee9907b62f951f3822b6?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kY58pEj3Fy3Yv9xpGhP-9iY5AVzG6SIBExrD8c4SZN7kj9RE3hyoustTY2UixD01uRUmS8onlH-zmgPAGiDawEq~9rnrUghqdcT~VZihLCkiNN7fQRM~DwInpKt3ieQ2BmFR6XC05LOXTtVvE8HcvqV1Ajx25fvHJFGExghXSf~7vXJkZU1eLOpaAeSeifNKXAJxCOE9oC2qxmOXj~DMulA2OCisO9i~7blywdbk6J4nGBU26DV5uPYBCRGlJyIkvibxM1XAPmy-VAHCErrTnvw2zG1kzQ-RgOqitWiSCyLMLJqTPZ3udlEqoQDKw3nxyJ4IkV9igNlHF43tlCqkbQ__" alt="" />
      <NewsletterComponent>
        <Paragrafo>Sua casa com as</Paragrafo>
        <Titulo>melhores plantas</Titulo>
        <ParagrafoMenor>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</ParagrafoMenor>   
          <label>
            <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.3">
                <path d="M3.58826 1H20.8432C22.0294 1 23 1.56008 23 2.24461V9.7123C23 10.3968 22.0294 10.9569 20.8432 10.9569H3.58826C2.40198 10.9569 1.4314 10.3968 1.4314 9.7123V2.24461C1.4314 1.56008 2.40198 1 3.58826 1Z" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M23 2.24475L12.2157 6.60091L1.4314 2.24475" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
            </svg>
            <form ref={form} onSubmit={e => EnviarEmail(e)}>
              <Input ref={input} type="email" placeholder="Insira seu e-mail" onInput={ evento => setEmail(evento.target.value) } minLength='9' name="email"/>
              <Botao ref={botao}>Assinar newsletter</Botao>
            </form>
          </label>
      </NewsletterComponent>
    </AssinaturaNewsletterContainer>
  )
}

export default AssinaturaNewsletter