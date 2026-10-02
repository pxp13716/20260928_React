/*
  npm i bootstrap react-router axios p-min-delay sweetalert2 react-loader-spinner react-spinners react-paginate
  npm i @reduxjs/toolkit react-redux
*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'

import { RouterProvider } from 'react-router'
import router from './router'

// store
import { Provider } from 'react-redux'
import store from '@stores'

// axios
import axios from 'axios'
axios.defaults.timeout = 5000;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);

