import styled, { createGlobalStyle } from 'styled-components'

export const Colors = {
  black: '21, 21, 21',
  white: '254, 254, 254',
  green: '93, 200, 56'
}

export const StyleGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Roboto", system-ui;

    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
  }

  .container {
    width: 95%;
    margin: 0 auto;
  }
`

export const ControlButton = styled.button`
  padding: 1em;
  display: flex;
  align-items: center;
  column-gap: 1em;
  border: none;
  border-radius: 2em;
  background-color: rgb(${Colors.black});
  color: rgb(${Colors.white});
  font-weight: bold;
  cursor: pointer;

  &.new_component,
  &.search {
    font-size: 0.9em;

    svg {
      font-size: 1.5em;
    }
  }

  &.section_button {
    width: 100%;
    font-size: 1.2em;

    svg {
      font-size: 1.6em;
    }
  }
`
