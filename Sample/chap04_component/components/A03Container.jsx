import { useState } from 'react';

function A03Container() {
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
      <h3>A03Container</h3>

      <div className="mb-3">
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

export default A03Container
