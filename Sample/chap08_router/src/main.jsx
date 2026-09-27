// npm i react-router react-spinners bootstrap p-min-delay prop-types
// npm i react-router-dom (v8 버전에서는 필요 없음)
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
