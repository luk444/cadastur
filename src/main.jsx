import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Debug: Verificar que el DOM esté listo
console.log('🚀 CADASTUR: Iniciando aplicación...')
console.log('Root element:', document.getElementById('root'))

const rootElement = document.getElementById('root')

if (!rootElement) {
  console.error('❌ Error: No se encontró el elemento #root')
} else {
  try {
    const root = createRoot(rootElement)
    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    )
    console.log('✅ CADASTUR: Aplicación renderizada correctamente')
  } catch (error) {
    console.error('❌ Error al renderizar:', error)
  }
}

