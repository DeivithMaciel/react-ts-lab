import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { store } from './store/store.ts'

import App from './App.tsx'
import { ToastProvider } from './context/ToastContext.tsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
      <ToastProvider>
      <QueryClientProvider  client={queryClient}>
        <App />
      </QueryClientProvider>
      </ToastProvider>
    </Provider>
    </BrowserRouter>
  </StrictMode>,
)
