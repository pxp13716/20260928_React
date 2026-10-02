import { useSelector, useDispatch } from 'react-redux'
// store action
import { incAction, decAction } from '@stores/countSlice'

function Counter() {
  // store 값 참조
  const { count, storeName } = useSelector(store => store.countStore);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>
        {storeName}: {count}
      </h3>
      <button onClick={() => dispatch(incAction(2))}>+</button>
      <button onClick={() => dispatch(decAction())}>-</button>
    </div>
  );
}
export default Counter;
