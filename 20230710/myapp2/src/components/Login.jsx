import React from "react";
import "./toy.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const userInfo = useSelector((state) => {
    return state.userInfo;
  });
  const validateUserInfo = (inputData, data) => {
    if (inputData.userId !== data.userId) {
      alert("아이디 잘 못 됨!");
    } else if (inputData.userPw !== data.userPw) {
      alert("비번 잘못됨");
    } else {
      alert("로그인 되었습니다!");
      navigate("/main");
    }
  };
  return (
    <div className="login-container">
      <div className="userId-input">
        <label htmlFor="userId">ID</label>
        <input type="text" name="userId" id="userId" />
      </div>
      <div className="userPw-input">
        <label htmlFor="userPw">PW</label>
        <input type="password" name="userPw" id="userPw" />
      </div>
      <button
        onClick={() => {
          const userId = document.querySelector("#userId").value;
          const userPw = document.querySelector("#userPw").value;
          validateUserInfo({ userId, userPw }, userInfo);
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
