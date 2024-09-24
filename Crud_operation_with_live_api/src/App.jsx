import React from 'react'
import Dashboard from './Pages/Dashboard'
import { Toaster } from 'react-hot-toast';
import Loader from './Components/Loader';


const App = () => {
  return (
    <>
      <Dashboard />
      {/* <Loader /> */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerStyle={{ zIndex: 99999 }}
      />
    </>
  )
}

export default App