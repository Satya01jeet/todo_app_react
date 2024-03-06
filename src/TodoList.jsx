export function TodoList({ todos,onToggle,onDelete }){
    
      function toggleTodo(id){
        onToggle(id);
      }

      function deleteTodo(id){
        onDelete(id);
      }

    return (
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
    )
}