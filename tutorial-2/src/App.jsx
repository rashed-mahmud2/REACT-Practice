import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'
import Data from '.././src/data.json'
import { v4 as uuidv4 } from 'uuid';

// console.log(Data[0]);


function App() {
  const [count, setCount] = useState(0)
console.log(uuidv4());

  // for(let i=0; i<Data.length; i++) {
  //   items.push(<Card titleText={Data[i].title} desText={Data[i].desc}/>)
  // }
const users = [
  {
    name : "Anisul Islam",
    age : 32,
    phones : [
      {home : "0123456789"},
      {office : "98975948"}
    ] 
  },
  {
    name : "Rashed Mahmud",
    age : 23,
    phones : [
      {home : "0123126789"},
      {office : "98944948"}
    ] 
  }
]

  return (
    <>
     <h1 className='headingStyle'>Todo App</h1>
     {Data.map((item) => 
    <Card key={uuidv4()} titleText={item.title} desText={item.desc}/>
     )}
     {
      users.map((user, index) => (<section key={index}>
        <h3>{user.name}</h3>
        <p>{user.age}</p>
        {
          user.phones.map((phone, index) => (<div key={index}>
            <p>{phone.home}</p>
            <p>{phone.office}</p>
          </div>))
        }
      </section>))
     }

    </>
    
  )

}

export default App;


