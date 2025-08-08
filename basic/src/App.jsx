import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function changeColor(newColor){
    document.body.style.backgroundColor = newColor;
  }
  return (
    <>
      <div className='bg-white rounded-lg p-4'>
        <div className='bg-black text-white p-4 rounded-lg m-2' onClick={()=>changeColor('red')}>Red</div>
        <div className='bg-black text-white p-4 rounded-lg m-2' onClick={()=>changeColor('yellow')}>Yellow</div>
        <div className='bg-black text-white p-4 rounded-lg m-2' onClick={()=>changeColor('blue')}>Blue</div>
        <div className='bg-black text-white p-4 rounded-lg m-2' onClick={()=>changeColor('green')}>Green</div>
        <div className='bg-black text-white p-4 rounded-lg m-2' onClick={()=>changeColor('magenta')}>Magents</div>
        <div className='bg-black text-white p-4 rounded-lg m-2' onClick={()=>changeColor('orange')}>Orange</div>
        <div className='bg-black text-white p-4 rounded-lg m-2' onClick={()=>changeColor('black')}>Black</div>
        <div className='bg-black text-white p-4 rounded-lg m-2' onClick={()=>changeColor('white')}>White</div>
      </div>
    </>
  )
}

export default App
