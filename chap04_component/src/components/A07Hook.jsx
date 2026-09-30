/* eslint-disable react-hooks/refs */
import { useEffect, useRef } from "react";
import { useForm } from './../hooks/useForm'
import { useToday } from "../hooks/useToday";
import { useAverage } from "../hooks/useAverage";
function A06Hook() {
  // 사용자 정의 Hook
  const { data, changeNumber, changeString, addList } = useForm();
  const today = useToday(data.num);
  const average = useAverage(data.list);

  useEffect(() => {
    numRef.current.style.backgroundColor = 'orange';
  }, []);

  const count = useRef(0);
  const increment = () => count.current++;
  const decrement = () => count.current--;

  const numRef = useRef(null);

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
        <input type="number" name="num" className="form-control" min="0" max="10" ref={numRef}
          onChange={changeNumber} value={data.num} />
      </div>

      <div className="mb-3">
        Str: {data.str}
        <input type="text" name="str" className="form-control"
          onChange={changeString} value={data.str} />
      </div>

      <div className="mb-3">
        Today: {today} <br />
      </div>

      <div className="mb-3">
        Avg: {data.avg} / {data.list.join()} / {average}
        <div className="input-group">
          <input type="number" name="avg" className="form-control" min={0} max={100}
            value={data.avg} onChange={changeNumber} />
          <button className="btn btn-outline-primary btn-sm" onClick={addList}>ADD</button>
        </div>
      </div>
    </div>
  );
}
export default A06Hook;
