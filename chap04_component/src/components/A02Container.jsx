import { useState } from 'react';

import A02ChildOne from './children/A02ChildOne'
import A02ChildTwo from './children/A02ChildTwo'

function A02Container() {
  const [name, setName] = useState('Adam');
  const [age, setAge] = useState(10);
  const [check, setCheck] = useState(true);
  const [user, setUser] = useState({ name: '놀부', age: 20 });

  const changeName = (str) => setName(str);
  const changeAge = (x) => setAge(x);
  const changeCheck = () => setCheck(!check);
  const changeUser = (key, value) => setUser({ ...user, [key]: value });

  const onAdd = (x = 0, y = 0) => `${x} + ${y} = ${x + y}`;

  return (
    <div className="mb-5">
      <h3>A02Container</h3>

      <div className="mb-3">
        {/* 
          1. 작업을 지시 => 지시자 (상태변수 또는 일반 변수)
          2. 상태 동기화 => 부모의 상태 변수를 하위 컴포넌트에 전달
            2.1 자식컴포넌트에서 동기화 할 변수를 부모(컨테이너 컴포넌트)에 정의
            2.2 부모 컴포넌트의 상태 변수를 하위 컴포넌트(표현 컴포넌트)에 속성으로 전달
            2.3 자식 컴포넌트를 전달받은 변수를 View에서 사용 (읽기 전용)
          3. View 전달 

          key="value" => 문자열
          key={value} => 표현식 (값도 표현식이다)
        */}
        <A02ChildOne type="date" num={10} checkOne={true} checkTwo
          name={name} age={age} check={check} user={user} add={onAdd}
          changeName={changeName} changeAge={changeAge}></A02ChildOne>
        <A02ChildOne type="time"></A02ChildOne>

        <A02ChildTwo name={name} age={age} check={check} user={user}
          changeCheck={changeCheck} changeUser={changeUser}></A02ChildTwo>
      </div>


      <div className="mb-3">
        <h4>Container</h4>

        Name: {name} <br />
        Age: {age} <br />
        Check: {check ? '동의' : '동의안함'} <br />
        User: {user.name} / {user.age} / {user.address} <br />
        onAdd: {onAdd(10, 20)}
      </div>

      <div className="mb-5">
        <button onClick={() => changeName('Eve')}>NAME</button>
        <button onClick={() => changeAge(3000)}>AGE</button>
        <button onClick={changeCheck}>CHECK</button>
        <button onClick={() => changeUser('address', 'Seoul')}>ADD USER</button>
        <button onClick={() => changeUser('address', 'Busan')}>UPDATE USER</button>
      </div>
    </div>
  )
}

export default A02Container
