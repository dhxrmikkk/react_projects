import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './Router/AppRouter'
import Loader from './Components/Loader'
import { CartProvider } from './Context/CartContext'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <CartProvider>
            <AppRouter />
          </CartProvider>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App