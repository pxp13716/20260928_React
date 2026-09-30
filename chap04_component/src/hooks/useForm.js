// 컴퍼넌트의 script 부분만 구현
// View에서 사용할 값을 return 구믄으로 정의

// Hook의 이름은 반드시 useXXXXX 형태로 use로 시작해야 한다.
import { useCallback, useState } from "react";

export function useForm() {
  const [data, setData] = useState({
    num: 10,
    str: 'Adam',
    avg: '',
    list: [],
  });

  const changeNumber = useCallback((evt) => {
    setData((prev) => {
      return { ...prev, [evt.target.name]: Number(evt.target.value) };
    });
  }, []);
  const changeString = useCallback((evt) => setData((prev) => {
    return { ...prev, str: evt.target.value }
  }), []);

  const addList = useCallback(() => {
    setData((prev) => {
      return { ...prev, list: [...prev.list, prev.avg] };
    })
  }, []);

  return { data, changeNumber, changeString, addList }
}