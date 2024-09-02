import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Colors } from '../../Styles/global'

type Props = {
  isopen: boolean
}

export const AsideContainer = styled.aside<Props>`
  width: ${(props) => (props.isopen ? '20%' : '6%')};
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
  background-color: rgb(${Colors.black});
  transition: width 1s ease-in-out;
`

export const ToggleBar = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 8.5em;
  right: -1.1em;
  color: rgb(${Colors.white});
  background-color: rgba(${Colors.black}, 0.6);
  border: 1px solid rgb(${Colors.white});
  border-radius: 50%;
  cursor: pointer;
`

export const Logo = styled.div<Props>`
  padding: ${(props) => (props.isopen ? '1em 1.5em' : '1em')};
  transition: padding 1s ease-in-out;

  img {
    width: ${(props) => (props.isopen ? '150px' : '100%')};
    height: 5em;
    transition: width 1s ease-in-out;
  }
`

export const NavLinks = styled.ul`
  margin-top: 3em;
  list-style: none;
`

export const LinkItem = styled(Link)<Props>`
  padding: ${(props) => (props.isopen ? '1em 1.5em' : '1em')};
  margin-bottom: 0.8em;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.isopen ? 'normal' : 'center')};
  column-gap: 1em;
  color: rgb(${Colors.white});
  text-decoration: none;
  font-size: 1em;
  font-weight: bold;
  transition: background-color 0.5s ease-in-out;

  p {
    width: ${(props) => (props.isopen ? 'auto' : '0')};
    opacity: ${(props) => (props.isopen ? '1' : '0')};
    transition: opacity 1s ease-in-out;
  }

  &:hover {
    background-color: rgba(${Colors.white}, 0.2);
    transition: background-color 0.5s ease-in-out;
  }
`
