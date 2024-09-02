import { useEffect } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import {
  ButtonConfirm,
  FormSection,
  HeaderTitle,
  InfosSection,
  InputForm
} from '../style'

import { usePurchaseRegisterMutation } from '../../../services/api'
import { Link } from 'react-router-dom'

const FormRegister = () => {
  const [purchase, { data, isSuccess }] = usePurchaseRegisterMutation()

  const form = useFormik({
    initialValues: {
      nome: '',
      email: '',
      senha: '',
      confirmaSenha: ''
    },
    validationSchema: Yup.object({
      nome: Yup.string()
        .min(3, 'O nome precisa ter pelo menos 5 caracters')
        .required('O campo é obrigatorio'),
      email: Yup.string().required('O campo é obrigatorio'),
      senha: Yup.string()
        .min(6, 'A senha deve ter no minimo 6 caracters')
        .required('O campo é obrigatorio'),
      confirmaSenha: Yup.string()
        .oneOf([Yup.ref('senha')], 'As senhas devem ser iguais')
        .required('O campo é obrigatorio')
    }),
    onSubmit: (values) => {
      purchase({
        name: values.nome,
        email: values.email,
        password: values.senha,
        confirmpassword: values.confirmaSenha
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    const hasError = isTouched && isInvalid

    return hasError
  }

  useEffect(() => {
    if (data) {
      alert(data?.msg)
    }
  }, [data, isSuccess])

  return (
    <main>
      <img src="" alt="" />
      <section>
        <HeaderTitle>
          <h1>Bem vindo ao FinanciaBey</h1>
          <h2>Crie uma conta agora</h2>
        </HeaderTitle>
        <p>
          Cadastre suas fontes de renda, organize seus gastos e acompanhe
          facilmente se o seu orçamento está no azul ou no vermelho. Comece
          agora a ter mais controle sobre o seu dinheiro!
        </p>
      </section>
      <section>
        <FormSection onSubmit={form.handleSubmit}>
          <InputForm
            type="text"
            placeholder="Nome"
            name="nome"
            id="nome"
            value={form.values.nome}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkInputHasError('nome') ? 'erro' : ''}
          />
          <InputForm
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            value={form.values.email}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkInputHasError('email') ? 'erro' : ''}
          />
          <InputForm
            type="password"
            placeholder="Senha"
            name="senha"
            id="senha"
            value={form.values.senha}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkInputHasError('senha') ? 'erro' : ''}
          />
          <InputForm
            type="password"
            placeholder="Confirma senha"
            name="confirmaSenha"
            id="cornfimaSenha"
            value={form.values.confirmaSenha}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkInputHasError('confirmaSenha') ? 'erro' : ''}
          />
          <Link to="/login">
            <ButtonConfirm type="submit">Cadastrar</ButtonConfirm>
          </Link>
        </FormSection>
        <InfosSection>
          <p>
            Ja tem uma conta? <Link to="/login">Conecte-se</Link>
          </p>
          <div className="quest_privacy">
            <input type="checkbox" name="" id="" />
            <p>Concordo com as Políticas e os Termos de Privacidade</p>
          </div>
        </InfosSection>
      </section>
    </main>
  )
}

export default FormRegister
