import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './Router/AppRouter'
import Loader from './Components/Loader'
import { CartProvider } from './Context/CartContext'
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <CartProvider>
            <AppRouter />
          </CartProvider>
        </Suspense>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </BrowserRouter>
    </>
  )
}

export default App