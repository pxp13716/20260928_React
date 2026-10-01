import { useNavigate } from "react-router";

function NavigateComp() {
  // 이동에 관련된 Hook. JavaScript의 location.assign(URL)
  const navigate = useNavigate();

  const goURL = (url, opts) => {
    navigate(url, {
      replace: opts.replace ?? false,
      relative: opts.relative ?? 'path',
      preventScrollReset: opts.prevent ?? false,    // 위치 상관없이 Top으로 이동
      state: opts.state ?? {}
    })
  }

  return (
    <div className="mb-3">
      <h3>NAVIGATE</h3>

      <div className="mb-3">
        <button onClick={() => navigate(-1)}>BACK</button>
        <button onClick={() => navigate(1)}>FORWARD</button>
        <button onClick={() => navigate('/')}>HOME</button>
        <button onClick={() => goURL('/state', {
          replace: true,
          state: { name: 'Adam', age: 20 }
        })}>PARAMETER</button>
      </div>
    </div>
  );
};
export default NavigateComp;

/*
1. replace: true
  현재 네비게이션 항목을 히스토리에서 대체하여 뒤로 가기 버튼을 눌러도 이전 페이지로 돌아가지 않도록 한다.

2. relative
  상대패스의 경우 루트(route) 또는 패스의 상위 컴포넌트(path)로 이동할 것인가를 지정.

3. preventScrollReset: true
  - preventScrollReset 옵션은 페이지 이동 시 스크롤 위치를 리셋하지 않도록 제어.
  - 기본적으로 React Router에서는 페이지 이동 시 스크롤 위치를 초기화한다. 

  즉, 페이지를 새로 이동할 때 스크롤이 맨 위로 이동하는 것이 기본 동작이다.
  preventScrollReset: true로 설정하면, 페이지 이동 후에도 기존 스크롤 위치를 유지하게 된다.

4. state
  이동하는 페이지에 값을 전달할 목적. 해당 페이지에서 useLocation()의 state로 값을 참조할 수 있다
*/
