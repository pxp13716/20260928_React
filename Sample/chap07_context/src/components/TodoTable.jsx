import React from "react";
import TodoItem from "./TodoItem";

function TodoTable() {
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
          <TodoItem />
        </tbody>
      </table>
    </div>
  );
}
export default React.memo(TodoTable);
