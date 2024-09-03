import { useState } from 'react'

import AddIcon from '@mui/icons-material/Add'
import SearchIcon from '@mui/icons-material/Search'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

import Aside from '../../components/asideNav'
import Header from '../../components/header'

import { ControlButton } from '../../Styles/global'
import { Search } from '../Controle/style'
import { Main, Section, SectionHeader, Buttons } from './style'
import Table from './table'

const Categorias = () => {
  const [toggle, setToggle] = useState(false)
  const [search, setSearch] = useState(false)

  const openToggle = () => {
    setToggle(!toggle)
  }

  const openSearch = () => {
    setSearch(!search)
  }

  return (
    <Main>
      <Aside />
      <Section>
        <Header />
        <div className="container">
          <SectionHeader>
            <div className="toggle">
              <div>
                <ControlButton
                  className={
                    toggle ? 'section_button border_active' : 'section_button'
                  }
                  onClick={openToggle}
                >
                  <ArrowDropDownIcon fontSize="inherit" />
                  Categorias de Receitas
                </ControlButton>
              </div>
              {toggle && (
                <div className="container_toggle">
                  <button>Categorias de Receitas</button>
                  <button>Categorias de Despesas</button>
                </div>
              )}
            </div>
            <Buttons>
              <ControlButton>
                <AddIcon fontSize="inherit" />
              </ControlButton>
              <div className={search ? 'container_search' : ''}>
                <ControlButton onClick={openSearch}>
                  <SearchIcon fontSize="inherit" />
                </ControlButton>
                <Search
                  placeholder="Pesquise por Nome da categoria"
                  opensearch={search}
                />
              </div>
            </Buttons>
          </SectionHeader>
          <Table />
        </div>
      </Section>
    </Main>
  )
}

export default Categorias
