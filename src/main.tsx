import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'

const theme = createTheme({

  components: {
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        fullWidth: true,
        size: 'small',
      },    
    },
    MuiSelect: {
      defaultProps: {
        variant: 'outlined',
        fullWidth: true,
        size: 'small',
      },
    },
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
