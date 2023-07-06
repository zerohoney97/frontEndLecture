import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
const Login = ({ setWriter }) => {
  const navigate = useNavigate();
  return (
    <div className="insert-container">
      <div className="insert-input-container">
        <textarea placeholder="너의 이름은?" className="content"></textarea>
        <div
          class="post-registration-button"
          onClick={() => {
            setWriter(document.querySelector(".content").value);
            navigate("/board");
          }}
        >
          <i class="fas fa-plus"></i>
          <span>이름 등록!</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
