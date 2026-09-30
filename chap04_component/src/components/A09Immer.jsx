import { useCallback, useState } from "react";

// npm i immer
import { produce } from 'immer'

function A09Immer() {
  const [data, setData] = useState({
    name: '',
    num: 0,
    info: {
      address: '',
      arr: [10, 20, 30],
      etc: { one: '', two: '' },
    },
  });

  const changeName = useCallback((x) => {
    setData((prev) => ({ ...prev, name: x }))
  }, []);
  const changeAddress = useCallback((x) => {
    setData((prev) => {
      const newInfo = { ...prev.info, address: x };
      return { ...prev, info: newInfo }
    })
  }, []);
  const changeOne = useCallback(() => {
    setData((prev) => {
      // const newEtc = { ...prev.info.etc, one: '복잡하다...' };
      // const newInfo = { ...prev.info, etc: newEtc };
      // return { ...prev, info: newInfo }

      return {
        ...prev,
        info: {
          ...prev.info,
          etc: {
            ...prev.info.etc,
            one: '복잡하다...',
          }
        }
      }
    })
  }, []);

  const addArray = useCallback(() => {
    // setData((prev) => {
    //   const random = Math.floor(Math.random() * 100) + 1;
    //   const newArr = [...prev.info.arr, random];
    //   const newInfo = { ...prev.info, arr: newArr };
    //   return { ...prev, info: newInfo }
    // })
    setData((prev) => {
      const random = Math.floor(Math.random() * 100) + 1;

      const deep = structuredClone(prev);     // deep copy => 내부 모든 요소를 새롭게 복사해서 생성
      deep.info.arr.push(random);

      return deep;
    })
  }, [])

  return (
    <div className="mb-5">
      <h3>A09 Immer</h3>

      <div className="mb-3">
        Name: {data.name}<br />
        Address: {data.info.address}<br />
        One: {data.info.etc.one}<br />

        Ary:{' '}
        {data.info.arr.map((item, i) => (
          <span key={i}>{item} </span>
        ))}
      </div>

      <div className="mb-3">
        <div>
          <button onClick={(evt) => changeName('Adam')}>Name</button>
          <button onClick={(evt) => changeAddress('서울')}>Address</button>
          <button onClick={changeOne}>One</button>
          <button onClick={addArray}>ADD</button>
        </div>

        <div>
          <button>Name</button>
          <button>Address</button>
          <button>One</button>

          <button>ADD</button>
          <button>UPDATE</button>
          <button>DELETE</button>
        </div>
      </div>
    </div>
  );
}
export default A09Immer;
