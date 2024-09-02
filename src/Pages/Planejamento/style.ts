import styled from 'styled-components'

import { Colors } from '../../Styles/global'

type Props = {
  opensearch: boolean
}

export const Main = styled.main`
  display: flex;

  .container_section {
    width: 80%;
  }
`

export const SectionHeader = styled.div<Props>`
  margin: 8em 0 4em;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .container_buttons {
    width: ${(props) => (props.opensearch ? '60%' : 'auto')};
    display: flex;
    align-items: center;
    column-gap: 1em;

    .container_search {
      width: ${(props) => (props.opensearch ? '60%' : 'auto')};
      display: flex;
      align-items: center;
      background-color: rgb(${Colors.black});
      border-radius: 2em;
    }
  }
`

export const SectionCount = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 1em;
`
