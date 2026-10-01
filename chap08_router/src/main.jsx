// npm i react-router@7 react-spinners bootstrap p-min-delay
// npm i react-router-dom (v8 버전에서는 필요 없음)
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './App';

// 라우터 설정
// 폴더에서 import 할 파일명이 index.XXX와 같이 index 이름을 가지고 있으면 생략가능
import router from './routes'
import { RouterProvider } from 'react-router'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
