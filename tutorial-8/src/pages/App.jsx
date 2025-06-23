import { useEffect, useState } from "react"
import FetchData from "../components/FetchData"
import Nav from "../components/Nav";

function App() {
const [todos, setTodos] = useState([]);
const [todoTitle, setTodoTitle] = useState("");

const  fetchAllTodos = async () => {
      const response = await fetch("http://localhost:3000/todos");
      const data = await response.json()
      setTodos(data)
}

useEffect(() => {
  fetchAllTodos()
}, []);

// useEffect(() => {
//    fetch("http://localhost:3000/todos")
//    .then((res) => res.json())
//    .then((data) => {
//     setTodos(data)
//    }) 
// }, [])


const submitHandler = (e) => {
  if(todoTitle.trim() === "") {
    return alert("please enter a valid todo title")
  }
  e.preventDefault();
  console.log("This is form submit handler");
  console.log(todoTitle, "todoTitle");
  fetch('http://localhost:3000/todos', {
    method :"POST",
    body : JSON.stringify({title : todoTitle, isComplete : false}),
    headers: {
      "Content-type" : "application/json",
    }
  }).then(() => {
    fetchAllTodos()
    setTodoTitle("")
  })
}

const deleteHandler =(todoId) => {
   fetch(`http://localhost:3000/todos/${todoId}`, {
      method : "DELETE"
   }).then(() => {
    fetchAllTodos()
   });
}


  return (
    <>
       <form onSubmit={submitHandler}>
        <input type="text" placeholder="Add todo" value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)} />
        <button type="submit">Submit</button>
        </form>
        <h2>All Todo</h2>
        <ul className="todoLists">
          {todos?.map((todo) => (
            <li key={todo.id}>
              <span><input type="checkbox" /></span>
              <span>{todo.title}</span>
              <button onClick={() => deleteHandler(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
       
    </>
  )
}

export default App
