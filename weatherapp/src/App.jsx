import React, { useEffect } from 'react'

import CLOUDS from 'vanta/src/vanta.clouds'
const App = () => {
  useEffect(() => {
    CLOUDS({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
    })
  }, [])
  return (
    <>
      <main className='h-screen flex justify-center items-center font-geist' id='vanta'>
        <div className='flex flex-col bg-white/35 p-6 rounded-md w-96'>
          <div className="w-full mb-10">
            <input type="text" name="" id="" className='bg-transparent border border-black/25 p-2 rounded-md w-full' placeholder='Enter City Name' />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <span className='text-5xl'>26°C</span>
            <span>Ahmedabad</span>
          </div>
        </div>
      </main>
    </>
  )
}

export default App