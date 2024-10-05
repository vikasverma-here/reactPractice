import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Header from './header.jsx'
import './header.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Header/>
  </StrictMode>,
)
