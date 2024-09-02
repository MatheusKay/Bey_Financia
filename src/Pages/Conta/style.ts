import styled from 'styled-components'
import { Colors } from '../../Styles/global'

type Props = {
  issidebaropen: boolean
}

export const Main = styled.main`
  display: flex;
`

export const Sec = styled.div<Props>`
  width: ${(props) => (props.issidebaropen ? '80%' : '94%')};
`

export const SecConta = styled.section`
  margin-top: 3em;

  h1 {
    font-size: 2em;
  }
`

export const SecCount = styled.section`
  margin-top: 2em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 1em;
`

export const SecCards = styled.section`
  width: 100%;
  margin-top: 3em;
  display: flex;
  flex-wrap: wrap;
  column-gap: 2%;

  .container-card {
    width: 49%;
  }
`

export const Card = styled.section`
  width: 100%;
  min-height: 10em;
  padding: 1em;
  background-color: rgb(${Colors.black});
  color: rgb(${Colors.white});
  border-radius: 1em 1em 0 0;

  h3 {
    font-size: 1.2em;
  }

  .text-infos {
    margin-top: 1.5em;
  }

  p {
    margin-bottom: 1em;
    display: flex;
    justify-content: space-between;
    font-size: 0.9em;
    font-weight: bold;

    span {
      color: rgb(${Colors.green});
    }
  }
`

export const ButtonCard = styled.button`
  width: 100%;
  padding: 1em;
  background-color: rgb(${Colors.black});
  color: rgb(${Colors.white});
  border-radius: 0 0 1em 1em;
  border: none;
  border-top: 1px solid rgb(${Colors.white});
  text-align: end;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: rgba(${Colors.black}, 0.9);
    transition: background-color 0.5s ease-out;
  }
`
