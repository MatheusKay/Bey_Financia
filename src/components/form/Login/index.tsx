import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import {
  ButtonConfirm,
  FormSection,
  HeaderTitle,
  InfosSection,
  InputForm
} from '../style'

import { usePurchaseLoginMutation } from '../../../services/api'
import { verificationAuthenticated } from '../../../store/reducers'
import { Link, Navigate } from 'react-router-dom'

const FormLogin = () => {
  const [purchase, { data, isSuccess }] = usePurchaseLoginMutation()

  const dispatch = useDispatch()

  const form = useFormik({
    initialValues: {
      email: '',
      senha: ''
    },
    validationSchema: Yup.object({
      email: Yup.string(),
      senha: Yup.string()
    }),
    onSubmit: (values) => {
      purchase({
        email: values.email,
        password: values.senha
      })
    }
  })

  useEffect(() => {
    if (isSuccess) {
      dispatch(verificationAuthenticated())
    }
  }, [data, dispatch, isSuccess])

  return (
    <main>
      <img src="" alt="" />
      <section>
        <HeaderTitle>
          <h1>Bem vindo de volta ao FinanciaBey</h1>
          <h2>Entre em sua conta agora</h2>
        </HeaderTitle>
      </section>
      <section>
        <FormSection onSubmit={form.handleSubmit}>
          <InputForm
            type="email"
            placeholder="Email"
            name="email"
            id=""
            value={form.values.email}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <InputForm
            type="password"
            placeholder="Senha"
            name="senha"
            id=""
            value={form.values.senha}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <ButtonConfirm type="submit">Entrar</ButtonConfirm>
          {isSuccess && <Navigate to="/dashboard" />}
        </FormSection>
        <InfosSection>
          <p>
            Ainda não tem uma conta? <Link to="/">Cadastre-se</Link>
          </p>
        </InfosSection>
      </section>
    </main>
  )
}

export default FormLogin
