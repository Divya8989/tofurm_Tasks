import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import Foot from './Foot.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Foot/> */}
  </StrictMode>,
)
