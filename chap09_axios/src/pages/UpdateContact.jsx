import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Swal from 'sweetalert2'
import { getContactAction, updateContactAction } from '@api/contacts'
function UpdateContact() {
  const [contact, setContact] = useState(
    { no: '', name: '', tel: '', address: '', photo: '' }
  );
  const navigate = useNavigate();
  const { no } = useParams();

  // Compiler project에서는 이벤트 핸들러가 자식 요소에 전달되지 않는다면 필요없음
  const getContact = useCallback(async () => {
    getContactAction(no)
      .then((resp) => setContact(resp.data))
      .catch((err) => console.error(err))
  }, [no]);

  const updatecontact = useCallback(async (evt, contact) => {
    evt.preventDefault();

    try {
      const resp = await updateContactAction(contact)
      if (resp.data.status === 'success') {
        await Swal.fire({ title: 'SUCCESS', text: '데이터 수정 성공', icon: 'success' })
      } else if (resp.data.status === 'fail') {
        await Swal.fire({ title: 'FAIL', text: '데이터 수정 실패', icon: 'error' })
      }
      navigate('/list')
    } catch (err) {
      console.error(err)
      Swal.fire({ title: 'ERROR', text: '네트워크 에러', icon: 'warn' })
    }
  }, [navigate]);

  const changeContact = (evt) => {
    // 제약조건
    setContact((prev) => {
      return { ...prev, [evt.target.name]: evt.target.value }
    })
  }

  useEffect(() => {
    const fetchContact = async () => {
      await getContact();
    }
    fetchContact();
  }, [getContact])

  return (
    <div>
      <h3>Update Contact</h3>

      <form>
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

        <button type="submit" className="btn btn-outline-primary" onClick={(evt) => updatecontact(evt, contact)}>UPDATE</button>
      </form>
    </div>
  );
}
export default UpdateContact;
