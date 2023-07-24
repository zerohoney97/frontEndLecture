import { styled } from "styled-components";

const MainBoardContainer = styled.div`
  width: 70%;
  height: 600px;
  border: 1px solid;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
`;

const MainBoardHeader = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainBoardMiddle=styled.div`
width:100%;
height: 70%;
border: 1px solid gray;

`

export { MainBoardContainer,MainBoardHeader,MainBoardMiddle };
