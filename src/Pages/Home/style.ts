import styled from 'styled-components'

type Props = {
  isregistering: boolean
}

export const HomeContainer = styled.main<Props>`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: ${(p) => (p.isregistering ? 'row' : 'row-reverse')};
  column-gap: 4em;
`

export const ImageContainer = styled.section`
  width: 55%;

  img {
    width: 100%;
  }
`

export const FormContainer = styled.section`
  width: 45%;
`
