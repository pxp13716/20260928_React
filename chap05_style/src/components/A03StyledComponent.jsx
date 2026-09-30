// npm i styled-components
// https://styled-components.com/

import { MYBOX, MYBOXTWO, MYBTN } from './../css/A03StyledComp'
/*
// HTML 요소 + Style => React Component
import styled from 'styled-components'

const MYBOX = styled.div`
  color: white;
  background-color: ${props => props.$bgColor || 'lightgray'};
  padding: 10px;
  border: 1px solid black;
`;
const MYBTN = styled.button`
  color: white;
  background-color: ${props => props.$bgColor || 'lightgray'};
  padding: 5px;
  border: 1px solid black;

  &:hover {
    background-color: white;
    color: orange;
  }
`;
const MYBOXTWO = styled(MYBOX)`
  padding: 20px;
  margin: 20px;
`;
*/

function A03StyledComponent() {
  return (
    <div className="mb-5">
      <h3>A04 Styled Component</h3>

      <MYBOX>
        한동안 침체됐던 남자 복싱에서는 60kg급의 장동환과 80kg급의 김민성(이상 한국체대)이 준결승에서 나란히 5-0 심판 전원일치 판정승을 거둬 결승에 진출하며 은메달 2개를 확보했다. 장동환과 김민성은 다음 달 2일 열릴 결승에서 동반 금메달 사냥에 나선다.
      </MYBOX>

      <MYBOX $bgColor="orange">
        한동안 침체됐던 남자 복싱에서는 60kg급의 장동환과 80kg급의 김민성(이상 한국체대)이 준결승에서 나란히 5-0 심판 전원일치 판정승을 거둬 결승에 진출하며 은메달 2개를 확보했다. 장동환과 김민성은 다음 달 2일 열릴 결승에서 동반 금메달 사냥에 나선다.
        <br />

        <MYBTN>CLICK</MYBTN>
      </MYBOX>

      <MYBOXTWO>
        한동안 침체됐던 남자 복싱에서는 60kg급의 장동환과 80kg급의 김민성(이상 한국체대)이 준결승에서 나란히 5-0 심판 전원일치 판정승을 거둬 결승에 진출하며 은메달 2개를 확보했다. 장동환과 김민성은 다음 달 2일 열릴 결승에서 동반 금메달 사냥에 나선다.
      </MYBOXTWO>

      <MYBOXTWO $bgColor="orange">
        한동안 침체됐던 남자 복싱에서는 60kg급의 장동환과 80kg급의 김민성(이상 한국체대)이 준결승에서 나란히 5-0 심판 전원일치 판정승을 거둬 결승에 진출하며 은메달 2개를 확보했다. 장동환과 김민성은 다음 달 2일 열릴 결승에서 동반 금메달 사냥에 나선다.
      </MYBOXTWO>
    </div>
  );
}

export default A03StyledComponent;
