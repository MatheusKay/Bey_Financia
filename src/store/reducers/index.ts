import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type States = {
  isAuthenticated: boolean
  isSidebarOpen: boolean
}

const initialState: States = {
  isAuthenticated: true,
  isSidebarOpen: true
}

const globalStates = createSlice({
  name: 'States',
  initialState,
  reducers: {
    verificationAuthenticated: (state) => {
      state.isAuthenticated = true
    },
    verificationSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen
    }
  }
})

export const { verificationAuthenticated, verificationSidebar } =
  globalStates.actions

export default globalStates.reducer
