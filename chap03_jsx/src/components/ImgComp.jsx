// 이미지를 리소스 형태로 관리 (빌드되면 Hash가 붙는다. 변경되면 Hash가 변경됨)
import { Fragment } from 'react'
import three from './../assets/images/three.png'
import react from './../assets/react.svg'

function ImgComp() {
  return (
    // Fragment는 build하면 삭제되는 가상 태그
    <Fragment>
      <p>
        <img src="/images/one.png" alt="one" height="100px" />
        <img src="/favicon.svg" alt="favicon" height="100px" />
        <img src={three} alt="three" height="100px" />
        <img src={react} alt="react" height="100px" />
      </p>
    </Fragment>
  )
}

export default ImgComp
