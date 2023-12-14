import Todo from "./Todo";
import styles from "./TodoList.module.css";

function TodoList({ todos, deleteTodo }) {
  return (
    <div className={styles.todoListContainer}>
     {!todos.length && <h2>Your todo list is empty. Please, enter new todo</h2>}

      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} index={index} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}

export default TodoList;
