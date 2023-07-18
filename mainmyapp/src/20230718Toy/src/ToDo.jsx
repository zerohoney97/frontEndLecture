import React, { useContext, useEffect } from "react";
import { TodoObj } from "../App";
import { ToDoContentContainer, UtilBtnContainer } from "./toDoList.styled";
import { Body } from "./toDopop.styled";
import ToDoPop from "./ToDoPop";
const ToDo = ({ index }) => {
  const { todo, setTodo, isModal, setIsModal, setIndex } = useContext(TodoObj);
  return (
    <ToDoContentContainer>
      <div>{todo[index].name}</div>
      <div>{todo[index].title}</div>
      <UtilBtnContainer>
        <button
          onClick={() => {
            setIsModal(true);
            setIndex(index);
          }}
        >
          수정하기
        </button>
        <button>삭제하기</button>
      </UtilBtnContainer>
    </ToDoContentContainer>
  );
};

export default ToDo;
