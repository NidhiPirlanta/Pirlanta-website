import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import './styles/01-hero.css'
import './styles/02-nav.css'
import './styles/03-sections.css'
import './styles/04-services-cyber.css'
import './styles/05-partners.css'
import './styles/06-components.css'
import './styles/07-diagrams.css'
import './styles/08-pages.css'
import App from './App'

const rootElement = document.getElementById('root')

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  )
}

