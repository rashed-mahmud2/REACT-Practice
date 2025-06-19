import { useState } from "react"
import { useTodo } from "../Contexts/TodosContexts";

function AddTodo() {
   const [title, setTitle] = useState('')
   const {onAddTodo} = useTodo()
   return (
      <>
        <input type="text" placeholder="বাজারের নাম লিখুন" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <button onClick={() => {
         onAddTodo(title);
         setTitle('');
        }}>লিস্টে যোগ করুন</button>
      </>
   )
}

export default AddTodo