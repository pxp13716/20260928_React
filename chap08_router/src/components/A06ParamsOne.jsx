import { useEffect, useState } from "react";

import { product } from './data/product.jsx'

import { useLocation, useParams } from "react-router";
import { useMemo } from "react";
const baseURL = 'http://localhost:8000';

function ParamsComp() {
  // const { id, name, no } = useParams();
  const params = useParams();
  // console.log(params);         // 값은 모두 string으로 대입된다.

  const location = useLocation(); // 주소줄 관련정보

  // useMemo도 React Compiler가 최적화 해 줌
  const data = useMemo(() => {
    if (!params.id) return null;      // View에서 ?. 연산자를 이용해 에러가 발행하지 않도록 처리해야 한다
    return product.find((item) => item.id === Number(params.id));
  }, [params.id]);

  // 서버로부터 받은 값을 기반으로 화면을 재 구성함. => 변수가 상태 변수이어야 한다 => 상태변수 정의
  // 정의한 상태변수를 이용해 View 완성
  // 마지막으로 상태 변수를 어떻게 변경할 것인가를 구현
  const [contact, setContact] = useState({ id: '', name: '', tel: '', address: '', photo: '' });

  // 컴포넌트의 View가 완성된 시점에 실행
  useEffect(() => {
    if (!params.no) return;

    fetch(`${baseURL}/contacts/${params.no}`)
      .then((resp) => {
        if (!resp.ok) throw new Error('네트워크 응답 오류 발생...');      // fetch를 사용하는 경우만
        // console.log(resp);
        return resp.json();               // promise로 JavaScript 객체로 반환
      })
      .then((data) => {
        // console.log(data)
        setContact(data);
      })
      .catch((err) => console.error(err))
    // .finally(() => console.log('처리 종료'))
  }, [params.no])

  return (
    <div className="mb-3">
      <h3>PARAMS ONE</h3>

      <div className="mb-3">
        ID: {params.id}<br />
        NAME: {params.name}<br />
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
export default ParamsComp;

/*
  Router path를 우선적으로 사용하는 이유
  1. Router 정의로 이름을 명시하므로 전달하는 정보가 명확하다
  2. 값 처리를 위한 코드의 처리가 useParams가 심플
  3. 이반적인 패스 기술의 일부로서 표현하므로 패스 자체의 의미가 알기 쉽다
*/
