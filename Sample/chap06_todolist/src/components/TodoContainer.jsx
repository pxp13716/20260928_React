import { useState, useCallback, useRef } from "react";

import TodoForm from './TodoForm'
import TodoTable from './TodoTable'

const makeTodo = () => {
  const todos = [];
  for (let i = 1; i <= 5; i++) {
    todos.push({ id: i, text: `${i}번째 할 일`, done: false });
  }
  return todos;
};

const TodoContainer = () => {
  return (
    <div>
      <h3>Todo List</h3>

      <TodoForm />
      <TodoTable />
    </div>
  );
};
export default TodoContainer;
