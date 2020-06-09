import React from "react"
import styled from "styled-components"
import Container from "@atoms/container"
import Subheading from "@atoms/subheading"
import { media } from "@utils/media"

import SeperatorOne from "@assets/seperators/a-seperator-1.svg"
import SeperatorTwo from "@assets/seperators/a-seperator-2.svg"
import SeperatorThree from "@assets/seperators/a-seperator-3.svg"

const SectionSetup = () => {
  return (
    <Container content>
      <Intro>
        <Subheading>Cash-Based Interventions</Subheading>
        <h2>
          ¿Cómo funciona?
        </h2>
      </Intro>
      <Setup>
        <Step>
          <Seperator>
            <SeperatorOne />
          </Seperator>
          <Number>1</Number>
          <h3>Suscríbete a Hermano</h3>
        </Step>
        <Step>
          <Seperator>
            <SeperatorTwo />
          </Seperator>
          <Number>2</Number>
          <h3>Selecciona el tipo de hermano que deseas ayudar</h3>
        </Step>
        <Step>
          <Seperator>
            <SeperatorThree />
          </Seperator>
          <Number>3</Number>
          <h3>Tu hermano compra alimentos y/o medicinas</h3>
        </Step>
        <Step>
          <Number>4</Number>
          <h3>Tu hermano te da las gracias por la ayuda</h3>
        </Step>
      </Setup>
    </Container>
  )
}

export default SectionSetup

const Intro = styled.div`
  text-align: center;
`

const Setup = styled.div`
  display: grid;
  grid-template-columns: var(--gridQuad);

  @media ${media.lg} {
    padding: 1rem 0;
  }
`

const Seperator = styled.div`
  display: none;
  position: absolute;
  right: -22%;
  top: 5%;
  width: 180px;

  svg {
    width: 100%;
    height: auto;
  }

  @media ${media.lg} {
    display: block;
  }
`

const Step = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;
  padding: 0.5em 2em 1em 2em; 

  h3 {
    font-size: 24px; 
    

    @media ${media.lg} {
    font-size: 28px; 
    }
  }

  &:nth-of-type(2) {
    ${Seperator} {
      top: 25%;
    }
  }
  @media ${media.lg} {
    padding: 1rem;
  }
`
const Number = styled.span`
  align-items: center;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 100%;
  color: ${props => props.theme.colors.primary};
  display: flex;
  font-size: 24px;
  justify-content: center;
  height: 64px;
  margin-bottom: 0.5rem;
  width: 64px;

  @media ${media.lg} {
    margin-bottom: 1.5rem;
  }
`
