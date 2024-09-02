import styled from 'styled-components'
import { Colors } from '../../Styles/global'

export const SecCount = styled.section`
  width: 100%;
  height: 100%;
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(${Colors.black});
  color: rgb(${Colors.white});
  border-radius: 2em;

  img {
    border-radius: 50%;
  }
`

export const Sec = styled.div`
  height: 4em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    font-size: 0.8em;

    a {
      display: flex;
      align-items: center;
      color: rgba(${Colors.white}, 0.4);
      text-decoration: none;
    }
  }

  h4 {
    font-size: 1.3em;
  }
`
