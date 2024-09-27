import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './Router/AppRouter'
import Loader from './Components/Loader'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <AppRouter />
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App