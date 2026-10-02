import { useCallback, useState } from "react";
import { useNavigate } from "react-router";
import Swal from 'sweetalert2'
import { addContactAction } from '@api/contacts'
function AddContact() {
  const [contact, setContact] = useState(
    { no: '', name: '', tel: '', address: '', photo: '' }
  );
  const navigate = useNavigate();

  const addContact = useCallback(async (evt, contact) => {
    evt.preventDefault();

    try {
      const resp = await addContactAction(contact)
      if (resp.data.status === 'success') {
        await Swal.fire({ title: 'SUCCESS', text: '데이터 입력 성공', icon: 'success' })
      } else if (resp.data.status === 'fail') {
        await Swal.fire({ title: 'FAIL', text: '데이터 입력 실패', icon: 'error' })
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

        <button type="submit" className="btn btn-outline-primary">ADD</button>
      </form>
    </div>
  );
}

export default AddContact;
