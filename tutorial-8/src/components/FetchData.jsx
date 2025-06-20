import { useState, useEffect } from "react"

function FetchData() {
const [posts, setPosts] = useState([]);
const [counter, setCounter] = useState(10);
const [counter2, setCounter2] = useState(5);
const [counter3, setCounter3] = useState(3);
 

useEffect(() => {
   fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
       .then(res => res.json())
       .then(data => {
        console.log(data, "data");
        
        setPosts(data)
       })
}, []);

useEffect(() => {
   console.log("This is from useEffect 2");
   
}, [counter2]);


console.log("I am rendering");

  return (
    <>
      <div className="counter-app">
        <p>The value of the counter is {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
      </div>
      <div className="counter-app2">
        <p>The value of the counter is {counter2}</p>
        <button onClick={() => setCounter2(counter2 + 5)}>Increment</button>
      </div>
      <div className="counter-app3">
        <p>The value of the counter is {counter3}</p>
        <button onClick={() => setCounter3(counter3 + 3)}>Increment</button>
      </div>
      <div className="post-list">
        <h1>hellow worold</h1>
        <ul>
          {posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default FetchData