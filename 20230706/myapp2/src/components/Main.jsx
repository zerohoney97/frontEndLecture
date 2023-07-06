import React, { useEffect, useState } from "react";
import Board from "./board/Board";
import { Route, Routes } from "react-router-dom";
import Insert from "./insert/Insert";
import Login from "./login/Login";
const Main = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [onlyChecked, setOnlyChecked] = useState([]);
  const [writer, setWriter] = useState("");
  const [toDoList, setToDoList] = useState([
    { id: 1, title: "잠자기", writer: "zero", isComplete: false },
    { id: 2, title: "먹기", writer: "zero", isComplete: false },
    {
      id: 3,
      title: "최선을 다해 아무것도 안하기",
      writer: "zero아님",
      isComplete: false,
    },
    { id: 4, title: "소금이랑 놀기", writer: "zero인듯", isComplete: false },
    { id: 5, title: "현욱이와 겔겔겔", writer: "zero겔겔겔", isComplete: false },
    {
      id: 6,
      title: "연수 헤드셋 강탈하기",
      writer: "zero일까",
      isComplete: false,
    },
  ]);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Routes>
        <Route
          path="/board"
          element={
            <Board
              toDoList={toDoList}
              setToDoList={setToDoList}
              setOnlyChecked={setOnlyChecked}
              isChecked={isChecked}
              setIsChecked={setIsChecked}
              onlyChecked={onlyChecked}
            />
          }
        />
        <Route
          path="/insert"
          element={
            <Insert
              toDoList={toDoList}
              setToDoList={setToDoList}
              writer={writer}
            />
          }
        />
        <Route path="/" element={<Login setWriter={setWriter} />} />
      </Routes>
    </div>
  );
};

export default Main;
