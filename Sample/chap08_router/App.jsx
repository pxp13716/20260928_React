import { Link, NavLink, Outlet, useNavigation } from 'react-router';
import './css/router.css';

function App() {
  // 컴포넌트의 로딩 상태를 체크

  return (
    <div className="m-3">
      <h1>React Router</h1>

      <div>
        <Link to="/">INDEX</Link> |
        <Link to="current">CURRENT</Link> |

        {/* CSS의 클래스명이 .active로 지정된 항목이 자동 적용된다 */}
        {/* 하위패스에 상위 패스가 포함된 경우는 상위, 하위 모두 활성화됨. end를 붙이면 매칭되는 패스만 활성화 */}
        <NavLink to="state">STATE ONE</NavLink> |
        <NavLink to="state/10">STATE TWO</NavLink> |

        <NavLink to="navigate">NAVIGATE</NavLink> |
        <NavLink to="redirect">REDIRECT</NavLink> |

        <NavLink to="props">PROPS</NavLink> |

        <NavLink to="paramOne">P1001</NavLink> |
        <NavLink to="paramOne">P1002</NavLink> |

        <NavLink to="paramTwo">P1003</NavLink> |
        <NavLink to="paramTwo">P1004</NavLink> |

        <NavLink to="abc">NOT</NavLink> |

        <NavLink to="search">S1001</NavLink> |
        <NavLink to="search">S1002</NavLink> |
        <NavLink to="search">S1003</NavLink> |

        <NavLink to="child">CHILD</NavLink> |
        <NavLink to="child/two">CHILD TWO</NavLink> |

        <NavLink to="/exception/1100/놀부" end>Exception</NavLink> |
      </div>

      <hr />

      <div>

      </div>

    </div>
  );
}

export default App;
