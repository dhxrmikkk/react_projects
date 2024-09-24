import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './Router/AppRouter'
import { Toaster } from 'react-hot-toast'
import Loader from './Components/Loader/Loader'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={
          <Loader
            strokeColor={`black`}
            mode={`bydefaulLoader`}
          />}>
          <AppRouter />
        </Suspense>
        <Toaster
          toastOptions={{
            className: 'font-geist',
          }}
          position="top-center"
          containerStyle={{ zIndex: 99999 }}
          reverseOrder={false}
        />
      </BrowserRouter>
    </>
  )
}

export default App  