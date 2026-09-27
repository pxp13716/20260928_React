import { useState } from "react";
import { NavLink } from "react-router";
const isActive = ({ isActive }) => isActive ? { color: 'orange', fontWeight: 'bold' } : {}

function ChildComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>CHILD ROUTER</h3>

      <div className="mb-3">
        <NavLink to="" style={isActive}>ONE</NavLink> | {' '}
        <NavLink to="" style={isActive}>TWO</NavLink> | {' '}
        <NavLink to="" style={isActive}>THREE</NavLink> | {' '}
        <NavLink to="" style={isActive}>CURRENCY</NavLink> | {' '}
      </div>

      <hr />

      {/* /child/XXX 형태의 컴포넌트가 표시될 위치 */}

    </div>
  );
};
export default ChildComponent;
