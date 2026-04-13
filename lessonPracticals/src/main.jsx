import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import FetchChallenge from './FetchChallenge.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FetchChallenge />
  </StrictMode>,
)
