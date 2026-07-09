import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from './store/store.ts'

import App from './App.tsx'
import { ToastProvider } from './context/toastContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
      <ToastProvider>
        <App />
      </ToastProvider>
    </Provider>
    </BrowserRouter>
  </StrictMode>,
)
