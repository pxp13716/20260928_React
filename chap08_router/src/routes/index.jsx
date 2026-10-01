import { createBrowserRouter } from 'react-router'
import pMinDelay from 'p-min-delay'

// import한 파일은 모두 1개의 main JavaScript 파일에 포함된다.
// 동적 import를 사용한 컴포넌트는 별개의 JavaScript 파일로 분리되고 선택하면 서버로 붙어 받아와 표시
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
// import A07SearchParams from './../components/A07SearchParams'
import A08ChildComp from './../components/A08ChildComp'
import A08ChildOne from './../components/A08ChildOne'
// import A08ChildTwo from './../components/A08ChildTwo'
import A09NotFound from './../components/A09NotFound'
import A10Exception from './../components/A10Exception'
import A10ErrorElem from './../components/A10ErrorElem'

// main.js에 먼저 등록되어야 한다
const routes = createBrowserRouter([
  // 패스의 root가 되는 컴포넌트는 <Outlet>태그가 기술되어 있어야 한다
  // 이 <Outlet>에 자식 패스의 컴포넌트가 표시된다
  {
    path: '/', element: <App />, /* errorElement: <A10ErrorElem />, */ children: [
      { path: '/', element: <A00Home />, errorElement: <A10ErrorElem /> },
      { path: 'current', element: <A01Currency />, errorElement: <A10ErrorElem /> },
      { path: 'state', element: <A02StateOne /> },
      { path: 'state/:id', element: <A02StateTwo /> },
      { path: '/navigate', element: <A03Navigate /> },
      { path: '/redirect', element: <A04Navigate /> },

      // 속성으로 데이터 전달 - 고정값
      // 컴포넌트에 직접 Props를 전달하는 구조는 잘 동작하지만, 
      // 라우터 v8에서는 해당 컴포넌트의 Loader나 라우트 Context를 통해 전달.
      { path: '/props', element: <A05Props name="Adam" age={30} /> },

      // 패스로 값 전달 - 가변값
      // /:변수명/:변수명.. 
      // 변수명도 패스 역할을 한다. 값은 Link에서 지정한다
      // <Link to="/paramOne/1001/data/놀부/11">
      // id='1001', name="놀부", no="11" 형태가 된다.
      { path: '/paramOne/:id/data/:name/:no', element: <A06ParamsOne /> },

      // /paramTwo/어떤패스가 와도 OK
      { path: '/paramTwo/*', element: <A06ParamsTwo />, },

      // 지정한 패스 이외의 경로가 호출된 경우 기본값으로 보여줄 컴포넌트 등록
      // 등록 위치는 상관없음
      // 1. /패스/패스
      // 2. /패스/:값
      // 3. /패스/*
      // 4. *
      { path: '*', element: <A09NotFound /> },

      // JSP 등의 /패스?key=value&key=value 값 취득
      // 값은 Link에서 할당한다. => 값을 안 넘겨도 에러는 아니다 (강제 값이 아니다)
      {
        path: '/search',
        /* element: <A07SearchParams /> */
        lazy: () => pMinDelay(import('./../components/A07SearchParams'), 2000)
          .then((module) => {
            // console.log(module);
            return { Component: module.default }
          }),
        errorElement: <A10ErrorElem />
      },

      // 하위 라우터 구현
      // A08ChildComp는 다른 경로의 상위 컴포넌트가 됨. 
      // 따라서 자식 컴포넌트가 표시될 <Outlet>을 지정해야 한다
      {
        path: '/child', element: <A08ChildComp />, errorElement: <A10ErrorElem />, children: [
          // { path: '/child', element: <A08ChildOne /> },
          { index: true, element: <A08ChildOne /> },
          {
            path: 'two',
            /* element: <A08ChildTwo /> */
            lazy: () => pMinDelay(import('./../components/A08ChildTwo'), 1500)
              .then((module) => ({ Component: module.default }))
          },
          { path: '/child/three', element: <h3>THREE COMP</h3> }
        ]
      },

      // 컴포넌트에서 에러가 발생하면 errorElement로 지정한 컴포넌트가 표시
      // 라우터 루트에 지정하면 자식 컴포넌트에서 에러가 발생하면 대체 컴포넌트가 표시됨
      // 각 패스별로 지정 => 패스 영역만 변경
      // App 지정 => 전체가 변경
      { path: '/exception/:id/:name', element: <A10Exception />, errorElement: <A10ErrorElem /> },
      // { path: '/exception/:id/:name', element: <A10Exception /> },
    ]
  }
])
export default routes;
