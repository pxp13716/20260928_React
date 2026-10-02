import axios from 'axios'
import pMinDelay from 'p-min-delay'

// axios 인스턴스를 만들 때 구성 기본 값 설정
const apiClient = axios.create({
  baseURL: 'http://localhost:8000', // 
  timeout: 5000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});
// 인스턴스가 생성 된 후 기본값 변경
// apiClient.defaults.headers.common['Authorization'] = AUTH_TOKEN;
const PAGENO = 1;
const PAGESIZE = 5;

export const getContactListAction = (pageno = PAGENO, pagesize = PAGESIZE) => {
  return pMinDelay(apiClient.get(`/contacts`, { params: { pageno, pagesize } }), 1500)
}
export const getContactAction = (no) => {
  return apiClient.get(`/contacts/${no}`)
}
export const addContactAction = (contact) => {
  return apiClient.post(`/contacts`, contact)
}
export const updateContactAction = (contact) => {
  return apiClient.put(`/contacts/${contact.no}`, contact)
}
export const deleteContactAction = (no) => {
  return apiClient.delete(`/contacts/${no}`)
}
