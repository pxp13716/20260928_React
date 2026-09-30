/* eslint-disable no-unused-vars */
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
  }, []);


  // immer
  const changeNameImmer = useCallback((x) => {
    setData((prev) => {
      // produce(원본, (원본의 복사본) => { ... })
      const newData = produce(prev, (draft) => {
        draft.name = x;
      })
      return newData;
    })
  }, [])
  const changeAddressImmer = useCallback((x) => {
    setData((prev) => {
      return produce(prev, (draft) => {
        draft.info.address = x;
      });
    })
  }, [])
  const changeOneImmer = useCallback(() => {
    setData((prev) => {
      return produce(prev, (draft) => {
        draft.info.etc.one = '간단하다...';
      });
    })
  }, [])
  const addArrayImmer = useCallback(() => {
    const random = Math.floor(Math.random() * 100) + 1;

    setData((prev) => {
      return produce(prev, (draft) => {
        draft.info.arr.push(random);
      });
    })
  }, []);
  const updateArrayImmer = useCallback((idx, value) => {
    setData((prev) => {
      return produce(prev, (draft) => {
        draft.info.arr[idx] = value;
      });
    })
  }, [])
  const deleteArrayImmer = useCallback((idx) => {
    setData((prev) => {
      return produce(prev, (draft) => {
        draft.info.arr.splice(idx, 1)
      });
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
          <button onClick={(evt) => changeNameImmer('Eve')}>Name</button>
          <button onClick={(evt) => changeAddressImmer('인천')}>Address</button>
          <button onClick={changeOneImmer}>One</button>

          <button onClick={addArrayImmer}>ADD</button>
          <button onClick={(evt) => updateArrayImmer(1, 2000)}>UPDATE</button>
          <button onClick={(evt) => deleteArrayImmer(1)}>DELETE</button>
        </div>
      </div>
    </div>
  );
}
export default A09Immer;
