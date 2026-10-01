import React from "react";
import "./../css/todos.css";
import { useTodoList } from './../contexts/TodoContext'

function TodoItem(props) {
  const { todo } = props;
  const { updateTodo, deleteTodo } = useTodoList();

  return (
    <tr>
      <td>{todo.id}</td>
      <td>
        <span className={todo.done ? 'done' : undefined}>{todo.text}</span>
      </td>
      <td>
        <button className="btn btn-primary" onClick={() => updateTodo(todo.id)}>Complete</button>
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
      </td>
    </tr>
  );
}
export default React.memo(TodoItem);
