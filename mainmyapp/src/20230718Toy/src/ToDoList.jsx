import React, { useContext, useEffect, useMemo } from "react";
import { TodoObj } from "../App";
import {
  TodoListContainer,
  TodoListHeader,
  ToDoListMiddle,
  TodoListFooter,
  InsertButton,
} from "./toDoList.styled";
import ToDo from "./ToDo";
import { Body } from "./toDopop.styled";
import ToDoPop from "./ToDoPop";
import axios from 'axios'
const ToDoList = () => {
  const { todo, setTodo, isModal, setIsModal } = useContext(TodoObj);
  const modalHandler = () => {
    setIsModal(!isModal);
  };
  const todoListHandler = useMemo(() => {
    return todo.map((el, index) => {
      return <ToDo index={index}></ToDo>;
    });
  }, [todo]);

  return (
    <TodoListContainer>
      <TodoListHeader>
        <h1>ToDo List</h1>
      </TodoListHeader>
      <ToDoListMiddle>{todo && todoListHandler}</ToDoListMiddle>
      <TodoListFooter>
        <InsertButton onClick={modalHandler}>글 쓰기</InsertButton>
      </TodoListFooter>
    </TodoListContainer>
  );
};

export default ToDoList;
