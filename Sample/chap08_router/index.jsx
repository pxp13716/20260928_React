import { createBrowserRouter } from 'react-router'
import pMinDelay from 'p-min-delay'

import App from './../App'
import A00Home from './../components/A00Home'
import A01Currency from './../components/A01Currency'
import A02StateOne from './../components/A02StateOne'
import A02StateTwo from './../components/A02StateTwo'
import A03Navigate from './../components/A03Navigate'
import A04Navigate from './../components/A04Navigate'
import A05Props from './../components/A05Props'
import A06ParamsOne from './../components/A06ParamsOne'
import A06ParamsTwo from './../components/A06ParamsTwo'
import A07SearchParams from './../components/A07SearchParams'
import A08ChildComp from './../components/A08ChildComp'
import A08ChildOne from './../components/A08ChildOne'
import A08ChildTwo from './../components/A08ChildTwo'
import A09NotFound from './../components/A09NotFound'
import A10Exception from './../components/A10Exception'
import A10ErrorElem from './../components/A10ErrorElem'

// main.js에 먼저 등록되어야 한다
const routes = createBrowserRouter([
  // 패스의 root가 되는 컴포넌트는 <Outlet>태그가 기술되어 있어야 한다
  // 이 <Outlet>에 자식 패스의 컴포넌트가 표시된다
  {
    path: '/', element: <App />, children: [
      { path: '/', element: <A00Home /> },
      { path: '/current', element: <A01Currency /> },
      { path: '/state', element: <A02StateOne /> },
      { path: '/state/:id', element: <A02StateTwo /> },
      { path: '/navigate', element: <A03Navigate /> },
      { path: '/redirect', element: <A04Navigate /> },
      // 속성으로 데이터 전달 - 고정값
      // 컴포넌트에 직접 Props를 전달하는 구조는 잘 동작하지만, 
      // v8에서는 해당 컴포넌트의 Loader나 라우트 Context를 통해 전달.
      { path: '/props', element: <A05Props name="Adam" age={30} /> },

      // 패스로 값 전달 - 가변값
      // /:변수명/:변수명.. 
      // 변수명도 패스 역할을 한다. 값은 Link에서 지정한다
      // <Link to="/paramOne/1001/data/놀부/11">
      // id='1001', name="놀부", no="11" 형태가 된다.
      { path: '/paramOne', element: <A06ParamsOne /> },
      { path: '/paramTwo', element: <A06ParamsTwo />, },

      // 지정한 패스 이외의 경로가 호출된 경우 기본값으로 보여줄 컴포넌트 등록
      // 등록 위치는 상관없음
      // 1. /패스/패스
      // 2. /패스/:값
      // 3. /패스/*
      // 4. *


      // JSP 등의 /패스?key=value&key=value 값 취득
      // 값은 Link에서 할당한다.
      { path: '/search', element: <A07SearchParams /> },

      // 하위 라우터 구현
      // A08ChildComp는 다른 경로의 상위 컴포넌트가 됨. 
      // 따라서 자식 컴포넌트가 표시될 <Outlet>을 지정해야 한다
      {
        path: '/child', element: <A08ChildComp />
      },

      // 컴포넌트에서 에러가 발생하면 errorElement로 지정한 컴포넌트가 표시
      // 라우터 루트에 지정하면 자식 컴포넌트에서 에러가 발생하면 대체 컴포넌트가 표시됨
      // 각 패스별로 지정 => 패스 영역만 변경
      // App 지정 => 전체가 변경
      // { path: '/exception/:id/:name', element: <A10Exception />, errorElement: <A10ErrorElem /> },
      { path: '/exception/:id/:name', element: <A10Exception /> },
    ]
  }
])
export default routes;
