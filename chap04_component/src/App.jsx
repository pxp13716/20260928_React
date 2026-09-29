// App는 상태를 갖도록 하지 말자.
// View는 컴포넌트로 구현 후 조합하는 방식으로 작성하자
import A01State from './components/A01State'
import A02Container from './components/A02Container'
import A03Container from './components/A03Container'
import A03DoubleView from './components/A03DoubleView'
function App() {
  return (
    <div className="m-3">
      <h1>Chap04 Component</h1>

      <A03DoubleView></A03DoubleView>

      <A03Container></A03Container>

      <A02Container></A02Container>

      <A01State></A01State>
      <A01State></A01State>
    </div>
  )
}
export default App;
