import { Link } from "react-router";

function StateComp() {
  return (
    <div className="mb-3">
      <h3>STATE TWO</h3>

      <div className="mb-3">
        {/* 1. 절대 패스로 지정한 메인 이동 */}
        <Link to="/">TOP(절대패스)</Link> | {' '}

        {/* 2. relative 속성이 없으면 'route' 기준 상위 라우트로 이동 (라우트 계층 구조 기준 부모) */}
        <Link to=".." relative="route">TOP</Link> | {' '}

        {/* 3. path 기준 상위 패스로 이동 (URL 세그먼트 기준 부모: /state/100 -> /state) */}
        <Link to=".." relative="path">TOP</Link> | {' '}

        {/* 4. to="."을 추가하여 현재 페이지(현재 경로)를 기준으로 전체 새로고침(Reload) 수행 */}
        <Link to="." reloadDocument>RELOAD</Link> | {' '}

        {/* 5. 메인으로 이동하면서 페이지 전체를 새로고침(SSR 페이지 이동처럼 작동) */}
        <Link to="/" reloadDocument>ALL RELOAD</Link> | {' '}
      </div>
    </div>
  );
}

export default StateComp;