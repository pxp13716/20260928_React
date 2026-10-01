import React, { useRef } from "react"
import { useTodoList } from './../contexts/TodoContext'

function TodoForm() {
  const inputFiled = useRef();
  const { text, changeText, addTodo } = useTodoList();

  const sendData = (evt) => {
    evt.preventDefault();
    if (text.trim() !== '') {
      addTodo(text);
      changeText('');
      inputFiled.current.focus();
    }
  }

  return (
    <form>
      <div className="input-group">
        <input type="text" className="form-control" ref={inputFiled}
          value={text} onChange={(evt) => changeText(evt.target.value)} />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary mr-1" onClick={sendData}>Submit</button>
        </div>
      </div>
    </form>
  )
}
export default React.memo(TodoForm);
