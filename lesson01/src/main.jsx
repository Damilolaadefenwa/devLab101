import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/* import './index.css' */
import './reactRouter.css'
/* import App from './App.jsx' */
import ReactRouter from './ReactRouter.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReactRouter />
  </StrictMode>,
)
