import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// 프로젝트 전체에서 사용될 통 CSS 파일
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// SPA을 위한 Router 설정
// 프로젝트 전체 전역 상태 변수를 위한 store 설정
// 서버 통신을 위한 axios 설정 

// 설정과 화면에 보여질 View 파일을 분리
// 리엑트에서는 JSX로 작성된 View를 반환하는 함수 호츨을 태그 형태로 작성한다
// <App />
// 이때 지켜야 할 사항이 import 하는 변수명의 첫 글자를 반드시 대문자로 해야 한다
import App from './App.jsx'

// render => JSX를 JavaScript 객체로 변환
// createRoot => JavaScript로 변환된 객체를 주입
createRoot(document.getElementById('root')).render(
  // StrictMode은 build시 삭제된다
  <StrictMode>
    {/* <h1>Hello World</h1> */}
    {/* {App()} */}
    <App />
  </StrictMode>,
)
