import { createContext, useContext } from "react";
import { useImmerReducer } from "use-immer";
import initialTodos from "../data/initialTodos";
import todosReducer from "../reducers/todosReducer";

const TodosContexts = createContext(null);
export default TodosContexts

export const TodosContextProvider = ({children}) => {
    const [todos, dispatch] = useImmerReducer(todosReducer, initialTodos);

  const handleChangeTodo = (todo) => {
      dispatch({
        type: "change",
        todo,
      })
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: "delete",
      id,
    })
  
  };

  const handleAddTodo = (title) => {
    dispatch({
      type: "add",
      title,
    });
  }

  return (
    <TodosContexts value={{
        todos,
        onChangeTodo: handleChangeTodo,
        onDeleteTodo: handleDeleteTodo,
        onAddTodo: handleAddTodo,
            
    }}>
      {children}
    </TodosContexts>
  )
}

export function useTodo() {
    return useContext(TodosContexts);
} 
