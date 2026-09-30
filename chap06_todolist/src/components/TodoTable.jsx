import { memo } from 'react'
import TodoItem from './TodoItem'

function TodoTable(props) {
  // todoList가 항상 변경된다. 따라서 memo를 기술하는 의미가 없음
  const {
    todoList = [],
    updateTodo = () => { },
    deleteTodo = () => { },
  } = props;

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th style={{ width: "15%" }}>ID</th>
            <th>Todo</th>
            <th style={{ width: "15%" }}>Complete</th>
            <th style={{ width: "15%" }}>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((todo) => <TodoItem key={todo.id}
            todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />)}
        </tbody>
      </table>
    </div>
  );
}
export default memo(TodoTable);
