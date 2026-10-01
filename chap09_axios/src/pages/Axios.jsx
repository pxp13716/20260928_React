import { useState } from "react";

// const baseURL = 'https://sample.bmaster.kro.kr'
const baseURL = "http://localhost:8000";

function Axios() {
  const [data, setData] = useState('');

  const getContactList = (no = 1, size = 5) => {
    // axios.get(주소, {options});
  };
  const getContactListAsync = async (no = 1, size = 5) => {

  };
  const getContact = (no) => {

  };
  const addContact = () => {
    // axios.post(URL, 전송할 데이터 값, { options })
    const person = {
      name: "강감찬",
      tel: "010-2222-3339",
      address: "서울시"
    }

  };
  const updateContact = (no) => {
    // axios.put(URL, 전송할 데이터 값, { options })
    const person = {
      no,
      name: "이순신",
      tel: "010-2222-1111",
      address: "충무시"
    }
  };
  const deleteContact = (no) => {
    // axios.delete(URL, { options })

  };

  return (
    <div>
      <h3>Axios Test</h3>

      <div className="mb-3">
        <button onClick={() => getContactList(1, 5)}>DATA LIST</button>
        <button onClick={() => getContactListAsync(2, 5)}>DATA LIST ASYNC</button>
        <button onClick={() => getContact(1)}>GET</button>
        <button onClick={addContact}>ADD</button>
        <button onClick={() => updateContact()}>UPDATE</button>
        <button onClick={() => deleteContact()}>DELETE</button>
      </div>

      <textarea rows="15" className="form-control"></textarea>
    </div>
  );
}
export default Axios;
