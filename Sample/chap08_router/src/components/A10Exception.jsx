import { product } from './data/product'
import { useLocation, useParams } from "react-router";

function ExceptionComp() {
  const { id = '1001', name = 'unknown' } = useParams();
  const location = useLocation();

  // 1. 유효성 검사를 가장 먼저 진행하여 안전하게 에러를 트리거합니다.
  const numericId = Number(id);
  if (isNaN(numericId) || numericId < 1001 || numericId > 1006) {
    throw new Error('ID 범위를 벗어났습니다 (1001 ~ 1006만 가능).');
  }

  // 2. 유효성이 검증된 후 데이터를 찾으므로 data가 안전하게 보장됩니다.
  const data = product.find(item => item.id === numericId);

  // 3. 만약 product 배열에 데이터가 없을 경우를 대비한 2차 안전장치
  if (!data) {
    throw new Error('해당 ID의 상품 정보를 찾을 수 없습니다.');
  }

  return (
    <div>
      <h3>EXCEPTION</h3>

      <div className="mb-3">
        ID: {id}<br />
        NAME: {name}<br />
        LOCATION: {decodeURIComponent(location.pathname)}
      </div>

      <div className="mb-3">
        ID: {data.id}<br />
        NAME: {data.name}<br />
        CATEGORY: {data.category}
      </div>
    </div>
  );
}

export default ExceptionComp;
