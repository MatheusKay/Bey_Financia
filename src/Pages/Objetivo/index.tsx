import { useState } from 'react'

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import AddIcon from '@mui/icons-material/Add'

import Aside from '../../components/asideNav'
import Header from '../../components/header'
import Card from './cardObjetivo'

import { ControlButton } from '../../Styles/global'
import { CardAdd, ContainerCards, Main, Section, SectionHeader } from './style'

const Objetivo = () => {
  const [toggle, setToggle] = useState(false)

  const openToggle = () => {
    setToggle(!toggle)
  }

  return (
    <Main>
      <Aside />
      <Section>
        <Header />
        <div className="container">
          <SectionHeader opentoggle={toggle}>
            <ControlButton onClick={openToggle}>
              {toggle ? (
                <ArrowDropUpIcon fontSize="inherit" />
              ) : (
                <ArrowDropDownIcon fontSize="inherit" />
              )}
              Objetivos
            </ControlButton>
            {toggle && (
              <div className="container_buttons">
                <button>Objetivos ativos</button>
                <button>Objetivos pausados</button>
                <button>Objetivos concluidos</button>
              </div>
            )}
          </SectionHeader>
          <ContainerCards>
            <CardAdd>
              <button>
                <AddIcon fontSize="inherit" />
              </button>
            </CardAdd>
            <Card />
          </ContainerCards>
        </div>
      </Section>
    </Main>
  )
}

export default Objetivo
