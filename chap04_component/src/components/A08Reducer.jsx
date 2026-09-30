import { useCallback, useEffect, useMemo, useReducer } from "react";
import { reducerFunc, init } from './../reducer/A08Reducer'
function A08Reducer() {
  const [data, dispatch] = useReducer(reducerFunc, init);
  /*
  // const [getter, useReducer의 첫번째 함수호출] = useReducer((state, action) => { }, 초기값)
  const [data, dispatch] = useReducer((state, action) => {
    // console.log(state);
    // console.log(action);
    switch (action.type) {
      case 'A08/CHANGENUMBER':
        let value = Number(action.payload.value);
        if (Number.isNaN(value)) value = 0;
        return { ...state, [action.payload.name]: value };
      case 'A08/CHANGESTRING':
        return { ...state, [action.payload.name]: action.payload.value };
      case 'A08/CHANGETODAY':
        return { ...state, today: new Date().toLocaleString() }
      case 'A08/ADDLIST':
        return { ...state, list: state.list.concat(state.avg) }
      default:
        return state;
    }
    // 리턴값으로 data 상태 변수가 변경됨
  },
    {
      num: 0,
      str: 'Adam',
      avg: '',
      list: [],
      today: new Date().toLocaleString(),
    });
  */

  const changeNumber = useCallback((evt) => {
    dispatch({ type: 'A08/CHANGENUMBER', payload: evt.target })
  }, []);
  const changeString = useCallback((evt) => {
    dispatch({ type: 'A08/CHANGESTRING', payload: evt.target })
  }, []);
  const addList = useCallback(() => {
    dispatch({ type: 'A08/ADDLIST' })
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({ type: 'A08/CHANGETODAY' })
    }, 2000);

    return () => {
      clearTimeout(timer);
    }
  }, [data.num]);

  const average = useMemo(() => {
    if (data.list.length === 0) return 0;

    const total = data.list.reduce((acc, item) => {
      return acc + item;
    }, 0);
    return (total / data.list.length).toFixed(2);
  }, [data.list])


  return (
    <div className="mb-5">
      <h3>A08Reducer</h3>

      <div className="mb-3">
        Num: {data.num}
        <input type="text" name="num" className="form-control"
          value={data.num} onChange={changeNumber} />
      </div>

      <div className="mb-3">
        Str: {data.str}
        <input type="text" name="str" className="form-control"
          value={data.str} onChange={changeString} />
      </div>

      <div className="mb-3">
        Today: {data.today}<br />
      </div>

      <div className="mb-3">
        Avg: {data.avg} / {data.list.join()} / {average}
        <div className="input-group">
          <input type="text" name="avg" className="form-control"
            value={data.avg} onChange={changeNumber} />
          <button className="btn btn-outline-primary btn-sm" onClick={addList}>ADD</button>
        </div>
      </div>
    </div>
  );
}
export default A08Reducer;
