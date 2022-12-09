import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Ruter } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Ruter>
    <App />
    </Ruter>
  </React.StrictMode>,
)
