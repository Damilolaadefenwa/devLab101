import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/* import './index.css' */
import './reactRouter.css'
/* import App from './App.jsx' */
import ReactRouter from './ReactRouter.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { StoreProvider } from 'easy-peasy';
import store from './store.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StoreProvider store={store}>
      <Router>
        <ReactRouter />
        </Router>
    </StoreProvider>
  </StrictMode>,
)
