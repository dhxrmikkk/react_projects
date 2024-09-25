import { createRoot } from 'react-dom/client'
import { lazy } from 'react'
const App = lazy(() => import('./App'));
import './index.css'

createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)
