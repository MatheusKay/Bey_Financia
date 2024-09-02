import { useSelector } from 'react-redux'

import Aside from '../../components/asideNav'
import Count from '../../components/count'
import Header from '../../components/header'

import {
  Main,
  Sec,
  SecConta,
  Card,
  SecCards,
  SecCount,
  ButtonCard
} from './style'

import { RootReducer } from '../../store'

const Conta = () => {
  const { isSidebarOpen } = useSelector((s: RootReducer) => s.states)

  return (
    <Main>
      <Aside />
      <Sec issidebaropen={isSidebarOpen}>
        <Header />
        <SecConta className="container">
          <h1>Receita</h1>
          <SecCount>
            <Count />
            <Count />
            <Count />
          </SecCount>
          <SecCards>
            <div className="container-card">
              <Card>
                <h3>Conta</h3>
                <div className="text-infos">
                  <p>
                    Saldo das receitas <span>R$ 0,00</span>
                  </p>
                  <p>
                    Saldo das receitas previstas <span>R$ 0,00</span>
                  </p>
                </div>
              </Card>
              <ButtonCard>Adicionar receita</ButtonCard>
            </div>
            <div className="container-card">
              <Card>
                <h3>Cartões</h3>
                <div className="text-infos">
                  <p>
                    Saldo dos cartões previstos <span>R$ 0,00</span>
                  </p>
                </div>
              </Card>
              <ButtonCard>Adicionar receita</ButtonCard>
            </div>
          </SecCards>
        </SecConta>
      </Sec>
    </Main>
  )
}

export default Conta
