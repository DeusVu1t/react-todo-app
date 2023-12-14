import { useState } from "react";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  /* const [isLoading, setIsLoading] = useState(true); */

  const addTodoHandler = (text) => {
    setTodos([...todos, text]);
  /*   setIsLoading(false); */
  };
  const deleteTodoHandler = (index) => {
    setTodos(todos.filter((_, idx) => idx !== index));
  };
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
     {/*  {isLoading ? (
        <h2>Your todo list is empty. Please, enter new todo</h2>
      ) : (
        <TodoList todos={todos} deleteTodo={deleteTodoHandler}/>
      )} */}
      <TodoList todos={todos} deleteTodo={deleteTodoHandler}/>
    </div>
  );
}

export default App;
