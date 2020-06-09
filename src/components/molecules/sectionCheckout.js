import React, { useEffect, useState, useRef } from "react"
import { withPrefix } from "gatsby"
import styled from "styled-components"
import Seperator from "@assets/seperators/a-seperator-4.svg"
import Container from "@atoms/container"
import SliderTestimonials from "@molecules/sliderTestimonials"
import { media } from "@utils/media"

const SectionCheckout = () => {
  const [loaded, setLoaded] = useState(false)
  const scriptEl = useRef(null)

  // only add moonclerk.js when component mounts
  useEffect(() => {
    const checkoutScript = document.createElement("script")
    checkoutScript.id = "checkoutScript"
    checkoutScript.src = withPrefix("/moonclerk.js")
    scriptEl.current.appendChild(checkoutScript)
    setLoaded(true)
  }, [])

  return (
    <Container content>
      <CheckoutContainer>
        <Content>
          <h1>Ayuda a un hermano venezolano</h1>
          <h6>
            Envíale apoyo a la gente de tu país que más lo necesita.
          </h6>
          <SliderTestimonials />
        </Content>
        {/* PASTE MOONCLERK FORM HTML ID HERE */}
        <Form id="mc5exp0qlk2y40" ref={scriptEl} />
      </CheckoutContainer>
    </Container>
  )
}

export default SectionCheckout

const CheckoutContainer = styled(Container)`
  background-color: ${props => props.theme.colors.black};
  border-radius: ${props => props.theme.button.radius};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-width: 98%;
  grid-template-columns: var(--gridSplit);

  @media ${media.lg} {
    flex-direction: row;
  }
`

const Content = styled.div`
  padding: var(--spacingContent);
  width: 100%;
  margin-top: 200px; 

  @media ${media.sm} {
    width: 50%;
    margin-top: 0px; 
  }

  h6 {
    color: ${props => props.theme.colors.lightGray};
    letter-spacing: 2px;
    margin-bottom: 0rem;
    text-transform: uppercase;
  }

  h1 {
    color: ${props => props.theme.colors.white};

    @media ${media.lg} {
    margin-top: -30px; 
    }
  }

  p {
    color: ${props => props.theme.colors.lightGray};
    margin-bottom: -10px;
  }
`

const Form = styled.div`
  padding: var(--spacingContent);
  width: 100%;

  @media ${media.lg} {
    width: 50%;
  }

  a {
    display: none;
  }
`
