import styled from 'styled-components'
import { Colors } from '../../../Styles/global'

type Props = {
  width: string
}

export const SecTable = styled.section`
  table {
    width: 100%;
    background-color: rgb(${Colors.black});
    color: rgb(${Colors.white});

    th {
      padding: 1.5em 1em 2em 1em;
      text-align: start;
    }

    td {
      padding: 1.5em 1em 2em 1em;
      font-size: 0.9em;
    }
  }

  th,
  td {
    border-bottom: 1px solid rgba(${Colors.white}, 0.5);
  }

  .container_icon {
    display: flex;
    align-items: center;
  }

  .container_value {
    font-weight: bold;
    color: rgb(${Colors.green});
  }
`

export const SecHeader = styled.div`
  margin-top: 3em;
  padding: 3em;
  text-align: center;
  background-color: rgb(${Colors.black});
  color: rgb(${Colors.white});
  border-radius: 2em 2em 0 0;
  border-bottom: 1px solid rgba(${Colors.white}, 0.5);

  h3 {
    margin-bottom: 1.5em;
  }
`

export const SecFooter = styled.div`
  margin-bottom: 3em;
  padding: 2em;
  text-align: center;
  background-color: rgb(${Colors.black});
  color: rgb(${Colors.white});
  border-radius: 0 0 2em 2em;
`

export const LineHead = styled.th<Props>`
  width: ${(props) => props.width};
`

export const Icon = styled.span`
  width: 3em;
  height: 3em;
  margin-right: 1em;
  justify-content: center;
  border-radius: 50%;
  background-color: rgb(${Colors.white});
  color: rgb(${Colors.black});

  svg {
    font-size: 1.4em;
  }
`

export const ButtonTable = styled.button`
  width: 2em;
  height: 2em;
  border-radius: 50%;
`
