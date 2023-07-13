import React, { useEffect, useState } from "react";
import {
  LoginBtn,
  IdInput,
  Label,
  PwInput,
  LoginConatiner,
  UserInputContainer,
} from "./Login.styled";
import { useNavigate } from "react-router-dom";
import { userMiddleWareFunction } from "../../../middleware";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";
const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginDispatch = (id, pw) => {
    dispatch(userMiddleWareFunction.login({ id, pw }));
  };
  const userInfo = useSelector((state) => state.userReducer);

  useEffect(() => {
    console.log(userInfo.isLogin);
    if (userInfo.isLogin) {
      navigate("/main");
    }
  }, [userInfo]);

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
