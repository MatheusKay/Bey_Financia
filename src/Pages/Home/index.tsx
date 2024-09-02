import FormLogin from '../../components/form/Login'
import FormRegister from '../../components/form/Register'

import { FormContainer, HomeContainer, ImageContainer } from './style'

export type Props = {
  isRegistering: boolean
}

const HomeRegisterLogin = ({ isRegistering }: Props) => {
  return (
    <HomeContainer isregistering={isRegistering}>
      <ImageContainer>
        <img src="https://placeholder.com/500x500" alt="" />
      </ImageContainer>
      <FormContainer>
        {isRegistering ? <FormRegister /> : <FormLogin />}
      </FormContainer>
    </HomeContainer>
  )
}

export default HomeRegisterLogin
