import ReactDOM from 'react-dom/client'

import { AuthProvider } from 'contexts/auth'
import { Provider } from 'react-redux'
import { store } from 'redux_'

import { App } from './App'
import './styles/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(
  <Provider store={store}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Provider>
)
