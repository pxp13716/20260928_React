import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Swal from 'sweetalert2'
import { getContactAction, deleteContactAction } from '@api/contacts'
function GetContact() {
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

  const deletecontact = useCallback(() => {
    deleteContactAction(no)
      .then((resp) => {
        if (resp.data.status === 'success') {
          Swal.fire({ title: 'SUCCESS', text: '데이터 삭제 성공', icon: 'success' })
        } else if (resp.data.status === 'fail') {
          Swal.fire({ title: 'FAIL', text: '데이터 삭제 실패', icon: 'error' })
        }
        navigate('/list')
      })
      .catch((err) => {
        console.error(err)
        Swal.fire({ title: 'ERROR', text: '네트워크 에러', icon: 'warn' })
      })
  }, [no, navigate]);

  useEffect(() => {
    const fetchContact = async () => {
      await getContact();
    }
    fetchContact();
  }, [getContact])

  return (
    <div>
      <h3>Get Contact</h3>

      <div>
        Name: <input type="text" className="form-control" disabled value={contact.name} />
        Tel: <input type="text" className="form-control" disabled value={contact.tel} />
        Address: <input type="text" className="form-control" disabled value={contact.address} />
      </div>
      <br />
      <button className="btn btn-outline-primary" onClick={() => navigate(`/update/${no}`)}>수정</button>
      <button className="btn btn-outline-primary" onClick={deletecontact}>삭제</button>
    </div>
  );
}
export default GetContact;
