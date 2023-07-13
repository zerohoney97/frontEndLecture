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
} from "./BoardInsert.styled";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const BoardInsert = () => {
  const userInfo = useSelector((state) => state.useReducer);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const insertBoard = async ({ title, content }) => {
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    const hours = String(currentDate.getHours()).padStart(2, "0");
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");
    const seconds = String(currentDate.getSeconds()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    const result = await axios.post(
      "http://localhost:8080/board/insert",
      { title, content, formattedDate },
      { withCredentials: true }
    );
    if (result.data === "expired") {
      alert("토큰 만료!");
      navigate("/login");
    } else if (result.data === "insert success") {
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
            insertBoard({ title, content });
          }}
        >
          글 등록
        </InsertButton>
      </BoardInsertContainer>
    </Body>
  );
};

export default BoardInsert;
