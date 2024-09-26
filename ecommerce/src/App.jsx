import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './Router/AppRouter'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={`Loading...`}>
          <AppRouter />
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App