import React, { useCallback, useState } from "react";

function A01Style() {
  const [yourCSS, setCSS] = useState('title color');
  const [check, setCheck] = useState(true);

  const myStyle = { color: 'orange', fontWeight: 'bold', backgroundColor: 'lightgray' };

  const changeCheck = useCallback(() => setCheck(check => !check), []);

  return (
    <div className="mb-5">
      {/* <Tag style.속성명=value ... /> 형태로 기술할 수 없음. 따라서 style 단독 속성은 지원 안함 */}
      <h3>A01 Style</h3>
      <h3>A01 Style</h3>
      <h3>A01 Style</h3>

      {/* 
        1. 사용할 CSS 파일을 import '경로/파일명.확장자' 형태로 import
        2. class는 className으로 참조한다 
      */}
      <h3>A01 Style</h3>
      <h3>A01 Style</h3>

      {/* scss */}

      <button onClick={changeCheck}>Check</button>
    </div>
  );
}

export default A01Style;
