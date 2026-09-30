import A01Style from './components/A01Style'
import A02StyleModule from './components/A02StyleModule'
import A03StyledComponent from './components/A03StyledComponent'

function App() {
  return (
    <div className="m-3">
      <title>React Style And CSS</title>
      <meta name="description" content="설명..." />

      <h1>Chap05 Style</h1>

      <A03StyledComponent></A03StyledComponent>
      <A02StyleModule></A02StyleModule>
      <A01Style></A01Style>
    </div>
  )
}

export default App
