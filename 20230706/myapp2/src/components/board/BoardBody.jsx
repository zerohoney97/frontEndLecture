import React, { useEffect } from "react";
import "./board.css";
const BoardBody = ({ setToDoList, toDoList, isChecked, onlyChecked }) => {
  const changeComplete = (index) => {
    let newTodo = [...toDoList];
    newTodo[index].isComplete = !newTodo[index].isComplete;
    setToDoList(newTodo);
  };

  return (
    <div className="board-body-container">
      <div className="board-body-top-container">
        <ul>
          <li className="isComplete">완료</li>
          <li className="number">번호</li>
          <li className="title">제목</li>
          <li className="writer">작성자</li>
        </ul>
      </div>
      <div className="board-body-content-container">
        {isChecked
          ? onlyChecked.map((el, index) => {
              return (
                <ul>
                  <li
                    key={index}
                    className={
                      el.isComplete ? "isComplete checked" : "isComplete"
                    }
                    onClick={() => {
                      changeComplete(index);
                    }}
                  >
                    <div class="check-circle">
                      <div class="check-mark"></div>
                    </div>
                  </li>
                  <li className="number">{el.id}</li>
                  <li className="title">{el.title}</li>
                  <li className="writer">{el.writer}</li>
                </ul>
              );
            })
          : toDoList.map((el, index) => {
              return (
                <ul>
                  <li
                    key={index}
                    className={
                      el.isComplete ? "isComplete checked" : "isComplete"
                    }
                    onClick={() => {
                      changeComplete(index);
                    }}
                  >
                    <div class="check-circle">
                      <div class="check-mark"></div>
                    </div>
                  </li>
                  <li className="number">{el.id}</li>
                  <li className="title">{el.title}</li>
                  <li className="writer">{el.writer}</li>
                </ul>
              );
            })}
      </div>
    </div>
  );
};

export default BoardBody;
