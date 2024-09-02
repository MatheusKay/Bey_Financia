import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

import { SecCount, Sec } from './style'

const Count = () => {
  return (
    <SecCount>
      <img src="https://placeholder.com/64x64" alt="" />
      <Sec>
        <span>
          <a href="#">
            Saldo
            <KeyboardArrowRightIcon />
          </a>
        </span>
        <h4>R$ 0,00</h4>
      </Sec>
    </SecCount>
  )
}

export default Count
