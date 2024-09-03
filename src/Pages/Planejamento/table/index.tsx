import CottageIcon from '@mui/icons-material/Cottage'

import {
  SecTable,
  SecHeader,
  SecFooter,
  LineHead,
  ButtonTable,
  Icon
} from '../../Controle/table/style'

const Table = () => {
  return (
    <SecTable className="container">
      <SecHeader>
        <h3>Planejamento mensal</h3>
        <p>
          Bem-vindo ao planejamento para o mês. Aqui você podera ver uma tabela
          sobre suas receitas e suas despesas para ter um controle ainda mais
          eficiente do sue dinheiro
        </p>
      </SecHeader>
      <table>
        <thead>
          <tr>
            <LineHead width="15%">Categoria</LineHead>
            <LineHead width="17%">Meta planejada</LineHead>
            <LineHead width="17%">Despesas pagas</LineHead>
            <LineHead width="17%">Despesas previstas</LineHead>
            <LineHead width="17%">Total gasto</LineHead>
            <LineHead width="17%">Ações</LineHead>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="container_icon">
                <Icon className="container_icon">
                  <CottageIcon fontSize="inherit" />
                </Icon>
                Casa
              </div>
            </td>
            <td>R$ 5.000,00</td>
            <td>R$ 5.000,00</td>
            <td>R$ 5.000,00</td>
            <td>R$ 5.000,00</td>
            <td>
              <ButtonTable>.</ButtonTable>
              <ButtonTable>.</ButtonTable>
            </td>
          </tr>
          <tr>
            <td>
              <div className="container_icon">
                <Icon className="container_icon">
                  <CottageIcon fontSize="inherit" />
                </Icon>
                Casa
              </div>
            </td>
            <td>R$ 5.000,00</td>
            <td>R$ 5.000,00</td>
            <td>R$ 5.000,00</td>
            <td>R$ 5.000,00</td>
            <td>
              <ButtonTable>.</ButtonTable>
              <ButtonTable>.</ButtonTable>
            </td>
          </tr>
          <tr>
            <td>
              <div className="container_icon">
                <Icon className="container_icon">
                  <CottageIcon fontSize="inherit" />
                </Icon>
                Casa
              </div>
            </td>
            <td>R$ 5.000,00</td>
            <td>R$ 5.000,00</td>
            <td>R$ 5.000,00</td>
            <td>R$ 5.000,00</td>
            <td>
              <ButtonTable>.</ButtonTable>
              <ButtonTable>.</ButtonTable>
            </td>
          </tr>
        </tbody>
      </table>
      <SecFooter>
        <h3>Footer</h3>
      </SecFooter>
    </SecTable>
  )
}

export default Table
