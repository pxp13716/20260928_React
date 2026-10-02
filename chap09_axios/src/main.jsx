// npm i bootstrap react-router react-spinners sweetalert2 axios p-min-delay
import React from 'react';
import ReactDOM from 'react-dom/client';

// style
import 'bootstrap/dist/css/bootstrap.css'

// router
import { RouterProvider } from 'react-router'
import router from './router'

// axios
import axios from 'axios'
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 3000;
axios.defaults.headers.common['Accept'] = 'application/json';       // 전체
axios.defaults.headers.post['Content-Type'] = 'application/json';   // post만
axios.interceptors.request.use(
  function (config) {
    // 요청을 보내기 전에 수행할 일
    // ...
    return config;
  },
  function (error) {
    // 오류 요청을 보내기전 수행할 일
    // ...
    return Promise.reject(error);
  });

// 응답 인터셉터 추가
axios.interceptors.response.use(
  function (response) {
    // 응답 데이터를 가공
    // ...
    return response;
  },
  function (error) {
    // 오류 응답을 처리
    // ...
    return Promise.reject(error);
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
