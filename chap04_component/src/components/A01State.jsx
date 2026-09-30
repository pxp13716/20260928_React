/* eslint-disable no-unused-vars */
import { useState } from "react"

function A01State() {
  /*
    상태변수
    const [getter, setter] = useState(초기값);
    getter는 읽기 전용이다. setter는 getter를 변경하는 함수
    setter 사용법
    1. setter(value);
    2. setter( (prev) => 리턴값 );    prev는 getter의 현재 값을 주입해 준다
  */
  const [name, setName] = useState('Adam');
  const [age, setAge] = useState(20);
  const [check, setCheck] = useState(true);
  const [arr, setArray] = useState([10, 11]);
  const [user, setUser] = useState({ name: 'Eve', age: 30 });

  const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;

  // Event Handler
  const changeAge = (num) => {
    let value = Number(num);
    if (Number.isNaN(value)) value = 0;
    setAge(value);
  }
  const changeCheck = () => setCheck(!check);

  const addArray = () => {
    const random = Math.floor(Math.random() * 100) + 1;
    // setArray(arr.push(random));      // Error

    // const newArr = [...arr, random];            // 스프레드 오퍼레이터. 얕은 복사
    // newArr.push(random);

    const newArr = arr.concat(random);            // arr 배열 뒤에 요소를 추가한 새로운 배열을 반환한다
    setArray(newArr);
  }
  const updateArray = (idx, value) => {
    const newArr = [...arr];
    newArr[idx] = value;
    setArray(newArr);
  }
  const deleteArray = (idx) => {
    const newArr = [...arr];
    newArr.splice(idx, 1);
    setArray(newArr);
  }

  const addObject = (key, value) => {
    // 1. 기존 객체 복상
    const newUser = { ...user };
    newUser[key] = value;
    setUser(newUser);
  }
  const updateObject = (key, value) => {
    // const newUser = { ...user, [key]: value };
    // setUser(newUser);
    setUser({ ...user, [key]: value });
  }
  const deleteObject = (key) => {
    const newUser = { ...user };
    delete newUser[key];
    setUser(newUser);
  }


  return (
    <div>
      {/* React v19 버전에서 title과 meta를 추가할 수 있도록 변경됨 */}
      <title>React State</title>
      <meta name="description" content="React 상태에 대한 예제..." />

      <h3>A01State</h3>

      <div className="mb-3">
        Name: {name} <br />
        Age: {age} <br />
        Check: {check ? '동의' : '동의 안함'} <br />
        Array: {arr[0]} / {arr[1]} / {arr[2] ?? 0} <br />
        Object: {user.name} / {user.age} / {user.address ?? 'UNKNOWN'} <br />
        Function: {onAdd(10, 20)} <br />
      </div>

      <div>
        <button onClick={(evt) => setName('아담')}>Name</button>
        <button onClick={(evt) => changeAge(25)}>Age</button>
        <button onClick={changeCheck}>Check</button>

        <button onClick={addArray}>Add Array</button>
        <button onClick={(evt) => updateArray(1, 2000)}>Update Array</button>
        <button onClick={(evt) => deleteArray(1)}>Delete Array</button>

        <button onClick={(evt) => addObject('address', 'Seoul')}>Add Object</button>
        <button onClick={(evt) => updateObject('address', 'Busan')}>Update Object</button>
        <button onClick={(evt) => deleteObject('address')}>Delete Object</button>
      </div>
    </div>
  )
}

export default A01State
