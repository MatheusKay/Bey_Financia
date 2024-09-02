import styled from 'styled-components'
import { Colors } from '../../Styles/global'

type Props = {
  opensearch: boolean
  togglesection?: boolean
}

export const Main = styled.main`
  display: flex;
`

export const Sec = styled.section`
  width: 80%;
`

export const SecControl = styled.section`
  margin-top: 3em;
`

export const SecCount = styled.section`
  margin-top: 3em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 1em;
`

export const ControlHeader = styled.div<Props>`
  margin-top: 7em;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .container_section {
    width: 25%;
    position: relative;

    .section_button {
      border-radius: ${(props) =>
        props.togglesection ? '2em 2em 0 0' : '2em'};
    }
  }

  .container_buttons {
    width: ${(props) => (props.opensearch ? '50%' : 'auto')};
    display: flex;
    align-items: center;
    column-gap: 1em;
  }

  .container_search {
    width: ${(props) => (props.opensearch ? '60%' : 'auto')};
    display: flex;
    align-items: center;
    background-color: rgb(${Colors.black});
    border-radius: 2em;
  }
`

export const Search = styled.input<Omit<Props, 'togglesection'>>`
  width: ${(props) => (props.opensearch ? '80%' : '0')};
  display: ${(props) => (props.opensearch ? 'block' : 'none')};
  padding: 0.5em;
  font-size: 0.9em;
  background-color: transparent;
  color: rgba(${Colors.white}, 0.8);
  border: none;
  border-radius: 2em;

  &:focus {
    outline: none;
  }
`

export const Sections = styled.div<Omit<Props, 'opensearch'>>`
  width: 100%;
  padding-bottom: 0.2em;
  display: ${(props) => (props.togglesection ? 'block' : 'none')};
  position: absolute;
  top: 4em;
  left: 0;
  background-color: rgb(${Colors.black});
  color: rgb(${Colors.white});
  border-radius: 0 0 2em 2em;
  border: 1px solid rgb(${Colors.white});

  button {
    width: 100%;
    padding: 0.8em 1em;
    margin-bottom: 1em;
    display: flex;
    align-items: center;
    column-gap: 1.5em;
    background-color: transparent;
    color: rgb(${Colors.white});
    border: none;
    font-size: 0.9em;
    font-weight: bold;
    transition: background-color 0.5s ease-out;
    cursor: pointer;

    .icon {
      width: 3em;
      height: 3em;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-color: rgb(${Colors.white});
    }

    svg {
      color: rgb(${Colors.black});
      font-size: 1.5em;
    }

    &:hover {
      background-color: rgba(${Colors.white}, 0.2);
    }
  }
`
