import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BoardMainContainer,
  Body,
  BoardMainTitle,
  BoardItem,
  BoardList,
  BoardTitle,
  BoardNum,
  BoardWriter,
  BoardDate,
  BoardHeader,
  BoardHeaderItem1,
  BoardHeaderItem2,
  BoardHeaderItem3,
  BoardHeaderItem4,
  BoardInsertButton,
  PaginationButton,
  PaginationContainer,
  Pagination,
} from "./Main.styled";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { boardMiddleWareFunction } from "../../../middleware";
const Main = () => {
  const boardData = useSelector((state) => state.boardReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [boardIndex, setBoardIndex] = useState(0);
  const [showBoard, setShowBoard] = useState();
  const [paginationIndex, setPagenationIndex] = useState(0);
  const getBoardData = () => {
    console.log("보드가져오기 실행");
    dispatch(boardMiddleWareFunction.getBoadData());
  };

  useEffect(() => {
    console.log(boardData);
    getBoardData();
  }, []);

  useEffect(() => {
    if (boardData !== "expired") {
      let temp = [];
      let range = parseInt((boardData.length - 1) / 5 + 1);
      for (let index = 0; index < range; index++) {
        temp.push(index);
      }
      setShowBoard(temp);
    } else {
      alert("토큰 만료");
      navigate("/login");
    }
  }, [boardData]);

  return (
    <Body>
      <BoardMainContainer>
        <BoardMainTitle>게시판에 오신걸 환영합니다!</BoardMainTitle>
        <BoardHeader>
          <BoardHeaderItem1>번호</BoardHeaderItem1>
          <BoardHeaderItem2>제목</BoardHeaderItem2>
          <BoardHeaderItem3>글쓴이</BoardHeaderItem3>
          <BoardHeaderItem4>작성날짜</BoardHeaderItem4>
        </BoardHeader>
        {boardData && boardData !== "expired" ? (
          <BoardList>
            {boardData.map((el, index) => {
              return (
                <>
                  {index >= boardIndex && index < boardIndex + 5 ? (
                    <BoardItem
                      onClick={() => {
                        navigate(`/main/${el.id}`);
                      }}
                    >
                      <BoardNum>{el.id}</BoardNum>
                      <BoardTitle>{el.title}</BoardTitle>
                      <BoardWriter>{el.content}</BoardWriter>
                      <BoardDate>{el.date}</BoardDate>
                    </BoardItem>
                  ) : (
                    <></>
                  )}
                </>
              );
            })}
          </BoardList>
        ) : (
          <></>
        )}

        <PaginationContainer>
          <Pagination>
            {showBoard &&
              showBoard.map((index) => {
                if (paginationIndex !== 0 && index === paginationIndex - 1) {
                  return (
                    <PaginationButton
                      onClick={() => {
                        let temp = paginationIndex;
                        setPagenationIndex(temp - 3);
                        setBoardIndex((paginationIndex - 3) * 5);
                      }}
                    >
                      {"<"}
                    </PaginationButton>
                  );
                } else if (
                  index < paginationIndex + 3 &&
                  index >= paginationIndex
                ) {
                  return (
                    <PaginationButton
                      onClick={() => {
                        console.log("dd");
                        setBoardIndex(5 * index);
                      }}
                    >
                      {index + 1}
                    </PaginationButton>
                  );
                } else if (index === paginationIndex + 3) {
                  return (
                    <PaginationButton
                      onClick={() => {
                        let temp = paginationIndex;
                        setPagenationIndex(temp + 3);
                        setBoardIndex((paginationIndex + 3) * 5);
                      }}
                    >
                      {">"}
                    </PaginationButton>
                  );
                } else {
                  return <></>;
                }
              })}
          </Pagination>
        </PaginationContainer>

        <BoardInsertButton
          onClick={() => {
            navigate("/insert");
          }}
        >
          글 추가
        </BoardInsertButton>
      </BoardMainContainer>
    </Body>
  );
};

export default Main;
