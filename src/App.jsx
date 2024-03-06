import { useEffect, useState } from 'react'
import './styles.css'
import { NewTodoForm } from './NewTodoForm';

export default function App(){

  const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   console.log(todos);
  // },[todos]);

  function addTodo(title){
    setTodos(currentTodos => {
        return [
        ...currentTodos,
        {
            id: crypto.randomUUID(),
            title: title,
            completed: false
        },
        ]
    })
  }

  function toggleTodo(id){
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id){
          return {...todo, completed: !todo.completed};
        }
        return todo;
      })
    })
  }
  function deleteTodo(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id);
    })
  }
  return (
    <>
      <NewTodoForm onSubmit={addTodo}/>
      <h1>Todo List</h1>

      <ul className='list'>
        {/* short circuiting in javaScript */}
        {todos.length === 0 && 'No todos'}
        {todos.map(todo => {
          return (
            <li key={todo.id}>
              <label>
                <input type="checkbox" checked={todo.completed} 
                onChange={e => toggleTodo(todo.id)}/>
                {todo.title}
              </label>
              <button onClick={()=>deleteTodo(todo.id)} className='btn btn-danger'>Delete</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}