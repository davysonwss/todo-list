import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import GlobalStyle from './styles/globalStyles.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <GlobalStyle />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>
)
