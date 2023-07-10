import React from "react";
import "./toy.css";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userInfoHandler = (userId, userPw, userNickName) => {
    console.log(userId);
    dispatch({ type: "LOGIN", payload: { userId, userPw, userNickName } });
    navigate('/login')
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
      <div className="userNickName-input">
        <label htmlFor="userNickName">NickName</label>
        <input type="text" name="userNickName" id="userNickName" />
      </div>
      <button
        onClick={() => {
          userInfoHandler(
            document.querySelector("#userId").value,
            document.querySelector("#userPw").value,
            document.querySelector("#userNickName").value
          );
        }}
      >
        SignUp
      </button>
    </div>
  );
};

export default SignUp;
