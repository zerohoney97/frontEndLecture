import React, { useEffect, useState } from "react";
import {
  SignUpContainer,
  SignUpHeader,
  SignUpMiddle,
  InputContainer,
  SignUpBtn,
  SignUpBtnContainer,
} from "./user.styled";
import { insertUserData } from "../features/UserSlice";
import { useDispatch, useSelector } from "react-redux";
const SignUp = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [nickName, setNickName] = useState("");
  const userInfo = useSelector((state) => {
    console.log(state);
    return state.userReducer;
  });
  //   console.log(userInfo);

  useEffect(() => {
    // console.log(userInfo);
  }, [userInfo]);
  return (
    <SignUpContainer>
      <SignUpHeader>
        <h1>회원 가입</h1>
      </SignUpHeader>
      <SignUpMiddle>
        <InputContainer>
          <label>id</label>
          <input
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </InputContainer>
        <InputContainer>
          <label>pw</label>
          <input
            onChange={(e) => {
              setPw(e.target.value);
            }}
          />
        </InputContainer>
        <InputContainer>
          <label>nickName</label>
          <input
            onChange={(e) => {
              setNickName(e.target.value);
            }}
          />
        </InputContainer>
      </SignUpMiddle>
      <SignUpBtnContainer>
        <SignUpBtn
          onClick={() => {
            dispatch(insertUserData({ id, pw, nickName }));
          }}
        >
          회원 가입
        </SignUpBtn>
        <div>{userInfo.status}</div>
      </SignUpBtnContainer>
    </SignUpContainer>
  );
};

export default SignUp;
