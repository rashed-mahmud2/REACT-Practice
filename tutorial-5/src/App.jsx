import './App.css'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import STATE from './STATE.jsx'
import CONDITIONAL_RENDERING from './CONDITIONAL_RENDERING/index.jsx'
import EVENT_HANDLER_CLASS from './EVENT_HANDLER_CLASS/index.jsx'
import EVENT_BINDING from './EVENT_BINDING/index.jsx'
import Card from './EVENT_BINDING/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <STATE /> */}
      {/* <CONDITIONAL_RENDERING /> */}

      {/* <EVENT_HANDLER_CLASS /> */}

      <EVENT_BINDING />
      <Card />
    </>
  )
}

export default App;