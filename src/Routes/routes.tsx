import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Home from '../Pages/Home'
import Dashboard from '../Pages/Dashboard'
import Conta from '../Pages/Conta'
import Controle from '../Pages/Controle'
import Planejamento from '../Pages/Planejamento'
import Objetivo from '../Pages/Objetivo'

import { RootReducer } from '../store'

const RoutesPages = () => {
  const { isAuthenticated } = useSelector((s: RootReducer) => s.states)

  return (
    <Routes>
      <Route path="/" element={<Home isRegistering={true} />} />
      <Route path="/login" element={<Home isRegistering={false} />} />
      <Route
        path="/dashboard"
        element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
      />
      <Route
        path="/conta"
        element={isAuthenticated ? <Conta /> : <Navigate to="/login" />}
      />
      <Route
        path="/controle"
        element={isAuthenticated ? <Controle /> : <Navigate to="/login" />}
      />
      <Route
        path="/planejamento"
        element={isAuthenticated ? <Planejamento /> : <Navigate to="/login" />}
      />
      <Route
        path="/objetivo"
        element={isAuthenticated ? <Objetivo /> : <Navigate to="/login" />}
      />
    </Routes>
  )
}

export default RoutesPages
