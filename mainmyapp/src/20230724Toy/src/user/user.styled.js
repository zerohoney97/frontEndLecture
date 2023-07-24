import { styled } from "styled-components";

const SignUpContainer = styled.div`
  width: 30%;
  height: 40%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid;
`;
const SignUpHeader = styled.div`
  width: 100%;
  height: 15%;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignUpMiddle = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.div`
  width: 50%;
  height: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SignUpBtnContainer = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignUpBtn = styled.button`
  width: 40%;
  height: 80%;
  background-color: #007bff;

  /* display: inline-block; */
  border-radius: 20px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  font-family: Arial, sans-serif;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  &:hover {
    background-color: #0056b3;
  }
`;

export {
  SignUpContainer,
  SignUpHeader,
  SignUpMiddle,
  InputContainer,
  SignUpBtn,
  SignUpBtnContainer,
};
