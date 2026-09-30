import styled from 'styled-components'

export const MYBOX = styled.div`
  color: white;
  background-color: ${props => props.$bgColor || 'lightgray'};
  padding: 10px;
  border: 1px solid black;
`;
export const MYBTN = styled.button`
  color: white;
  background-color: ${props => props.$bgColor || 'lightgray'};
  padding: 5px;
  border: 1px solid black;

  &:hover {
    background-color: white;
    color: orange;
  }
`;
export const MYBOXTWO = styled(MYBOX)`
  padding: 20px;
  margin: 20px;
`;