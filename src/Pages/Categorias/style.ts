import styled from 'styled-components'
import { Colors } from '../../Styles/global'

export const Main = styled.main`
  display: flex;
`

export const Section = styled.section`
  max-width: 94%;
  width: 100%;
`

export const SectionHeader = styled.div`
  margin-top: 8em;
  margin-bottom: 4em;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    font-size: 1.8em;
  }

  .section_button {
    font-size: 1em;
  }

  .toggle {
    position: relative;

    .border_active {
      border-radius: 2em 2em 0 0;
    }
  }

  .container_toggle {
    padding-bottom: 0.9em;
    position: absolute;
    top: 3em;
    left: 0;
    background-color: rgb(${Colors.black});
    color: rgb(${Colors.white});
    border-radius: 0 0 2em 2em;

    button {
      width: 100%;
      padding: 1em;
      margin-top: 0.5em;
      margin-bottom: 0.5em;
      background-color: transparent;
      color: rgb(${Colors.white});
      border: none;
      font-size: 0.8em;
      font-weight: bold;
      text-align: start;
      cursor: pointer;

      &:hover {
        background-color: rgba(${Colors.white}, 0.2);
      }
    }
  }
`

export const Buttons = styled.div`
  max-width: 50%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  column-gap: 1em;

  .container_search {
    max-width: 60%;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: rgb(${Colors.black});
    border-radius: 2em;
  }
`
