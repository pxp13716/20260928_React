import { Link, NavLink, Outlet, useNavigation } from 'react-router';
import { BeatLoader } from 'react-spinners'
import './css/router.css';

const isAciveStyle = (props) => {
  // console.log(props)
  return props.isActive ? { color: 'lightgreen', fontWeight: 'bold' } : undefined;
}
const isAciveClass = (props) => {
  // console.log(props)
  return props.isActive ? 'activeLink' : undefined;
}

function App() {
  // navigation.state => 컴포넌트의 로딩 상태를 체크
  const navigation = useNavigation()
  // console.log(navigation);

  return (
    <div className="m-3">
      <h1>React Router</h1>

      <div>
        <Link to="/">INDEX</Link> |
        <Link to="current">CURRENT</Link> |

        {/* NavLink는 CSS의 클래스명이 .active로 지정된 항목이 자동 적용된다 */}
        {/* 하위패스에 상위 패스가 포함된 경우는 상위, 하위 모두 활성화됨. end를 붙이면 매칭되는 패스만 활성화 */}
        <NavLink to="state" style={isAciveStyle} end>STATE ONE</NavLink> |
        <NavLink to="state/10" className={isAciveClass}>STATE TWO</NavLink> |

        <NavLink to="navigate" style={isAciveStyle}>NAVIGATE</NavLink> |
        <NavLink to="redirect" className={isAciveClass}>REDIRECT</NavLink> |

        <NavLink to="props">PROPS</NavLink> |

        {/* route에 기술한 패스와 매칭되도록 기술하지 않으면 에러 (누락, 많이 기술 안됨 -> 에러) */}
        <NavLink to="paramOne/1001/data/아담/11">P1001</NavLink> |
        <NavLink to="paramOne/1002/data/이브/12">P1002</NavLink> |

        {/* 가변은 아무것도 체크하지 않는다 -> 위험 */}
        <NavLink to="paramTwo/1003/data/향단/14">P1003</NavLink> |
        <NavLink to="paramTwo/1004">P1004</NavLink> |

        <NavLink to="abc">NOT</NavLink> |

        {/* 
          패스는 동일함. end는 기술해도 적용되지 않음
          query => 값을 넘기지 않아도 여기서는 에러 아님. 각 컴포넌트에서 넘어오는 값을 체크해야 한다
          path => 값을 넘기지 않음(패스가 매칭되지 않음)은 바로 에러 발생 (체크가 쉽다)
        */}
        <NavLink to="search?id=1001&name=방자&no=21#TOP">S1001</NavLink> |
        <NavLink to="search?id=1002&name=향단&no=22#MID">S1002</NavLink> |
        <NavLink to="search?id=1003&name=춘향">S1003</NavLink> |

        <NavLink to="child" end>CHILD</NavLink> |
        <NavLink to="child/two">CHILD TWO</NavLink> |

        <NavLink to="/exception/1100/놀부" end>Exception</NavLink> |
      </div>

      <hr />

      <div>
        {/* 패스에 해당되는 컴포넌트가 표시될 위치 */}
        {navigation.state === 'loading' ? <BeatLoader color='red' size={20} /> : <Outlet></Outlet>}
      </div>

    </div>
  );
}

export default App;
