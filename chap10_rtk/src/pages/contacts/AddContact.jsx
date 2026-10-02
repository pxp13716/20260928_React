import { memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import Swal from 'sweetalert2'
import { DNA } from 'react-loader-spinner'
import { addContactAction, changeContactAction } from '@stores/contextSlice'

function AddContact() {
  const { contact, loading, error } = useSelector((store) => store.contactStore);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeContact = (evt) => {
    const { name, value } = evt.target;
    dispatch(changeContactAction({ name, value }))
  }

  const addContact = async (evt, contact) => {
    evt.preventDefault();

    try {
      // unwrap은 redux 객체를 사용할 반환값으로 변경해 반환해 준다
      const resp = await dispatch(addContactAction(contact)).unwrap();
      // console.log(resp);
      if (resp.status === 'success') {
        await Swal.fire({ title: 'SUCCESS', text: '데이터 입력 성공', icon: 'success' })
      } else if (resp.status === 'fail') {
        await Swal.fire({ title: 'FAIL', text: '데이터 입력 실패', icon: 'error' })
      }
      navigate('/list')
    } catch (err) {
      console.error(err);
      Swal.fire({ title: 'ERROR', text: '네트워크 에러', icon: 'warn' })
    }
  }

  if (loading) return <DNA></DNA>
  if (error) return <h3>점검중... {error}</h3>
  return (
    <div>
      <h3>Add Contact</h3>

      <form onSubmit={(evt) => addContact(evt, contact)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" id="name" className="form-control" name="name"
            value={contact.name} onChange={changeContact} />
        </div>

        <div className="mb-3">
          <label htmlFor="tel" className="form-label">Tel</label>
          <input type="text" id="tel" className="form-control" name="tel"
            value={contact.tel} onChange={changeContact} />
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" id="address" className="form-control" name="address"
            value={contact.address} onChange={changeContact} />
        </div>

        <button type="button" className="btn btn-outline-primary" onClick={() => navigate('/list')}>LIST</button>{' '}
        <button type="submit" className="btn btn-outline-danger">ADD</button>
      </form>
    </div>
  );
}

export default memo(AddContact);
