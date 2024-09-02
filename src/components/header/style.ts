import styled from 'styled-components'
import { Colors } from '../../Styles/global'

export const HeaderContainer = styled.header`
  padding-top: 2em;
  display: flex;
  justify-content: end;
`

export const Container = styled.section`
  min-width: 20%;
  width: auto;
  padding: 0.8em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 1em;
  background-color: rgb(${Colors.black});
  color: rgb(${Colors.white});
  border-radius: 2em;

  img {
    border-radius: 50%;
  }

  h3 {
    font-size: 1em;
    text-align: center;
  }

  button {
    width: 3em;
    border: none;
    background-color: transparent;
    color: rgb(${Colors.white});
    cursor: pointer;

    svg {
      font-size: 2em;
    }
  }
`
