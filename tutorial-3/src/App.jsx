import React from 'react'
import { useState } from 'react'
import './App.css'
import Card1 from './components/Card1.jsx'
import Card2 from './components/Card2.jsx'
import Card3 from './components/Card3.jsx'
import Card5 from './components/Card5.jsx'


// how react works under the hood.

function Welcome() {
  return (
    <>
     <h2>hellow world! How are you?</h2>
    </>
  )
}

function Welcome2() {
return React.createElement("h1", {}, "This is message form welcome Two functional component");
}


function ShowInfo() {
  return (
    <>
      <p>Todo Title</p>
      <p>Todo Description</p>
    </>
  )
}


function ShowInfo2() {
  return React.createElement("div", {}, 
    React.createElement("p", {}, "Todo Title2"),
    React.createElement("p", {}, "Todo Desc2")
  )
}


function App() {
 
  return (
    <>
     <Welcome />
     <Welcome2 />
     <ShowInfo />
     <ShowInfo2 />
     <Card3 />
     <Card5 />
    </>
  )
}

export default App
