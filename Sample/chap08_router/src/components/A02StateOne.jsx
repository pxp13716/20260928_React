import { useNavigate } from "react-router";

function A02StateOne() {
  const navigate = useNavigate();

  // location.state가 전혀 없는 경우를 대비하여 방어 코드(기본 객체 {})를 함께 작성합니다.
  const { name, age } = { name: "알 수 없는 사용자", age: 0 };

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