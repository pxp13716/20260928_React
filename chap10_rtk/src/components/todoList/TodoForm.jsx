import React, { useRef } from 'react';
import { addAction, changeTextAction } from '@stores/todoSlice'
import { useDispatch, useSelector } from 'react-redux';

function TodoForm() {
  const { text } = useSelector(store => store.todoStore);
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const sendData = (evt) => {
    evt.preventDefault();
    if (text.trim() !== '') {
      dispatch(addAction(text));
      dispatch(changeTextAction(''));
      inputRef.current.focus();
    }
  }
  return (
    <form onSubmit={sendData}>
      <div className="input-group">
        <input type="text" className="form-control" ref={inputRef}
          value={text} onChange={(evt) => dispatch(changeTextAction(evt.target.value))} />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary mr-1">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
export default React.memo(TodoForm);

