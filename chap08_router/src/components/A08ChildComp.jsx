import { useState } from "react";
import { NavLink, Outlet } from "react-router";
const isActive = ({ isActive }) => isActive ? { color: 'orange', fontWeight: 'bold' } : {}

function ChildComponent() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);

  return (
    <div>
      <h3>CHILD ROUTER</h3>

      <div className="mb-3">
        {/* end로 매칭되는 패스만 활성화되도록 처리 */}
        <NavLink to="" style={isActive} end>ONE</NavLink> | {' '}
        <NavLink to="two" style={isActive} end>TWO</NavLink> | {' '}
        <NavLink to="/child/three" style={isActive}>THREE</NavLink> | {' '}
        {/* 상대패스로 적으면 /child/current가 되어 Not Found 발생 */}
        <NavLink to="/current" style={isActive}>CURRENCY</NavLink> | {' '}
      </div>

      <hr />

      {/* 
        /child/XXX 형태의 컴포넌트가 표시될 위치 
        context로 지정된 데이터는 자식 컴포넌트에서 useOutletContext Hook으로 참조 가능
      */}
      <div>
        <Outlet context={{ count, increment }}></Outlet>
      </div>

    </div>
  );
};
export default ChildComponent;
