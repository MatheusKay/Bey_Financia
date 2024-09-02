import { useState } from 'react'

import AddIcon from '@mui/icons-material/Add'
import SearchIcon from '@mui/icons-material/Search'

import Aside from '../../components/asideNav'
import Count from '../../components/count'
import Header from '../../components/header'

import { Main, SectionCount, SectionHeader } from './style'
import { ControlButton } from '../../Styles/global'
import { Search } from '../Controle/style'
import Table from './table'

const Planejamento = () => {
  const [isSearch, setIsSearch] = useState(false)

  const openSearch = () => {
    setIsSearch(!isSearch)
  }

  return (
    <Main>
      <Aside />
      <section className="container_section">
        <Header />
        <div className="container">
          <SectionHeader opensearch={isSearch}>
            <h1>Planejamento</h1>
            <div className="container_buttons">
              <ControlButton className="new_component">
                <AddIcon fontSize="inherit" />
                Novo planejamento
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
          </SectionHeader>
          <SectionCount>
            <Count />
            <Count />
            <Count />
            <Count />
          </SectionCount>
        </div>
        <Table />
      </section>
    </Main>
  )
}

export default Planejamento
