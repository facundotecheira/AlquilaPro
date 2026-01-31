import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import './assets/css/navbar.css'
import './assets/css/home.css'
import './assets/css/global.css'
import './assets/css/footer.css'
import './assets/css/search.css'
import './assets/css/login.css'
import './assets/css/register.css'


import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
)
