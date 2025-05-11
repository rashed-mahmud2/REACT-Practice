import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-white text-black p-3'> the name of my country is Bangladesh</h1>
      <p className='bg-amber-500 text-white-50 p-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptatum expedita rem in! Facere repellat molestiae veniam aut, iusto fuga.</p>

      <div className="card text-left">
        <h3 className='font-bold text-yellow-700 bg-white'>Lorem ipsum dolor sit amet.</h3>
        <p className='text-capitalize bg-green-400 text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nisi quos commodi exercitationem repellendus praesentium consectetur impedit magni, perspiciatis blanditiis.</p>
      </div>

      <div className=' bg-amber-700 p-[1rem] rounded-[1rem] shadow-amber-100 shadow-xl'>
        <h3 className=' text-4xl'>This is heading of card</h3>
        <p className='text-justify bg-amber-600 p-[10px] rounded-xl mt-5 hover:transform-3d scale-105 transition duration-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem iste, eligendi quod aliquam exercitationem nesciunt tempora sapiente excepturi, ullam expedita repudiandae quis nam, incidunt praesentium soluta deserunt esse quidem odit.</p>
      </div>
    </>
  )
}

export default App
