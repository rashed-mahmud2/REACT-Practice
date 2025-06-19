// import { useState } from "react"
import TodoContent from "./TodoContent"
import TodosContexts, { useTodo } from "../Contexts/TodosContexts"

function Todo({todo}) {

    const {onChangeTodo, onDeleteTodo} = useTodo();
    

// const todoContent = 

    return (
        <>
           <input type="checkbox" checked={todo.done} onChange={(e) => onChangeTodo({
            id : todo.id,
            title : todo.title,
            done : e.target.checked
           })} />
           <TodoContent todo={todo} />
           <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
        </>
    )
}

export default Todo