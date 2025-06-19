import './App.css'
import AddTodo from './components/Addtodo'
import TodoLists from './components/TodoLists'
import { TodosContextProvider } from './Contexts/TodosContexts'


function App() {

  
  return (
    <>
      <div className='todo-box'>
          <h1>Simple Todo Application</h1>
          <TodosContextProvider>
            <AddTodo />
            <TodoLists />
          </TodosContextProvider>
      </div>
    </>
  )
}

export default App



