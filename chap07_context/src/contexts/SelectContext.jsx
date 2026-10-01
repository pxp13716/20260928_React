/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { createContext, use, useCallback, useContext, useState } from "react";

const SelectContext = createContext(null);

// Provider Component
function SelectContextProvider(props) {
  const [color, setColor] = useState('그린');
  const changeColor = useCallback((x) => {
    setColor(x)
  }, []);

  const data = { storeName: 'ABC', color, changeColor }

  return (
    // v19 버전부터는 .Provider를 생략할 수 있다
    <SelectContext value={data}>
      {props.children}
    </SelectContext>
  )
}

const useSelectColor = () => {
  // const context = useContext(SelectContext);
  const context = use(SelectContext);             // v19

  if (!context) {
    throw new Error('값이 존재하지 않습니다...');
  }

  return context;
}

export { SelectContextProvider, useSelectColor }
