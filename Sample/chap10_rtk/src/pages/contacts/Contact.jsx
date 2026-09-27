import { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import Swal from 'sweetalert2'

function Contact() {
  return (
    <div>
      <h3>Get Contact</h3>

      <div>
        Name: <input type="text" className="form-control" disabled />
        Tel: <input type="text" className="form-control" disabled />
        Address: <input type="text" className="form-control" disabled />
      </div>
      <br />
      <button className="btn btn-outline-primary">리스트</button>{' '}
      <button className="btn btn-outline-primary">수정</button>{' '}
      <button className="btn btn-outline-danger">삭제</button>{' '}
    </div>
  )
}

export default Contact;
