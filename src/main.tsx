import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { MaiUIProvider } from '@shiraya-ma/mai-ui'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MaiUIProvider>
      <App />
    </MaiUIProvider>
  </StrictMode>
)
