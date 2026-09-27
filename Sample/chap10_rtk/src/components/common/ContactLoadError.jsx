import { Link } from 'react-router';

function ContactLoadError() {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-50 py-5">
      <div className="text-center p-5 rounded-4 bg-light border shadow-sm w-50">
        <p className="display-1 fw-bold text-secondary mb-0 lh-1">Error</p>
        <h2 className="fw-semibold mt-3 mb-2">Load Failed</h2>
        <p className="text-muted mb-4">
          연락처를 불러오지 못했습니다.
        </p>
        <Link to="/" className="btn btn-primary px-4">
          Go to Home
        </Link>
      </div>
    </div>
  );
}

export default ContactLoadError;
