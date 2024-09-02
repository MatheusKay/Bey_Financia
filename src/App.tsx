import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { StyleGlobal } from './Styles/global'

import { store } from './store'
import RoutesPages from './Routes/routes'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <StyleGlobal />
        <div>
          <RoutesPages />
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
