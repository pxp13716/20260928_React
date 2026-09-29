import { useState } from "react"

function A03ChildComp(props) {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="mb-3">
      <h3>A03ChildComp</h3>

      <div>
        Count: {count} <br />

        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>

      <div className="mb-3">
        {/* props.children 위치에 부모가 전달한 값이 표시된다 */}
        {props.children}
      </div>
    </div>
  )
}

export default A03ChildComp
