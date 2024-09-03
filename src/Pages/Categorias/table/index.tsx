import AssessmentIcon from '@mui/icons-material/Assessment'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import VillaIcon from '@mui/icons-material/Villa'

import { LineHead } from '../../Controle/table/style'
import { ButtonIcon, SectionTable } from './style'

const Table = () => {
  return (
    <SectionTable>
      <table>
        <thead>
          <tr>
            <LineHead width="20%">Nome</LineHead>
            <LineHead width="20%">Icon</LineHead>
            <LineHead width="20%">Cor</LineHead>
            <LineHead width="30%">Ações</LineHead>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Casa</td>
            <td>
              <span>
                <VillaIcon className="cat_icon" fontSize="inherit" />
              </span>
            </td>
            <td>
              <span className="colors">.</span>
            </td>
            <td>
              <div>
                <ButtonIcon>
                  <AssessmentIcon fontSize="inherit" />
                </ButtonIcon>
                <ButtonIcon>
                  <EditIcon fontSize="inherit" />
                </ButtonIcon>
                <ButtonIcon>
                  <DeleteIcon fontSize="inherit" />
                </ButtonIcon>
              </div>
            </td>
          </tr>
          <tr>
            <td>Casa</td>
            <td>
              <span>
                <VillaIcon className="cat_icon" fontSize="inherit" />
              </span>
            </td>
            <td>
              <span className="colors">.</span>
            </td>
            <td>
              <div>
                <ButtonIcon>
                  <AssessmentIcon fontSize="inherit" />
                </ButtonIcon>
                <ButtonIcon>
                  <EditIcon fontSize="inherit" />
                </ButtonIcon>
                <ButtonIcon>
                  <DeleteIcon fontSize="inherit" />
                </ButtonIcon>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </SectionTable>
  )
}

export default Table
