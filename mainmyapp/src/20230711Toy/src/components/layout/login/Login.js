import React, { useState } from "react";
import {
  LoginBtn,
  IdInput,
  Label,
  PwInput,
  LoginConatiner,
  UserInputContainer,
} from "./Login.styled";
import { useNavigate } from "react-router-dom";
import{userMiddleWareFunction} from '../../../middleware'
import { useDispatch } from "react-redux";
const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginDispatch = (id, pw, nickName) => {
    console.log("asd");
    dispatch(userMiddleWareFunction.Login({ id, pw }));
    navigate("/login");
  };

  return (
    <LoginConatiner>
      <UserInputContainer>
        <Label>ID</Label>
        <IdInput
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
      </UserInputContainer>
      <UserInputContainer>
        <Label>PW</Label>
        <PwInput
          type="password"
          onChange={(e) => {
            setPw(e.target.value);
          }}
        />
      </UserInputContainer>
      <LoginBtn
        onClick={() => {
          loginDispatch(id, pw);
        }}
      >
        Login!
      </LoginBtn>
    </LoginConatiner>
  );
};

export default Login;
