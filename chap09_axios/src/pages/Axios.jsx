import { useState } from "react";
import axios from 'axios'

// const baseURL = 'https://sample.bmaster.kro.kr'
// const baseURL = "http://localhost:8000";
// const baseURL = "/api";

function Axios() {
  const [data, setData] = useState('');

  const getContactList = (no = 1, size = 5) => {
    axios.get(`/contacts`, { params: { pageno: no, pagesize: size } })
      .then((resp) => setData(JSON.stringify(resp.data, null, 4)))
      .catch((err) => console.error((err)))
      .finally(() => console.log('getContactList'))
  };
  // async ~ await [ES2017]
  const getContactListAsync = async (no = 1, size = 5) => {
    try {
      const resp = await axios.get(`/contacts`, { params: { pageno: no, pagesize: size } })
      setData(JSON.stringify(resp.data, null, 4));
    } catch (err) {
      console.error(err);
    } finally {
      console.log('getContactListAsync')
    }
  };
  const getContact = (no) => {
    axios({ url: `/contacts/${no}`, method: 'GET' })
      .then((resp) => setData(JSON.stringify(resp.data, null, 4)))
      .catch((err) => console.error((err)))
      .finally(() => console.log('getContact'))
  };
  const addContact = () => {
    const person = {
      name: "강감찬",
      tel: "010-2222-3339",
      address: "서울시"
    }
    axios.post(`/contacts`, person)
      .then((resp) => setData(JSON.stringify(resp.data, null, 4)))
      .catch((err) => console.error((err)))
      .finally(() => console.log('addContact'))
  };
  const updateContact = (no) => {
    const person = {
      no,
      name: "이순신",
      tel: "010-2222-1111",
      address: "충무시"
    }
    axios.put(`/contacts/${no}`, person)
      .then((resp) => setData(JSON.stringify(resp.data, null, 4)))
      .catch((err) => console.error((err)))
      .finally(() => console.log('updateContact'))
  };
  const deleteContact = (no) => {
    axios.delete(`/contacts/${no}`)
      .then((resp) => setData(JSON.stringify(resp.data, null, 4)))
      .catch((err) => console.error((err)))
      .finally(() => console.log('updateContact'))
  };

  /*
  const getContactList = (no = 1, size = 5) => {
    // axios.get(주소, {options});
    // axios.get(`${baseURL}/contacts?pageno=${no}&pagesize=${size}`)
    axios.get(`${baseURL}/contacts`, {
      params: { pageno: no, pagesize: size },
      timeout: 5000,
      headers: { 'Accept': 'application/json' }
    })
      .then((resp) => {
        // console.log(resp);
        setData(JSON.stringify(resp.data, null, 4));
      })
      .catch((err) => console.error((err)))
      .finally(() => console.log('getContactList'))
  };
  // async ~ await [ES2017]
  const getContactListAsync = async (no = 1, size = 5) => {
    try {
      // await => 값(성공, 실패)이 올때까지 대기
      // await가 사용된 함수는 async 함수로 정의해야 한다
      const resp = await axios.get(`${baseURL}/contacts`, {
        params: { pageno: no, pagesize: size },
        timeout: 5000,
        headers: { 'Accept': 'application/json' }
      })
      // const resp2 = await axios.get(`${baseURL}/contacts`, {
      //   params: { pageno: no, pagesize: size },
      //   timeout: 5000,
      //   headers: { 'Accept': 'application/json' }
      // })
      setData(JSON.stringify(resp.data, null, 4));
    } catch (err) {
      console.error(err);
    } finally {
      console.log('getContactListAsync')
    }
  };
  const getContact = (no) => {
    axios({
      url: `${baseURL}/contacts/${no}`,
      method: 'GET',
      params: {},
      timeout: 5000,
      data: '',           // post, put 에서 서버에 전송할 값
      headers: { 'Accept': 'application/json' }
    })
      .then((resp) => setData(JSON.stringify(resp.data, null, 4)))
      .catch((err) => console.error((err)))
      .finally(() => console.log('getContact'))
  };
  const addContact = () => {
    // axios.post(URL, 전송할 데이터 값, { options })
    const person = {
      name: "강감찬",
      tel: "010-2222-3339",
      address: "서울시"
    }
    axios.post(`${baseURL}/contacts`, person, {
      timeout: 5000,
      headers: { 'Content-Type': 'application/json' }
    })
      .then((resp) => setData(JSON.stringify(resp.data, null, 4)))
      .catch((err) => console.error((err)))
      .finally(() => console.log('addContact'))
  };
  const updateContact = (no) => {
    // axios.put(URL, 전송할 데이터 값, { options })
    const person = {
      no,
      name: "이순신",
      tel: "010-2222-1111",
      address: "충무시"
    }
    axios.put(`${baseURL}/contacts/${no}`, person, {
      timeout: 5000,
      headers: { 'Content-Type': 'application/json' }
    })
      .then((resp) => setData(JSON.stringify(resp.data, null, 4)))
      .catch((err) => console.error((err)))
      .finally(() => console.log('updateContact'))
  };
  const deleteContact = (no) => {
    // axios.delete(URL, { options })
    axios.delete(`${baseURL}/contacts/${no}`, {
      timeout: 5000,
    })
      .then((resp) => setData(JSON.stringify(resp.data, null, 4)))
      .catch((err) => console.error((err)))
      .finally(() => console.log('updateContact'))
  };
  */
  return (
    <div>
      <h3>Axios Test</h3>

      <div className="mb-3">
        <button onClick={() => getContactList(1, 5)}>DATA LIST</button>
        <button onClick={() => getContactListAsync(2, 5)}>DATA LIST ASYNC</button>
        <button onClick={() => getContact(1)}>GET</button>
        <button onClick={addContact}>ADD</button>
        <button onClick={() => updateContact(1790903618224)}>UPDATE</button>
        <button onClick={() => deleteContact(1790903618224)}>DELETE</button>
      </div>

      <textarea rows="15" className="form-control" defaultValue={data}></textarea>
    </div>
  );
}
export default Axios;
