import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './App.tsx'
import { RouterProvider } from 'react-router'
import CartProvider from './contexts/CartContext.tsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
      <Toaster
        position='bottom-center'
        reverseOrder={false}
      >
      </Toaster>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>,
)
