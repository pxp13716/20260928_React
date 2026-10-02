import { Link } from 'react-router';

function NotFound() {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-50 py-5">
      <div className="text-center p-5 rounded-4 bg-light border shadow-sm w-50">
        <p className="display-1 fw-bold text-secondary mb-0 lh-1">404</p>
        <h2 className="fw-semibold mt-3 mb-2">Not Found</h2>
        <p className="text-muted mb-4">
          Dear friend, this URL was not found.
        </p>
        <Link to="/" className="btn btn-primary px-4">
          Go to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
