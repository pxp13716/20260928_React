import { Navigate } from 'react-router'

function NavigateTag() {
  const isChecked = true;

  if (isChecked) {
    // Navigate 태그는 to로 지정한 페이지로 바로 이동하는 액션이 이루어진다
    return <Navigate to="/" replace={true}>isChecked</Navigate>
  }

  return (
    <div className="mb-3">
      <h3>NAVIGATE TAG</h3>
    </div>
  )
}

export default NavigateTag