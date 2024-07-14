import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NaVigation from './components/navigation'
import PaRt1 from './components/part1'
import PaRt2 from './components/part2'
import PaRt3 from './components/part3'
import SecTion2 from './components/section2'
import Sec2Part1 from './components/sec2part1'

function App() {
  return (
    <>
      <NaVigation/>

      <div id="maincontent">
      <PaRt1/>
      <PaRt2/>
      <PaRt3/>
      </div>
      
      <div id="end">
      <SecTion2></SecTion2>
      <Sec2Part1></Sec2Part1>
      </div>


      

    </>
  )
}

export default App
