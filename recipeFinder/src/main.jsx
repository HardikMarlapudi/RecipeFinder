import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RecipeFinder from './components/RecipeFinder.jsx'
import './styles/RecipeFinder.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RecipeFinder />
  </StrictMode>,
)
