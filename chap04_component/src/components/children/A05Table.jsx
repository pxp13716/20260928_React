import { memo } from "react"

// memo 함수는 이 함수의 props 값을 이전 가상돔과 비교해 변경이 없는 경우(동일한 경우)
// 이 컴포넌트를 새롭게 생성하지 않고 이전 가삼돔의 컴포넌트를 그대로 가져와 사용한다
function A05Table({ item }) {
  return (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.text}</td>
      <td>{item.done ? '완료' : '미완료'}</td>
    </tr>
  )
}

export default memo(A05Table);
