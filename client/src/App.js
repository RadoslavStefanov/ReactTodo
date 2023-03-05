import {useEffect, useState} from "react";

import Loading from "./components/Loading";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Todos from "./components/Todos";

function App() 
{
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    fetch ('http://localhost:3030/jsonstore/todos')
    .then(res => res.json())
    .then(data => {
        setTodos(Object.values(data));
        setIsLoading(false);
      })
  }, []);

  const toggleToDoStatus = (id) => {
    console.log(id)
    setTodos(state => state.map(t => t._id === id ? ({ ...t , isCompleted: !t.isCompleted}) : t))
  };

  const onTodoAdd = () => {
    const lastIdNumber = Number(todos[todos.length-1]._id.split('_')[1]);
    const newTodoTitle = prompt("New ToDo title:");
    setTodos(state => 
      [
        {id: "todo_"+lastIdNumber, text: newTodoTitle, isCompleted: false}
        , ...state
      ])
  }
  return (
    <div>
      
      <Header/>

      <main className="main">
        <section className="todo-list-container">
          <h1>Todo List</h1>

          <div className="add-btn-container">
            <button className="btn" onClick={onTodoAdd}>+ Add new Todo</button>
          </div>

          <div className="table-wrapper">

            {
              isLoading == true ? 
                <Loading/> : 
                <Todos 
                  todos={todos} 
                  toggleToDoStatus = {toggleToDoStatus}
                />
            }
            

          </div>
        </section>
      </main>

      <Footer/>
    </div>
  );
}

export default App;
