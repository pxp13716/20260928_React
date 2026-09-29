/*
React Hook 규칙
최상위 레벨에서만 호출: Hook은 React 함수 컴포넌트나 커스텀 Hook의 최상위 레벨에서만 호출해야 한다.
조건문, 반복문, 중첩 함수 내부에서 호출 금지: Hook은 항상 같은 순서로 호출되어야 한다.
다른 Hook 내부에서 호출 금지: useMemo, useCallback, useEffect 등의 콜백 내부에서 Hook을 호출하면 안된다.
*/

import { useCallback, useEffect, useRef, useState } from "react";

function A06Hook() {
  /*
  1. 상태변수
    const [getter, setter] = useState(기본값);
    setter 사용법
    1] setter(value)
    2] setter((현재상태의 getter값) => { return 변경할 값 }) => 객체는 이 방식을 사용하자

    최초 1번 초기화. 이후로는 변경된 값 반환
  */
  const [data, setData] = useState({
    num: 10,
    str: 'Adam',
  });
  const [today, setToday] = useState(new Date());

  /*
  2. useCallback => 함수 자체를 메모이제이션(캐시화)
    중요] 메모이제이션 될때 내부의 상태변수도 메모이제이션되는 순간의 값을 기억해서 메모이제이션(캐시화)가 된다.

    const handleName = useCallback( () => { }, [의존관계] );
    의존관계는 어떤 상태변수가 변경될때 이 함수를 다시 생성해서 캐시화 할 것인가를 지정
    이때 캐시화되면서 변경된 상태변수 값을 기억
    다른 Hook 또는 Hook을 사용한 함수를 사용한 경우도 의존관계에 포함되어야 한다

    const changeNumber = useCallback((evt) => {
      // value check 로직...
      const newData = { ...data, num: evt.target.value };
      setData(newData);
    }, [data]);
    const changeString = useCallback((evt) => setData({ ...data, str: evt.target.value }), [data]);
  */
  const changeNumber = useCallback((evt) => {
    setData((prev) => {
      // prev가 setter가 변경할 getter의 변경된 현재 값 참조를 주입해 준다
      return { ...prev, num: evt.target.value };
    });
  }, []);
  const changeString = useCallback((evt) => setData((prev) => {
    return { ...prev, str: evt.target.value }
  }), []);

  /*
  3. LifeCycle Hook - 여러번 선언이 가능하다
    Component가 완성된 시점에 발생
    
    useEffect( () => { }, [의존관계] );
    [] 생략 => 아래와 같이 리렌더링 될때마다 매번 실행된다 (사용 안함)
    [] 빈괄호 => View가 완성된 후 최초 1번만 실행된다 - (mount)
    [상태변수] => 상태변수가 변경될때만 다시 등록되어 실행된다 - (update)

    // 무한 반복
    const timer = setTimeout(() => {
      setToday(new Date());
    }, 2000);
  */
  useEffect(() => {
    // 부수효과 => 외부 변수를 변경. ajax을 이용해 data 취득 => 취득한 data로 상태 변경 => 화면 리렌더링
    const timer = setTimeout(() => {
      setToday(new Date());
    }, 2000);

    // clean up 함수 => unMount 시점. 즉 리렌더링 되지 전 시점에 실행 => useEffect
    return () => {
      clearTimeout(timer);
    }
  }, [data.num]);

  useEffect(() => {
    document.querySelector('input[name="num"]').style.backgroundColor = 'orange';
  }, []);

  /*
    4. 값만 유지하는 Hook - useRef(value)
      값이 변경되도 화면 리렌더링은 하지 않는다. (View에서 사용하는 경우는 없다. VM에서서 값 참조로 사용)
    4. Element 요소의 참조 - useRef(null)
  */
  const count = useRef(0);
  const increment = () => count.current++;
  const decrement = () => count.current--;

  /*
    5. useMemo => 함수의 결과값이 메모이제이션. 
    useCallback => 함수 자체가 메모이제이션
    의존관계가 있는 변수값이 변경될때만 재 실행된다
    함수는 매개변수를 가질 수 없다.
    View에서 사용은 프로퍼티 형태로 사용한다 => 매개변수를 가질 수 없는 이유..
  */
  return (
    <div className="mb-5">
      <h3>A06 Hook</h3>

      <div className="mb-3">
        Count: {count.current} <br />
        <button onClick={increment}> + </button>
        <button onClick={decrement}> - </button>
      </div>

      <div className="mb-3">
        Num: {data.num}
        <input type="text" name="num" className="form-control"
          onChange={changeNumber} value={data.num} />
      </div>

      <div className="mb-3">
        Str: {data.str}
        <input type="text" name="str" className="form-control"
          onChange={changeString} value={data.str} />
      </div>

      <div className="mb-3">
        Today: {today.toLocaleString()} <br />
      </div>

      <div className="mb-3">
        Avg:
        <div className="input-group">
          <input type="text" name="str" className="form-control" />
          <button className="btn btn-outline-primary btn-sm">ADD</button>
        </div>
      </div>
    </div>
  );
}
export default A06Hook;
