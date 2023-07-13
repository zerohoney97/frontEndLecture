import React, { useEffect, useState } from "react";
import {
  BoardContent,
  BoardMainContainer,
  BoardTime,
  BoardTitle,
  BoardWriter,
  Body,
  BoardMiddleContainer,
  ButtonContainer,
  ModifyBtn,
  DeleteBtn,
} from "./BoardDetail.styled";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const BoardDetail = () => {
  const loginUserData = useSelector((state) => state.userReducer);
  const params = useParams();
  const navigate = useNavigate();
  console.log(params);
  const [board, setBoard] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/board/getBoard/${params.id}`, {
        withCredentials: true,
      })
      .then((boardData) => {
        console.log(boardData);
        if (boardData === "expired") {
          alert("토큰이 만료되었습니다. 다시 로그인 해주세요");
          navigate("/login");
        } else {
          setBoard(boardData.data);
        }
      });
  }, []);

  const deleteBoard = () => {
    axios
      .get(`http://localhost:8080/board/deleteBoard/${params.id}`, {
        params: {
          userId: loginUserData.id,
        },
      })
      .then((deleteResult) => {
        if (deleteResult.data === "정상파괴") {
          navigate("/main");
        } else {
          alert("당신의 (이)글이 아닙니다!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Body>
      <BoardMainContainer>
        <BoardTitle>{board && board.title}</BoardTitle>
        <BoardMiddleContainer>
          <BoardWriter>{board && board.user_nickname}</BoardWriter>
          <BoardTime>{board && board.date}</BoardTime>
        </BoardMiddleContainer>
        <ButtonContainer>
          <ModifyBtn
            onClick={() => {
              navigate(`/modify/${params.id}`);
            }}
          >
            수정하기
          </ModifyBtn>
          <DeleteBtn onClick={deleteBoard}>삭제하기</DeleteBtn>
        </ButtonContainer>
        <BoardContent>{board && board.content}</BoardContent>
      </BoardMainContainer>
    </Body>
  );
};

export default BoardDetail;
