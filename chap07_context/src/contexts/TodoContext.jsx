/* eslint-disable react-refresh/only-export-components */
import { createContext, use, useCallback, useRef, useState } from "react";

const TodoContext = createContext(null);

function TodoProvider(props) {
  const [todoList, setTodoList] = useState([
    { id: 1, text: '첫번째 할일', done: false },
    { id: 2, text: '두번째 할일', done: true },
    { id: 3, text: '세번째 할일', done: false },
  ]);
  const [text, setText] = useState('할일');     // 원래는 여기 있으면 안됨(공유되는 값이 아님)
  const cnt = useRef(4);

  const changeText = (str) => setText(str);

  const updateTodo = useCallback((id) => {
    setTodoList(todoList => {
      return todoList.map(todo => {
        if (todo.id === id) return { ...todo, done: !todo.done }
        else return todo;
      });
    });
  }, []);
  const deleteTodo = useCallback(id => {
    setTodoList(todoList => todoList.filter(todo => todo.id !== id));
  }, []);
  const addTodo = useCallback((text) => {
    setTodoList(todoList => {
      const todo = { id: cnt.current, text, done: false }
      return todoList.concat(todo)
    })
    cnt.current++;
  }, []);

  return (
    <TodoContext value={{ todoList, text, changeText, updateTodo, deleteTodo, addTodo }}>
      {props.children}
    </TodoContext>
  )
}

const useTodoList = () => {
  const context = use(TodoContext);
  if (!context) throw new Error('프로바이더를 정의하지 않았습니다...');

  return context;
}

export { TodoProvider, useTodoList };
