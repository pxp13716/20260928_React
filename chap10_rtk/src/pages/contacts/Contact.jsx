import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import Swal from 'sweetalert2'
import { DNA } from 'react-loader-spinner'
import { fetchContactAction, deleteContactAction } from '@stores/contextSlice'

function Contact() {
  const { loading, error, contact } = useSelector((store) => store.contactStore);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { no } = useParams();

  const deleteContact = async () => {
    try {
      // unwrap은 redux 객체를 사용할 반환값으로 변경해 반환해 준다
      const resp = await dispatch(deleteContactAction(no)).unwrap();
      // console.log(resp);
      if (resp.status === 'success') {
        await Swal.fire({ title: 'SUCCESS', text: '데이터 삭제 성공', icon: 'success' })
      } else if (resp.status === 'fail') {
        await Swal.fire({ title: 'FAIL', text: '데이터 삭제 실패', icon: 'error' })
      }
      navigate('/list')
    } catch (err) {
      console.error(err);
      Swal.fire({ title: 'ERROR', text: '네트워크 에러', icon: 'warn' })
    }
  }

  useEffect(() => {
    dispatch(fetchContactAction(no))
  }, [no, dispatch])

  if (loading) return <DNA></DNA>
  if (error) return <h3>점검중... {error}</h3>
  return (
    <div>
      <h3>Get Contact</h3>

      <div>
        Name: <input type="text" className="form-control" disabled value={contact.name} />
        Tel: <input type="text" className="form-control" disabled value={contact.tel} />
        Address: <input type="text" className="form-control" disabled value={contact.address} />
      </div>
      <br />
      <button className="btn btn-outline-primary" onClick={() => navigate('/list')}>리스트</button>{' '}
      <button className="btn btn-outline-primary" onClick={() => navigate(`/update/${no}`)}>수정</button>{' '}
      <button className="btn btn-outline-danger" onClick={deleteContact}>삭제</button>{' '}
    </div>
  )
}

export default Contact;
