import React, { useContext, useEffect, useState } from "react";
import { TodoObj } from "../App";
import {
  ModalContainer,
  ModalHeader,
  ModalMiddle,
  ContentInputBox,
  Body,
  InputBoxTop,
  NameInputBox,
  TitleInputBox,
  ModalFooter,
} from "./toDopop.styled";
const ToDoPop = (props) => {
  const { todo, setTodo, isModal, setIsModal, index, setIndex } =
    useContext(TodoObj);
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const insertTodo = () => {
    setIsModal(false);
    setTodo([
      ...todo,
      {
        name,
        title,
        content,
      },
    ]);
  };
  const updateTodo = () => {
    setIsModal(false);
    const temp = [...todo];
    temp[index] = {
      name,
      title,
      content,
    };
    console.log(temp);
    setTodo(temp);
    setIndex(undefined);
  };
  return (
    <>
      {isModal ? (
        <ModalContainer>
          <ModalHeader>
            <h1>글 쓰기</h1>
          </ModalHeader>
          <ModalMiddle>
            <InputBoxTop>
              <TitleInputBox>
                <label for="title">제목</label>
                <input
                  type="text"
                  name=""
                  id="title"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </TitleInputBox>
              <NameInputBox>
                <label for="writer">작성자</label>
                <input
                  type="text"
                  name=""
                  id="writer"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </NameInputBox>
            </InputBoxTop>
            <ContentInputBox>
              <label htmlFor="content">내용</label>
              <textarea
                type="text"
                name=""
                id="content"
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              />
            </ContentInputBox>
          </ModalMiddle>
          <ModalFooter>
            <button
              onClick={() => {
                console.log(index,'인덱스');
                if (index!==undefined) {
                  updateTodo();
                } else {
                  insertTodo();
                }
              }}
            >
              ToDo 등록
            </button>
          </ModalFooter>
        </ModalContainer>
      ) : (
        <></>
      )}
    </>
  );
};

export default ToDoPop;
