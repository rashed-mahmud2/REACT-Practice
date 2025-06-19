import Todo from "./Todo"
import { useTodo } from "../Contexts/TodosContexts"


function TodoLists() {
 const {todos} = useTodo()
   return (
    <>
      <ul>
         {todos.map((todo) => (
            <li key={todo.id}>
               <Todo todo={todo} />
            </li>
         ))}
      </ul>
    </>
   )
}

export default TodoLists

