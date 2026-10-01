import React from "react";
import TodoItem from "./TodoItem";
import { useTodoList } from './../contexts/TodoContext'

function TodoTable() {
  const { todoList } = useTodoList();

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
          {todoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
        </tbody>
      </table>
    </div>
  );
}
export default React.memo(TodoTable);
