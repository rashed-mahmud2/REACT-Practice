import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const linkStyle = {
  border : "1px solid white",
  padding : "1rem",
  borderRadius : "1rem",
  display : "inline-block",
  color : "white",
}

const heading1Style = {
  color: 'yellow', 
  backgroundColor: 'black', 
  padding: '2rem', 
  borderRadius: '1rem', 
  boxShadow: '0 4px 8px gray'
}

const heading2Style = {
  color: 'black', 
  backgroundColor: 'white', 
  padding: '1rem', 
  borderRadius: '1rem', 
  boxShadow: '0 8px 16px black'
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <p className='paraStyle'>In this lesson we will learn about inline css in react</p>
      <h1 style={heading1Style}>Code step by step</h1>
      <h2 style={heading2Style}>hellow react 19</h2>
      <p className='paraStyle'>amar sonar bangla ami tomay valoabsi. cirodin toamr akash toamr batash toamr prane bajay bashhi sonar bangla am tomay vlao bashhi</p>
      <a style={linkStyle} href="www.google.com" target='_blank'>My Website</a>
    </>
  )
}

export default App
