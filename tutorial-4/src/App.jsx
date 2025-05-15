import './App.css'
import products from './data.js'
import Card from './components/Card.jsx';

// console.log(products);


function App() {

  return (
    <>
      <h1>Bd Store</h1>
      <div className="container">
      {products.map((item,index) => (
        <Card key={item.id} cardTitle={item.title} cardImg={item.image} cardDesc={item.description} prize={item.price} cardCategory={item.category} rating={item.rating.rate} count ={item.rating.count}/>
      ))}
      </div>
    </>
  )
}

export default App
