import CottageIcon from '@mui/icons-material/Cottage'

import {
  ButtonTable,
  SecTable,
  Icon,
  LineHead,
  SecHeader,
  SecFooter
} from './style'

const Table = () => {
  return (
    <SecTable className="container">
      <SecHeader>
        <h3>Contole de gastos</h3>
        <p>
          Bem-vindo ao controle de gastos. Aqui você podera ver uma tabela sobre
          suas receitas e suas despesas
        </p>
      </SecHeader>
      <table>
        <thead>
          <tr>
            <LineHead width="5%">Situação</LineHead>
            <LineHead width="15%">Data</LineHead>
            <LineHead width="30%">Descrição</LineHead>
            <LineHead width="15%">Categoria</LineHead>
            <LineHead width="10%">Conta</LineHead>
            <LineHead width="10%">Valor</LineHead>
            <LineHead width="15%">Ações</LineHead>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Paga</td>
            <td>18/02/2028</td>
            <td>Pequena descrição ou nome da Categoria</td>
            <td className="container_icon">
              <Icon className="container_icon">
                <CottageIcon fontSize="inherit" />
              </Icon>
              Casa
            </td>
            <td>Carteira</td>
            <td className="container_value">R$ 50,00</td>
            <td>
              <ButtonTable>.</ButtonTable>
              <ButtonTable>.</ButtonTable>
              <ButtonTable>.</ButtonTable>
              <ButtonTable>.</ButtonTable>
            </td>
          </tr>
          <tr>
            <td>Paga</td>
            <td>18/02/2028</td>
            <td>Pequena descrição ou nome da Categoria</td>
            <td className="container_icon">
              <Icon className="container_icon">
                <CottageIcon fontSize="inherit" />
              </Icon>
              Casa
            </td>
            <td>Carteira</td>
            <td className="container_value">R$ 50,00</td>
            <td>
              <ButtonTable>.</ButtonTable>
              <ButtonTable>.</ButtonTable>
              <ButtonTable>.</ButtonTable>
              <ButtonTable>.</ButtonTable>
            </td>
          </tr>
          <tr>
            <td>Paga</td>
            <td>18/02/2028</td>
            <td>Pequena descrição ou nome da Categoria</td>
            <td className="container_icon">
              <Icon className="container_icon">
                <CottageIcon fontSize="inherit" />
              </Icon>
              Casa
            </td>
            <td>Carteira</td>
            <td className="container_value">R$ 50,00</td>
            <td>
              <ButtonTable>.</ButtonTable>
              <ButtonTable>.</ButtonTable>
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
