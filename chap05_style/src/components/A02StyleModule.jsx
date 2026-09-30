// 이 컴포넌트에서만 사용 가능한 CSS 파일을 등록
// CSS 파일명이 "파일명.module.css" 형태로 정의되어야 한다
// import는 default 방식으로 import 한다..
import one from './../css/A02Style1.module.css'
import two from './../css/A02Style2.module.css'
// console.log(one);

function A02StyleModule() {
  return (
    <div className="mb-5">
      {/* A02Style1.module.css 파일 내부에서 module이 아닌 global로 사용하고자 하는 이름은 앞에 :global을 붙이면 
      지역이 아닌 global로 변경된다 */}
      <h3 className={one.title}>A02 Style <span className="innerColor">Module</span> Component</h3>
      <h3 className={two.title}>A02 Style Module Component</h3>
      <h3 className={`${two.title} ${two.reverse}`}>A02 Style Module Component</h3>
    </div >
  );
}

export default A02StyleModule;
