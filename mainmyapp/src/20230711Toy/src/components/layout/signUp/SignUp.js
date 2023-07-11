import React, { useState } from "react";
import {
  SignUpBtn,
  IdInput,
  Label,
  PwInput,
  SignUpConatiner,
  UserInputContainer,
} from "./SignUp.syled";
import { useNavigate } from "react-router-dom";
import { userMiddleWareFunction } from "../../../middleware";
import { useDispatch } from "react-redux";
const SignUp = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [nickName, setNickName] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const signUpDispatch = (id, pw, nickName) => {
    console.log("asd");
    dispatch(userMiddleWareFunction.signUp({ id, pw, nickName }));
  };

  return (
    <SignUpConatiner>
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
      <UserInputContainer>
        <Label>NickName</Label>
        <IdInput
          onChange={(e) => {
            setNickName(e.target.value);
          }}
        />
      </UserInputContainer>
      <SignUpBtn
        onClick={() => {
          signUpDispatch(id, pw, nickName);
          navigate('/login')
        }}
      >
        SignUp!
      </SignUpBtn>
    </SignUpConatiner>
  );
};

export default SignUp;
