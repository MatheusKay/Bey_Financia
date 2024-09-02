import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Msg = {
  msg: string
}

type Login = {
  email: string
  password: string
}

type ResponseLogin = {
  msg: string
  token: string
}

type Register = {
  name: string
  email: string
  password: string
  confirmpassword: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-bey.vercel.app'
  }),
  endpoints: (builder) => ({
    getInitial: builder.query<Msg, void>({
      query: () => ''
    }),
    purchaseLogin: builder.mutation<ResponseLogin, Login>({
      query: (body) => ({
        url: 'auth/login',
        method: 'POST',
        body
      })
    }),
    purchaseRegister: builder.mutation<Msg, Register>({
      query: (body) => ({
        url: 'auth/register',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetInitialQuery,
  usePurchaseLoginMutation,
  usePurchaseRegisterMutation
} = api

export default api
