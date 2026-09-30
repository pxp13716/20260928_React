import { memo } from 'react'
import style from './../css/todos.module.css'

function TodoItem(props) {
  // memo의 조건은 props의 값이 이전 가상돔의 props의 값과 동일한 경우만 적용된다.
  const {
    todo = {},
    updateTodo = () => { },
    deleteTodo = () => { },
  } = props;

  return (
    <tr>
      <td>{todo.id}</td>
      <td>
        <span className={todo.done ? style.done : undefined}>{todo.text}</span>
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
export default memo(TodoItem);
