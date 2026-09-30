import { memo, useRef } from "react";

function TodoForm({ addTodo }) {
  // 비 제어컴포넌트 방식
  const inputRef = useRef(null);

  const sendData = (evt) => {
    evt.preventDefault();

    const elem = inputRef.current;
    if (elem.value.trim() !== '') {
      addTodo(elem.value.trim());
      elem.value = '';
      elem.focus();
    }
  }

  return (
    <form onSubmit={sendData}>
      <div className="input-group">
        <input type="text" className="form-control" placeholder="할 일을 입력하세요" ref={inputRef} />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary mr-1">Submit</button>
        </div>
      </div>
    </form>
  );
}
export default memo(TodoForm);


/*
import { memo, useRef, useState } from "react";

function TodoForm({ addTodo }) {
  // 제어컴포넌트 방식
  const [text, setText] = useState('');
  const inputRef = useRef(null);

  const changeText = (evt) => {
    setText(evt.target.value);
  }

  const sendData = (evt) => {
    evt.preventDefault();

    if (text !== '') {
      addTodo(text);
      setText('');
      // document.querySelector('input').focus();
      inputRef.current.focus();
    }
  }

  return (
    <form onSubmit={sendData}>
      <div className="input-group">
        <input type="text" className="form-control" placeholder="할 일을 입력하세요" ref={inputRef}
          onChange={changeText} value={text} />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary mr-1">Submit</button>
        </div>
      </div>
    </form>
  );
}
export default memo(TodoForm);
*/
