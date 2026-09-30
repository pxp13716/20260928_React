import { useState, useCallback, useRef } from "react";

import TodoForm from './TodoForm'
import TodoTable from './TodoTable'

import { makeTodo } from './../config/todo'

const TodoContainer = () => {
  const [todoList, setTodoList] = useState(makeTodo);

  /*
    // DB에서 넘어온 값(테이블의 값)이 대부분 이 형태이다
    todoList = [
      { id: 1, text: '첫번째 할일', done: true },
      { id: 2, text: '두번째 할일', done: false },
    ]
  */

  // 매개변수는 자식이 전달하는 값. 즉 하위 컴포넌트가 상위 컴포넌트에 데이터를 함수의 매개변수로 전달할 수 있다
  // useCallback Hook을 사용하는 기준점 (v19 React Compiler 프로젝트)
  // 1. 자식 요소에 전달하는 이벤트 핸들러 (사용)
  // 2. 자식 요소에 전달하지 않고 현재 컴포넌트에서만 사용하는 이벤트 핸들러 (사용하지 않음 - useCallback 처리 비용이 더 들어간다)
  const updateTodo = useCallback((id) => {
    /*
    const todos = todoList.map((todo) => {
      if (todo.id === id) return { ...todo, done: !todo.done };
      else return todo;
    });
    setTodoList(todos);
    */
    setTodoList((prev) => {
      const todos = prev.map((todo) => {
        if (todo.id === id) return { ...todo, done: !todo.done };
        else return todo;
      });
      return todos;
    })
  }, [])

  const deleteTodo = useCallback((id) => {
    /*
    const todos = todoList.filter((todo) => {
      if (todo.id !== id) return true;   // todos의 배열에 todo의 값이 추가된다
      else return false;                // todos의 배열에 추가되지 않음
    })
    setTodoList(todos);
    */
    setTodoList((prev) => {
      const todos = prev.filter((todo) => {
        if (todo.id !== id) return true;
        else return false;
      })
      return todos;
    });
  }, []);

  return (
    <div>
      <h3>Todo List</h3>

      <TodoForm />
      <TodoTable todoList={todoList} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
};
export default TodoContainer;
