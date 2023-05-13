import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// import { Provider } from 'react-redux'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({})
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  
)
