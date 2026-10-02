import React from 'react';
import { updateAction, deleteAction } from '@stores/todoSlice'
import '@css/todos.css';
import { useDispatch } from 'react-redux';

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <tr>
      <td>{todo.id}</td>
      <td>
        <span className={todo.done ? 'done' : undefined}>{todo.text}</span>
      </td>
      <td>
        <button className="btn btn-primary" onClick={() => dispatch(updateAction(todo.id))}>Complete</button>
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => dispatch(deleteAction(todo.id))}>Delete</button>
      </td>
    </tr>
  );
}
export default React.memo(TodoItem);
