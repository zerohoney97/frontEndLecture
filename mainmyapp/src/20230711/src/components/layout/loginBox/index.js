import React from "react";
import { LoginBoxWrap,LoginBoxInput} from "./Login.styled";
const LoginBox = () => {
  return (
    <div>
      {/* props값으로 width가 넘어감, 스타일 작업을 할 때 동적으로 스타일 값을 주고 싶으면 props로 받아야함 */}
      <LoginBoxWrap width={"500px"}>
        <p className="login-title">로그인 박스</p>
        <LoginBoxInput>버튼</LoginBoxInput>
      </LoginBoxWrap>
    </div>
  );
};

export default LoginBox;
