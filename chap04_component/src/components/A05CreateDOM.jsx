import { useRef, useState } from "react";
import A05Table from './children/A05Table'

// 모듈 변수다. 컴포넌트가 재 사용되면 재 사용되는 모든 인스턴스에서 같은 값을 참조 또는 변경하게 된다 (공유한다)
// let cnt = 4;
function A05CreateDOM() {
  // 리엑트가 관리하는 변수. 최초 1번만 최기화. 그 이후로는 변경된 값을 유지만 하는 Hook.
  // 값이 변경되도 화면 리렌더링은 하지 않는다.
  // 인스턴스별로 유효한 변수다 (공유하지 않는다)
  const cnt = useRef(4);
  // console.log(cnt);

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
  const showHide = () => {
    setData({ ...data, isChecked: !data.isChecked });
  }

  const addTodo = () => {
    // const todos = todoList.concat({ id: 4, text: "네번째 할일", done: false });
    const todos = [...todoList, { id: cnt.current, text: data.todo, done: false }]
    setTodoList(todos);

    cnt.current++;
  }

  return (
    <div className="mb-5">
      <h3>A05 DOM</h3>

      <div className="mb-3">
        <select className="form-control">
          <option value="">선택해주세요</option>
          {/* 
            동적 DOM 요소 생성은 배열의 map 함수를 이용. 반환값이 생성될 요소로 지정한다
            
            항상 root 태그에 key 속성을 주어야 한다. key 값은 중복되면 에러 발생
            index 값은 보통 key로 사용하지 않는다. 

            {todoList.map((item, idx) => {
              return <option key={idx}>{item.text}</option>
            })}
          */}

          {todoList.map((item) => <option key={item.id}>{item.text}</option>)}

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
            {
              // todoList가 변경될때마다 항상 재 실행된다
              // 작성된 컴포넌트에 각 줄에 대한 정보를 속성으로 전달한다 => item={item}
              todoList.map((item) => <A05Table key={item.id} item={item} />)
            }
          </tbody>
        </table>
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
            {
              // 재 사용되는 View는 컴포넌트로 분리하자
              todoList.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.text}</td>
                  <td>{item.done ? '완료' : '미완료'}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

      {data.isChecked &&
        <div className="input-group mb-3">
          <input type="text" className="form-control" value={data.todo} onChange={changeValue} />
          <button onClick={addTodo}>ADD</button>
        </div>
      }
      <button onClick={showHide}>
        {data.isChecked ? 'HIDE' : 'SHOW'}
      </button>
    </div>
  );
}
export default A05CreateDOM;
