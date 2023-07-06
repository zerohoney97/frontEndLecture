import React from "react";
import "./board.css";
const BoardHeader = ({ toDoList, setIsChecked, isChecked, setOnlyChecked }) => {
  const changeBoardList = (e) => {
    if (isChecked) {
      setIsChecked(false);
    } else {
      let newTempList = toDoList.filter((el) => {
        console.log(el);
        return el.isComplete === true;
      });
      console.log(newTempList);
      setOnlyChecked(newTempList);
      setIsChecked(true);
    }
  };
  return (
    <div className="board-header-conainer">
      <h1>TODO 게시판</h1>
      <label class="apple-toggle">
        <input type="checkbox" onChange={changeBoardList} />
        <span class="apple-toggle-slider"></span>
      </label>
    </div>
  );
};

export default BoardHeader;
