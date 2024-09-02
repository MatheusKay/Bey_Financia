import styled from 'styled-components'

import { Colors } from '../../Styles/global'

type Props = {
  issidebaropen: boolean
}

export const Card = styled.section<Props>`
  max-width: ${(props) => (props.issidebaropen ? '37em' : '42em')};
  width: 100%;
  padding: 1.5em;
  background-color: rgb(${Colors.black});
  color: rgb(${Colors.white});
  border-radius: 2em;
  font-size: 0.9em;
  text-align: center;

  h3 {
    margin-bottom: 1.5em;
  }
`
