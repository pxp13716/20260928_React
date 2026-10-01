import { useEffect, useMemo, useState } from "react";

import { product } from './data/product.jsx'
import { useLocation, useParams } from "react-router";
const baseURL = 'http://localhost:8000';

function ParamsTwo() {
  const location = useLocation();

  const { '*': rawPrams } = useParams();
  // console.log(rawPrams);         // "1003/data/향단/14"

  const [pId, , pName, pNo] = useMemo(() => {
    if (!rawPrams) return ['', '', '', ''];    // []
    const arr = rawPrams.split('/');
    // console.log(arr)
    return [
      // ?? => ?? 앞의 값이 null, undefined 인 경우만 뒤의 값을 사용
      // || => || 앞의 값이 '', 0, -0, NaN, false, null, undefined 인 경우만 뒤의 값을 사용
      arr[0] || '',
      arr[1] || 'data',
      arr[2] ? decodeURIComponent(arr[2]) : '',
      arr[3] ?? ''
    ]
  }, [rawPrams]);

  const isValidData = pId // && pName;

  const data = useMemo(() => {
    if (!isValidData || Number.isNaN(pId)) return null;
    return product.find((item) => item.id === Number(pId))
  }, [pId, isValidData]);

  // 서버로부터 받은 값을 기반으로 화면을 재 구성함. => 변수가 상태 변수이어야 한다 => 상태변수 정의
  // 정의한 상태변수를 이용해 View 완성
  // 마지막으로 상태 변수를 어떻게 변경할 것인가를 구현
  const [contact, setContact] = useState({ id: '', name: '', tel: '', address: '', photo: '' });

  // 컴포넌트의 View가 완성된 시점에 실행
  useEffect(() => {
    if (!pNo) return;

    fetch(`${baseURL}/contacts/${pNo}`)
      .then((resp) => {
        if (!resp.ok) throw new Error('네트워크 응답 오류 발생...');
        return resp.json();
      })
      .then((data) => setContact(data))
      .catch((err) => console.error(err))

    // pNo가 없는 경우 이전 값이 contact에 대입되어 있으므로 비우고 실행
    return () => {
      setContact({ id: '', name: '', tel: '', address: '', photo: '' })
    }
  }, [pNo])


  return (
    <div className="mb-3">
      <h3>PARAMETER TWO</h3>

      <div className="mb-3">
        ID: {pId}<br />
        NAME: {pName}<br />
        LOCATION: {decodeURIComponent(location.pathname)}<br />
      </div>

      <div className="mb-3">
        ID: {data?.id}<br />
        NAME: {data?.name} <br />
        CATEGORY: {data?.category} <br />
      </div>

      <div className="mb-3">
        NO: {contact?.no} <br />
        NAME: {contact?.name} <br />
        ADDRESS: {contact?.address} <br />
      </div>
    </div>
  );
};
export default ParamsTwo;
