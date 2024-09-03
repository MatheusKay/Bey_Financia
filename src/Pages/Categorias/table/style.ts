import styled from 'styled-components'

import { SecTable } from '../../Controle/table/style'
import { Colors } from '../../../Styles/global'

export const SectionTable = styled(SecTable)`
  table {
    border-radius: 2em;

    th {
      padding: 1em 2em;
      text-align: start;
      font-size: 0.9em;
    }

    td {
      padding: 1em 2em;
      font-size: 0.8em;
    }

    .colors {
      width: 2em;
      height: 2em;
      display: block;
      background-color: rgb(${Colors.white});
      border-radius: 50%;
    }

    .cat_icon {
      font-size: 2.2em;
    }
  }
`

export const ButtonIcon = styled.button`
  padding: 0.7em;
  margin-right: 2em;
  border: 1px solid rgba(${Colors.white}, 0.4);
  border-radius: 50%;
  background-color: transparent;
  color: rgb(${Colors.white});
  cursor: pointer;

  svg {
    font-size: 1.7em;
  }

  &:hover {
    background-color: rgba(${Colors.white}, 0.2);
  }
`
