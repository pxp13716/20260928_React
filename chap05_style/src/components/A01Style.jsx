import { useCallback, useState, useMemo } from "react";

// npm i -D sass-embedded 
// 설치 후 반드시 프로젝트 재 시작이 필요 - 별도의 import는 필요없음
import './../css/A01Style.css';
import './../css/A01Style.scss';

function A01Style() {
  const [yourCSS, setCSS] = useState('title color');
  const [check, setCheck] = useState(true);

  const enterCSSEvent = useCallback(() => setCSS('title'), []);
  const leaveCSSEvent = useCallback(() => {
    setCSS('title color')
  }, []);

  const myCSS = 'title color';
  const title = 'title';
  const color = 'color';


  // 리 렌더링마다 새롭게 작성됨
  // const myStyle = { color: 'orange', fontWeight: 'bold', backgroundColor: 'lightgray' };

  // 리렉트 관리변수에서 관리됨. 최초 1번만 실행되고 다시 초기화되지 않음 - 의존관계가 없음
  const myStyle = useMemo(() => {
    return { color: 'orange', fontWeight: 'bold', backgroundColor: 'lightgray' };
  }, []);

  const [style, setStyle] = useState({ color: 'orange', fontWeight: 'bold', backgroundColor: 'lightgray' });
  const enterEvent = useCallback(() => {
    setStyle((prev) => {
      return { ...prev, color: 'white', fontSize: '20pt' }
    })
  }, []);
  const leaveEvent = useCallback(() => {
    setStyle((prev) => {
      return { ...prev, color: 'orange', fontSize: '' }
    })
  }, []);

  const changeCheck = useCallback(() => setCheck(check => !check), []);

  // 요소.style = { color: 'orange', }

  return (
    <div className="mb-5">
      {/* <Tag style.속성명=value ... /> 형태로 기술할 수 없음. 따라서 style 단독 속성은 지원 안함 */}
      <h3 style={{ color: 'orange', backgroundColor: 'gray', fontWeight: 'bold' }}>A01 Style</h3>
      <h3 style={myStyle}>A01 Style</h3>
      <h3 style={style} onMouseEnter={enterEvent} onMouseLeave={leaveEvent}>A01 Style</h3>

      {/* 
        1. 사용할 CSS 파일을 import '경로/파일명.확장자' 형태로 import
        2. class는 className으로 참조한다 
      */}
      <h3 className="title color">01 Style</h3>
      <h3 className={'title color'}>02 Style</h3>
      <h3 className={myCSS}>03 Style</h3>
      <h3 className={yourCSS} onMouseEnter={enterCSSEvent} onMouseLeave={leaveCSSEvent}>04 Style</h3>
      {/* { } 내부의 결과가 문자열로 변환되면 된다 */}
      <h3 className={[color, title].join(' ')}>05 Style</h3>
      <h3 className={`${color} ${title}`}>06 Style</h3>

      {/* scss */}
      <h3 className="scssTitle">07 Style</h3>

      {/* true, false에 따라 CSS 적용, 비 적용 */}
      <h3 className={check ? 'title color' : undefined}>08 Style</h3>
      <button onClick={changeCheck}>Check</button>
    </div>
  );
}

export default A01Style;
