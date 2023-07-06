import React from "react";
import "./insert.css";
import { useNavigate } from "react-router-dom";
const Insert = ({ writer, toDoList, setToDoList }) => {
  const insertTodoList = (data) => {
    setToDoList([
      ...toDoList,
      {
        id: toDoList[toDoList.length - 1].id + 1,
        writer: writer,
        title: data,
        isComplete: false,
      },
    ]);
    console.log(data);
  };

  const navigate = useNavigate();
  return (
    <div className="login-container">
      <div className="login-input-container">
        <textarea placeholder="뭐 할거임?" className="content"></textarea>
        <div
          class="post-registration-button"
          onClick={() => {
            insertTodoList(document.querySelector(".content").value);
            navigate("/board");
          }}
        >
          <i class="fas fa-plus"></i>
          <span>할 일 등록!</span>
        </div>
      </div>
    </div>
  );
};

export default Insert;
