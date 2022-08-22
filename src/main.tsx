import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { HashRouter } from 'react-router-dom'
import { store } from './store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
)
