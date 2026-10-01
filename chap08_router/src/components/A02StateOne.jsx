import { useLocation, useNavigate } from "react-router";

function A02StateOne() {
  const navigate = useNavigate();
  const location = useLocation();   // 주소줄 관련 정보
  // console.log(location);

  // location.state가 전혀 없는 경우를 대비하여 방어 코드(기본 객체 {})를 함께 작성합니다.
  const { name, age } = location.state ?? { name: 'UNKNOWN', age: 0 };

  return (
    <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h2>전송된 파라미터 수신 결과</h2>
      <div style={{ margin: "15px 0", lineHeight: "1.8" }}>
        <p><strong>수신된 이름:</strong> {name}</p>
        <p><strong>수신된 나이:</strong> {age}세</p>
      </div>

      <button className="btn btn-outline-secondary" onClick={() => navigate(-1)}>
        이전 페이지로 돌아가기
      </button>
    </div>
  );
}

export default A02StateOne;