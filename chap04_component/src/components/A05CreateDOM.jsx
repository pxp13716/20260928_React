import { useState } from "react";

function A05CreateDOM() {
  const [todoList, setTodoList] = useState([
    { id: 1, text: "첫번째 할일", done: true },
    { id: 2, text: "두번째 할일", done: false },
    { id: 3, text: "세번째 할일", done: true },
  ]);

  const [data, setData] = useState({
    todo: "",
    isChecked: false,
  });

  const changeValue = (evt) => {
    setData({ ...data, todo: evt.target.value });
  }
  const addTodo = () => {
    setTodoList(todoList.concat({ id: 4, text: "네번째 할일", done: false }));
  }
  const showHide = () => {
    setData({ ...data, isChecked: !data.isChecked });
  }

  return (
    <div className="mb-5">
      <h3>A05 DOM</h3>

      <div className="mb-3">
        <select className="form-control">
          <option value="">선택해주세요</option>
          {/* 
            항상 root 태그에 key 속성을 주어야 한다. key 값은 중복되면 에러 발생
            index 값은 보통 key로 사용하지 않는다. 
          */}
        </select>
      </div>

      <div className="mb-3">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>할일</th>
              <th>상태</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>

      <div className="input-group mb-3">
        <input type="text" className="form-control" value={data.todo} onChange={changeValue} />
        <button>ADD</button>
      </div>

      <button onClick={showHide}>
        HIDE
      </button>
    </div>
  );
}
export default A05CreateDOM;
