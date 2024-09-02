import { LinearProgress } from '@mui/material'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'

import PauseIcon from '@mui/icons-material/Pause'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import DoneAllIcon from '@mui/icons-material/DoneAll'

import { CardContainer } from './style'

const Card = () => {
  return (
    <CardContainer>
      <div className="card_header">
        <span>
          <DirectionsCarIcon fontSize="inherit" />
        </span>
        <h3>Nome do objetivo</h3>
      </div>
      <div className="card_infos">
        <p>Data final do Objetivo</p>
        <span>22/06/2024</span>
      </div>
      <div className="card_grafic">
        <LinearProgress variant="determinate" value={25} />
        <div className="card_grafic_infos">
          <p>R$ 25,00 / R$ 100,00</p>
          <p className="card_grafic_infos_destaque">25%</p>
        </div>
      </div>
      <div className="card_buttons">
        <button>
          <PauseIcon fontSize="inherit" />
        </button>
        <button>
          <EditIcon fontSize="inherit" />
        </button>
        <button>
          <DeleteIcon fontSize="inherit" />
        </button>
        <button>
          <DoneAllIcon fontSize="inherit" />
        </button>
      </div>
    </CardContainer>
  )
}

export default Card
