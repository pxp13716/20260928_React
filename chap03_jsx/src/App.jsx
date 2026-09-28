
/*
  JSX (JavaScript XML)
  1. 반드시 종료 태그가 존재해야 한다.
    <br> => <br />
    <img src...> => <img src="..." />
    <App></App> => <App />
  2. 문자열로 묶지 않는다 (객체로 취급됨)
    return <h1>Hello World</h1> => return "<h1>Hello World</h1>" (X)
  3. 반환되는 View는 단일 Element이어야 한다
    Error => 반환되는 요소가 2개라 에러
    return <h1>Hello World</h1>
      <div>Good Morning</div>
    
    OK => div 요소 1개만 반환
    return <div>
      <h1>Hello World</h1>
      <div>Good Morning</div>
    </div>
  4. JSX의 태그 내부의 속성은 JavaScript 속성을 따른다
    JS => document.getElementById(app).className = 'orange';
    JSX => return <div className="orange">...</div>
*/

/*
// 문자열로 그대로 출력됨
function App() {
  return '<h1>Hello World</h1>'
};
export default App;
*/

/*
// 정상 동작
function App() {
  return <h1>Hello World</h1>
};
export default App;
*/

/*
// Error => 두개의 요소를 반환
function App() {
  return <h1>Hello World</h1>
  <div>Good Morning!!</div>
};
export default App;
*/

/*
// OK
function App() {
  return <div>
    <h1>Hello World</h1>
    <div>Good Morning!!</div>
  </div>
};
export default App;
*/

/*
// OK => ()을 이용해 group을 설정. () 내부의 요소가 하나의 그룹으로 취급됨
function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <div>Good Morning!!</div>
    </div>
  )
};
export default App;
*/

/*
function App() {
  return (
    <div className="m-3">
      <h1>Hello World</h1>
      <div>Good Morning!!</div>
    </div>
  )
};
export default App;
*/

import { useState } from "react";

// 이미지를 리소스 형태로 관리 (빌드되면 Hash가 붙는다. 변경되면 Hash가 변경됨)
// import three from './assets/images/three.png'
// import react from './assets/react.svg'

// 외부 View 파일(컴포넌트) 가져오기 
import OneComp from "./components/OneComp";
import ImgComp from "./components/ImgComp";

function App() {
  let name = 'Adam';      // 재 실행 시점마다 초기화 된다
  const age = 20;
  const check = true;
  const arr = [10, 11];
  const user = { name: 'Eve', age: 30 };
  const onAdd = (x = 0, y = 0) => `${x} + ${y} = ${x + y}`;

  const changeName = function (evt) {
    console.log(evt.target)
    name = '아담';
    console.log(name);        // 변경되어 있음 => DOM 요소를 찾아서 값을 변경하는 작업을 해야 함
  }

  // 상태 변수 (Hook) => 리엑트에 파이퍼에서 관리되는 변수. 
  // 상태변수가 변경되면 리엑트는 화면을 리렌더링(현재 함수를 재 호출)
  // const [getter, setter] = useState(기본값);
  const [nick, setNickname] = useState('NolBu');
  const changeNickname = function (x) {
    setNickname(x);
  }

  return (
    <div className="m-3">
      <h1>JSX (JavaScript XML)</h1>

      <ImgComp />

      <div>
        {/* 
          JavaScript의 보간법 => ${ }, React => { }로 사용한다 
          { => JSX 내부(DOM)에서 자바스크립트를 삽입하기 위해 시작. 즉 <script> 시작 태그로 생각하자
          } => </script>로 생각하자
          { } 내부에서는 표현식만 사용이 가능하다 (if, for 등의 구문은 올 수 없다) 

          { } 내부의 값이 undefined, null, boolean 값은 화면에 아무것도 표시되지 않는다.
          ?.(옵셔널 체이닝 연산자) => ?. 앞의 값이 undefined, null인 경우 ?. 뒤를 평가하지 않고
            undefined, null을 반환 
          ??(널리쉬 연산자) => ?? 의 앞의 값이 undefined, null인 경우만 ?? 뒤의 값을 기본값을 사용

          이벤트명 => on 다음에 단어의 첫 글자를 대문자로 변경. onmousedown => onMouseDown
          이벤트 핸들러 
            1. 이벤트 핸들러에 전달할 매개변수가 없거나 event 객체 1개만 존재하는 경우 이벤트 핸들러명만 적는다
              onClick={changeName}
            2. 이벤트 핸들러에 전달할 매개변수가 event 이외에 1라도 있으면 이벤트 핸들러가 함수를 호출하는 방식으로 기술한다
              onClick={(evt) => changeName('아담')}
        */}
        Name: {name} <br />
        Nickname: {nick} <br />
        Age: {age} <br />
        Check: {check ? '동의' : '동의 안함'} <br />
        Array: {arr[0]} / {arr[1]} / {arr[2] ?? 0} <br />
        User: {user.name} / {user.age} / {user.address ?? 'UNKNOWN'} <br />
        onAdd: {onAdd(10, 20)} <br />
      </div>

      <div>
        <button onClick={changeName}>Name</button>
        <button onClick={(evt) => changeNickname('놀부')}>Nick</button>
      </div>

      <OneComp></OneComp>

      <p>
        It is similar to sending automotive engineers to a manufacturer not merely to buy a car, but to learn how it is assembled, tested and operated.
      </p>
    </div>
  )
};
export default App;
