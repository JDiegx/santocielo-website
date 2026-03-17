import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LinkInBio from './pages/LinkInBio/LinkInBio'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LinkInBio/>
  </StrictMode>,
)
