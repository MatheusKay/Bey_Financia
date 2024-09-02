import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

import { HeaderContainer, Container } from './style'

const Header = () => {
  return (
    <HeaderContainer className="container">
      <Container>
        <img src="https://placeholder.com/40x40" alt="" />
        <h3>Robercleison</h3>
        <button>
          <ArrowDropDownIcon />
        </button>
      </Container>
    </HeaderContainer>
  )
}

export default Header
