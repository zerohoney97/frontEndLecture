import React, { useState } from "react";
import {
  Body,
  BoardInsertContainer,
  ContentInput,
  ContentInputLabel,
  InputGroup,
  InsertButton,
  TitleInput,
  TitleInputLabel,
} from "./BoardModify.styled.js";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const BoardModify = () => {
  const userInfo = useSelector((state) => state.useReducer);
  const navigate = useNavigate();
  const params = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const updateBoard = async ({ title, content }) => {
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    const hours = String(currentDate.getHours()).padStart(2, "0");
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");
    const seconds = String(currentDate.getSeconds()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    const result = await axios.post(
      "http://localhost:8080/board/modify",
      { title, content, formattedDate, id: params.id },
      { withCredentials: true }
    );
    if (result.data === "expired") {
      alert("토큰 만료!");
      navigate("/login");
    } else if (result.data === "success") {
      navigate("/main");
    } else if (result.data === "fail") {
      alert("서버에서 오류 발생");
    }
  };
  return (
    <Body>
      <BoardInsertContainer>
        <InputGroup>
          <TitleInputLabel>title</TitleInputLabel>
          <TitleInput
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </InputGroup>
        <InputGroup>
          <ContentInputLabel>content</ContentInputLabel>
          <ContentInput
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </InputGroup>
        <InsertButton
          onClick={() => {
            updateBoard({ title, content });
          }}
        >
          글 등록
        </InsertButton>
      </BoardInsertContainer>
    </Body>
  );
};

export default BoardModify;
