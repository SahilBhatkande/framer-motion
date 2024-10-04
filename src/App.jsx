import { useState } from 'react'
import Background from './Components/Background'
import Foreground from './Components/Foreground.jsx'

import './App.css'

function App() {
 

  return (
    <>

    <div className=' relative w-full h-screen bg-zinc-800'>

      <Background/>

      <Foreground/>

    </div>
      
    </>
  )
}

export default App
