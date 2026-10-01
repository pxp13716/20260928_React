import { useCallback, useState } from 'react'
import ColorBox from './components/ColorBox.jsx'
import SelectColor from './components/SelectColor.jsx'
import TodoContainer from './components/TodoContainer.jsx'

// context
import { ColorContext } from './contexts/ColorContext.jsx'
import { SelectContextProvider } from './contexts/SelectContext.jsx'
import { TodoProvider } from './contexts/TodoContext.jsx'

function App() {
  const [color, setColor] = useState('오렌지');
  const changeColor = useCallback(() => {
    setColor('블랙');
  }, []);

  return (
    <div className="m-3">
      <h1>Chap10 Context</h1>

      {/* v19부터는 .Provider는 생락할 수 있다 즉 <ColorContext value={} 형태로 사용 가능 */}
      <ColorContext.Provider value={{ storeName: 'Color Store', color, changeColor }}>
        <SelectContextProvider>
          <ColorBox></ColorBox>
          <SelectColor></SelectColor>
        </SelectContextProvider>
      </ColorContext.Provider>

      <hr />

      <TodoProvider>
        <TodoContainer></TodoContainer>
      </TodoProvider>
    </div>
  );
}

export default App;
