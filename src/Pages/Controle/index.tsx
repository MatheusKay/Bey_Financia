import { useState } from 'react'

import AddIcon from '@mui/icons-material/Add'
import SearchIcon from '@mui/icons-material/Search'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import TrendingDownIcon from '@mui/icons-material/TrendingDown'
import LineAxisIcon from '@mui/icons-material/LineAxis'

import Aside from '../../components/asideNav'
import Count from '../../components/count'
import Header from '../../components/header'
import Table from './table'

import {
  ControlHeader,
  Main,
  Search,
  Sec,
  SecControl,
  SecCount,
  Sections
} from './style'
import { ControlButton } from '../../Styles/global'

const Controle = () => {
  const [isSearch, setIsSearch] = useState(false)
  const [toggleSection, setToggleSection] = useState(false)

  const openSearch = () => {
    setIsSearch(!isSearch)
  }

  const openToggle = () => {
    setToggleSection(!toggleSection)
  }

  return (
    <Main>
      <Aside />
      <Sec>
        <Header />
        <SecControl className="container">
          <ControlHeader togglesection={toggleSection} opensearch={isSearch}>
            <div className="container_section">
              <ControlButton className="section_button" onClick={openToggle}>
                {toggleSection ? (
                  <ArrowDropUpIcon fontSize="inherit" />
                ) : (
                  <ArrowDropDownIcon fontSize="inherit" />
                )}
                Transações
              </ControlButton>
              <Sections togglesection={toggleSection}>
                <button>
                  <span className="icon">
                    <LineAxisIcon fontSize="inherit" />
                  </span>
                  Transações
                </button>
                <button>
                  <span className="icon">
                    <TrendingUpIcon fontSize="inherit" />
                  </span>
                  Receitas
                </button>
                <button>
                  <span className="icon">
                    <TrendingDownIcon fontSize="inherit" />
                  </span>
                  Despesas
                </button>
              </Sections>
            </div>
            <div className="container_buttons">
              <ControlButton className="new_component ">
                <AddIcon fontSize="inherit" />
                Nova Receita
              </ControlButton>
              <div className="container_search">
                <ControlButton className="search" onClick={openSearch}>
                  <SearchIcon fontSize="inherit" />
                </ControlButton>
                <Search
                  type="text"
                  name=""
                  id=""
                  placeholder="Pesquisar"
                  opensearch={isSearch}
                />
              </div>
            </div>
          </ControlHeader>
          <SecCount>
            <Count />
            <Count />
            <Count />
            <Count />
          </SecCount>
        </SecControl>
        <Table />
      </Sec>
    </Main>
  )
}

export default Controle
