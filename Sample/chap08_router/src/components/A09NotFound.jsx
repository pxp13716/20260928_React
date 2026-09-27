import { useNavigate } from 'react-router';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="container text-center py-5">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <p className="fs-3">찾으시는 페이지가 존재하지 않거나 경로가 잘못되었습니다.</p>
      <p className="lead text-muted">주소를 다시 한 번 확인해 주세요.</p>
      <button className="btn btn-primary mt-3" onClick={() => navigate('/')}>
        홈으로 이동
      </button>
    </div>
  );
}