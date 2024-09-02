import { useDispatch, useSelector } from 'react-redux'

import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import HomeIcon from '@mui/icons-material/Home'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import EventNoteIcon from '@mui/icons-material/EventNote'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import GridViewIcon from '@mui/icons-material/GridView'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

import { AsideContainer, LinkItem, Logo, NavLinks, ToggleBar } from './style'

import { RootReducer } from '../../store'
import { verificationSidebar } from '../../store/reducers'

const Aside = () => {
  const { isSidebarOpen } = useSelector((s: RootReducer) => s.states)
  const dispatch = useDispatch()

  return (
    <AsideContainer isopen={isSidebarOpen}>
      <ToggleBar onClick={() => dispatch(verificationSidebar())}>
        {isSidebarOpen ? <KeyboardArrowLeftIcon /> : <KeyboardArrowRightIcon />}
      </ToggleBar>
      <Logo isopen={isSidebarOpen}>
        <img src="https://placeholder.com/100x100" alt="" />
      </Logo>
      <nav>
        <NavLinks>
          <li>
            <LinkItem isopen={isSidebarOpen} to="/dashboard">
              <HomeIcon />
              <p>Dashboard</p>
            </LinkItem>
          </li>
          <li>
            <LinkItem isopen={isSidebarOpen} to="/conta">
              <AccountBalanceWalletIcon />
              <p>Conta</p>
            </LinkItem>
          </li>
          <li>
            <LinkItem isopen={isSidebarOpen} to="/controle">
              <AccountBalanceIcon />
              <p>Controles</p>
            </LinkItem>
          </li>
          <li>
            <LinkItem isopen={isSidebarOpen} to="/planejamento">
              <EventNoteIcon />
              <p>Planejamentos</p>
            </LinkItem>
          </li>
          <li>
            <LinkItem isopen={isSidebarOpen} to="/objetivo">
              <AccessTimeIcon />
              <p>Objetivos</p>
            </LinkItem>
          </li>
          <li>
            <LinkItem isopen={isSidebarOpen} to="/categorias">
              <GridViewIcon />
              <p>Categorias</p>
            </LinkItem>
          </li>
        </NavLinks>
      </nav>
    </AsideContainer>
  )
}

export default Aside
