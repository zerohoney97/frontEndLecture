import React, { useEffect, useState } from "react";
import "./board.css";
import BoardHeader from "./BoardHeader";
import BoardBody from "./BoardBody";
import BoardFooter from "./BoardFooter";
const Board = ({
  toDoList,
  setToDoList,
  setOnlyChecked,
  isChecked,
  setIsChecked,
  onlyChecked
}) => {
  return (
    <div className="board-container">
      <BoardHeader
        toDoList={toDoList}
        setOnlyChecked={setOnlyChecked}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
      />
      <BoardBody toDoList={toDoList} setToDoList={setToDoList} isChecked={isChecked} onlyChecked={onlyChecked} />
      <BoardFooter toDoList={toDoList} />
    </div>
  );
};

export default Board;
