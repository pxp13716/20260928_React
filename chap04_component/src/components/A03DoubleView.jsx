import A03Double from "./children/A03Double"

// 외부 컴포넌트로 작성해서 import 한 변수를 속성으로 전달해도 된다
const DoubleOne = function () {
  return (
    <>
      <h4>Double One</h4>
      <div>Hello World</div>
    </>
  )
}
const DoubleTwo = function () {
  return (
    <>
      <h4>Double Two</h4>
      <div>Good Morning</div>
    </>
  )
}

function A03DoubleView() {
  return (
    <div className='mb-5'>
      <h3>A03DoubleView</h3>

      <div>
        <A03Double DoubleOne={DoubleOne} DoubleTwo={DoubleTwo}>
          <div>Props의 children 위치에 표시되는 컨텐츠</div>
        </A03Double>
      </div>
    </div>
  )
}

export default A03DoubleView