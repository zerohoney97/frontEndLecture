import { styled } from "styled-components";

export const LoginBoxInput = styled.button`
  border: 2px solid red;
  width: 200px;
  height: 50px;
`;

// 우리가 만들고 싶은 태그 div에 적용시켜서 내보내 주자
export const LoginBoxWrap = styled.div`
  border: 3px solid;
  background-color: blue;
  width: ${(props) => {
    return props.width || "500px";
  }};
  height: 500px;

  /* &:스타일이 적용되고 있는 대상, 즉 그 안에 있는 자식중 login-title클래스를 가지고 있는 자식 */
  & .login-title {
    color: white;
    font-size: 20px;
    text-align: center;
  }
  /* 컴포넌트 안에 있는 자식 컴포넌트에 스타일을 주는방법, js이므로 위에 미리 선언을 해야한다. */
  & ${LoginBoxInput} {
    background-color: red;
    border: 2px solid red;
    width: 200px;
    height: 50px;
  }
`;
