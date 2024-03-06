import { useEffect, useState } from 'react'
import './styles.css'

export default function App(){
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    console.log(todos);
  },[todos]);
  function handleSubmit(e){
    e.preventDefault();
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title: newItem,
          completed: false
        },
      ]
    })
    setNewItem("");
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
      <form onSubmit={handleSubmit}
       className="new-item-form">
        <div className="form-row">
          <label htmlFor='item'>Add New Task</label>
          <input 
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          type="text" name="" id="item" />
        </div>
        <button className='btn'>Add</button>
      </form>
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