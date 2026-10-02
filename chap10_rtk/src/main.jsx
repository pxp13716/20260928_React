/*
  npm i bootstrap react-router axios p-min-delay sweetalert2 react-loader-spinner react-spinners react-paginate
  npm i @reduxjs/toolkit react-redux
*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'

import { RouterProvider } from 'react-router'
import router from './router'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

