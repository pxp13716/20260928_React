import { createContext } from "react"

// ColorContext는 컨테이너 컴포넌트다.
// Context는 Provider로 공유해서 사용할 상태 변수 값을 지정 (지정하는 곳에서 설정)
// Consumer로 값을 참조해 사용한다. (Hook으로 사용) 
export const ColorContext = createContext(null);
