import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/* import './index.css' */
import './reactRouter.css'
/* import App from './App.jsx' */
import ReactRouter from './ReactRouter.jsx';
import { BrowserRouser as Router, Route } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Route path='/' Component={ReactRouter} />
    </Router>
  </StrictMode>,
)
