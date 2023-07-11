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
import axios from "axios";
const SignUp = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [nickName, setNickName] = useState("");
  const navigate = useNavigate();

  const signUpDispatch = async (id, pw, nickName) => {
    console.log("asd");
    await axios
      .post("http://localhost:8080/login/save", { id, pw, nickName })
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
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
          navigate("/login");
        }}
      >
        SignUp!
      </SignUpBtn>
    </SignUpConatiner>
  );
};

export default SignUp;
