import styled from 'styled-components'

import { Colors, ControlButton } from '../../Styles/global'

type Props = {
  opentoggle: boolean
}

export const Main = styled.main`
  display: flex;
`

export const Section = styled.section`
  width: 80%;
`

export const SectionHeader = styled.div<Props>`
  width: 20%;
  position: relative;
  margin-top: 8em;

  ${ControlButton} {
    width: 100%;
    font-size: 1.2em;
    border-radius: ${(props) => (props.opentoggle ? '2em 2em 0 0' : '2em')};

    svg {
      font-size: 1.6em;
    }
  }

  .container_buttons {
    width: 100%;
    position: absolute;
    top: 4em;
    left: 0;
    background-color: rgb(${Colors.black});
    border-radius: 0 0 2em 2em;
    borde: 1px solid rgb(${Colors.white});

    button {
      width: 100%;
      padding: 1em;
      margin-bottom: 1em;
      display: block;
      font-size: 0.9em;
      font-weight: bold;
      background-color: transparent;
      color: rgb(${Colors.white});
      border: none;
      cursor: pointer;

      &:hover {
        background-color: rgba(${Colors.white}, 0.2);
      }
    }
  }
`
