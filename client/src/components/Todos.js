export default function Todos
(
    { todos, toggleToDoStatus }
)

{
    console.log(todos)
    return(
        <table className="table">
              <thead>
                <tr>
                  <th className="table-header-task">Task</th>
                  <th className="table-header-status">Status</th>
                  <th className="table-header-action">Action</th>
                </tr>
              </thead>
              <tbody>

                {todos.map(todo =>(
                    <tr key={todo._id} className={`todo${todo.isCompleted ? " is-completed" : ""}`}>
                        <td>{todo.text}</td>
                        <td>{todo.isCompleted ? 'Completed' : 'In progress'}</td>
                        <td className="todo-action">
                            <button className="btn todo-btn" onClick={() => toggleToDoStatus(todo._id)}>Change status</button>
                        </td>
                    </tr>
                    ))
                }
                
              </tbody>
            </table>
    );
}