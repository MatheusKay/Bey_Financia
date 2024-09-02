import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
`

export const DashContainer = styled.section`
  width: 94%;
`

export const Dash = styled.section`
  margin-top: 3em;

  h1 {
    font-size: 2em;
  }
`

export const DashCount = styled.main`
  margin-top: 2em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 1em;
`

export const DashGrafic = styled.main`
  width: 100%;
  margin-top: 2em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1em;
`
