import React from "react";
import { Header, Body } from "../components";
const Login = ({ setLogin, login }) => {
  return (
    <div>
      <Header name={"login"} />
      <button
        // 자바 스크립트가 코드를 읽는 과정에서 함수에 괄호가 있으면 실행
        // 중괄호는 자바 스크립트를 사용한다는 의미이므로 중괄호가 있으면 실행
        // 그러면 매개변수를 사용해야할 경우에는 어떻게 하냐 익명함수를 통해 값 전달
        onClick={() => {
          setLogin(!login);
        }}
      >
        로그인 or 로그아웃
      </button>
      <Body path={"/"} name={"main"} login={login}></Body>
    </div>
  );
};

export default Login;
