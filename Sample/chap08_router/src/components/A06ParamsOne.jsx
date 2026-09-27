import { useEffect, useState } from "react";

import { product } from './data/product.jsx'
const baseURL = 'http://localhost:8000';

function ParamsComp() {
  return (
    <div className="mb-3">
      <h3>PARAMS ONE</h3>

      <div className="mb-3">
        ID: <br />
        NAME: <br />
        LOCATION: <br />
      </div>

      <div className="mb-3">
        ID: <br />
        NAME: <br />
        CATEGORY: <br />
      </div>

      <div className="mb-3">
        ID: <br />
        NAME: <br />
        ADDRESS: <br />
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
