import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import DonkeyDangle from './App.tsx'
import { ThemeProvider } from '@mui/material'
import theme from "./theme/theme.ts"

const queryClient = new QueryClient(); 

ReactDom.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <DonkeyDangle />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
