import Aside from '../../components/asideNav'
import CardGrafic from '../../components/cardGrafic'
import Count from '../../components/count'
import Header from '../../components/header'

import { Dash, DashContainer, Main, DashCount, DashGrafic } from './style'

const Dashboard = () => {
  return (
    <Main>
      <Aside />
      <DashContainer>
        <Header />
        <Dash className="container">
          <h1>Dashboard</h1>
          <DashCount>
            <Count />
            <Count />
            <Count />
          </DashCount>
          <DashGrafic>
            <CardGrafic />
            <CardGrafic />
            <CardGrafic />
          </DashGrafic>
        </Dash>
      </DashContainer>
    </Main>
  )
}

export default Dashboard
