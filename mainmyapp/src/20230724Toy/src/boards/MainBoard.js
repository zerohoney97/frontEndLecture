import React from "react";
import {
  MainBoardContainer,
  MainBoardHeader,
  MainBoardMiddle,
} from "./board.styled";
import MainBoardList from "./MainBoardList";
const MainBoard = () => {
  return (
    <MainBoardContainer>
      <MainBoardHeader>
        <h1>게시판</h1>
      </MainBoardHeader>
      <MainBoardMiddle>
        <MainBoardList />
      </MainBoardMiddle>
    </MainBoardContainer>
  );
};

export default MainBoard;
