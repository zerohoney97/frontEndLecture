import React, { useEffect, useState } from "react";
import {
  SignUpBtn,
  IdInput,
  Label,
  PwInput,
  SignUpConatiner,
  UserInputContainer,
  AlertReg,
} from "./SignUp.syled";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/;

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [regId, setRegId] = useState(true);
  const [regPw, setRegPw] = useState(true);
  const [nickName, setNickName] = useState("");
  const navigate = useNavigate();
  const signUpDispatch = async (id, pw, nickName) => {
    console.log("asd");
    if (id === "" || pw === "" || nickName === "") {
      alert("빈공간 있음");
    } else {
      await axios
        .post("http://localhost:8080/login/save", { id, pw, nickName })
        .then((signUpRes) => {
          if (signUpRes.data === "alerady exist") {
            alert("이미 존재하는 계정입니다");
          } else if (signUpRes.data === "alerady exist nickName") {
            alert("중복된 닉네임 입니다");
          } else if (signUpRes.data === "success") {
            navigate("/login");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const validateEmailReg = () => {
    if (emailRegex.test(id)) {
      setRegId(true);
    } else {
      setRegId(false);
    }
  };
  const validatePwReg = () => {
    if (passwordRegex.test(pw)) {
      setRegPw(true);
    } else {
      setRegPw(false);
    }
  };

  return (
    <SignUpConatiner>
      <UserInputContainer>
        <Label>ID</Label>

        <IdInput
          onChange={(e) => {
            setId(e.target.value);
            validateEmailReg(e.target.value);
          }}
        />
        <AlertReg>{regId ? <></> : <>이메일 형식을 맞춰주세요!</>}</AlertReg>
      </UserInputContainer>
      <UserInputContainer>
        <Label>PW</Label>
        <PwInput
          type="password"
          onChange={(e) => {
            setPw(e.target.value);
            validatePwReg(e.target.value);
          }}
        />
        <AlertReg>
          {regPw ? <></> : <>특수문자가 들어간 8~12자의 영어입니다.</>}
        </AlertReg>
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
        }}
      >
        SignUp!
      </SignUpBtn>
    </SignUpConatiner>
  );
};

export default SignUp;
