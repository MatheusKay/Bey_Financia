import styled from 'styled-components'

import { Colors } from '../../../Styles/global'

export const CardContainer = styled.div`
  padding: 1.5em;
  background-color: rgb(${Colors.black});
  color: rgb(${Colors.white});
  border-radius: 2em;

  .card_header {
    margin-bottom: 1.5em;
    display: flex;
    align-items: center;
    column-gap: 2em;
    font-size: 0.9em;

    span {
      width: 1.7em;
      height: 1.7em;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-color: rgb(${Colors.white});
      color: rgb(${Colors.black});
      font-size: 1.8em;
    }
  }

  .card_infos {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.9em;

    p {
      font-weight: bold;
    }
  }

  .card_grafic {
    margin: 2em 0;

    p {
      font-size: 0.9em;
    }

    .card_grafic_infos {
      margin-top: 1em;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &_destaque {
        font-weight: bold;
        font-size: 1.1em;
      }
    }
  }

  .card_buttons {
    margin-top: 1.5em;
    display: flex;
    justify-content: end;
    column-gap: 0.8em;

    button {
      width: 1.6em;
      height: 1.6em;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      border-radius: 50%;
      font-size: 1.2em;
    }
  }
`
