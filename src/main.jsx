import React from 'react'
import ReactDOM from 'react-dom/client'
import { RepoProvider } from './Context'
import { Home } from './pages/Home'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RepoProvider>
      <Home />
    </RepoProvider>
  </React.StrictMode>,
)