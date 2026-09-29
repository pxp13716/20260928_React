/*
React Hook 규칙
최상위 레벨에서만 호출: Hook은 React 함수 컴포넌트나 커스텀 Hook의 최상위 레벨에서만 호출해야 한다.
조건문, 반복문, 중첩 함수 내부에서 호출 금지: Hook은 항상 같은 순서로 호출되어야 한다.
다른 Hook 내부에서 호출 금지: useMemo, useCallback, useEffect 등의 콜백 내부에서 Hook을 호출하면 안된다.
*/

function A06Hook() {
  /*
  1. 상태변수
    const [getter, setter] = useState(기본값);
    setter 사용법
    1] setter(value)
    2] setter((현재상태의 getter값) => { return 변경할 값 })
  */

  /*
  2. useCallback => 함수 자체를 메모이제이션(캐시화)
    중요] 메모이제이션 될때 내부의 상태변수도 메모이제이션되는 순간의 값을 기억해서 메모이제이션(캐시화)가 된다.

    const handleName = useCallback( () => { }, [의존관계] );
    의존관계는 어떤 상태변수가 변경될때 이 함수를 다시 캐시화 할 것인가를 지정
    이때 캐시화되면서 변경된 상태변수 값을 기억
    다른 Hook 또는 Hook을 사용한 함수를 사용한 경우도 의존관계에 포함되어야 한다
  */

  /*
  3. LifeCycle Hook - 여러번 선언이 가능하다
    Component가 완성된 시점에 발생
    
    useEffect( () => { }, [의존관계] );
    [] 생략 => 아래와 같이 리렌더링 될때마다 매번 실행된다 (사용 안함)
    [] 빈괄호 => 최초 1번만 실행된다
    [상태변수] => 상태변수가 변경될때만 다시 등록되어 실행된다
  */

  /*
    4. 값만 유지하는 Hook - useRef(value)
    4. Element 요소의 참조 - useRef(null)
  */

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
        Num:
        <input type="text" name="num" className="form-control" />
      </div>

      <div className="mb-3">
        Str:
        <input type="text" name="str" className="form-control" />
      </div>

      <div className="mb-3">
        Today: <br />
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
