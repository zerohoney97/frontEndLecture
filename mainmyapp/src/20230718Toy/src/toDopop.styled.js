import { styled } from "styled-components";

const Body = styled.body`
  background-color: rgba(0, 0, 0, 0.2);
`;

const UpdateBody = styled.div`
width: 100vw;
height: 200vh;
  background-color: rgba(0, 0, 0, 0.2);
`;

const ModalContainer = styled.div`
  width: 700px;
  height: 700px;
  position: absolute;
  left: 50%;
  top: 50%;
  background-color: white;
  transform: translate(-50%, -50%);
`;

const ModalHeader = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalMiddle = styled.div`
  width: 100%;
  height: 490px;
`;
const InputBoxTop = styled.div`
  align-items: center;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
`;
const TitleInputBox = styled.div`
  width: 70%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & input {
    display: block;
    width: 91%;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-family: Arial, sans-serif;
    font-size: 16px;
    outline: none;
  }
`;
const NameInputBox = styled.div`
  width: 20%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & input {
    display: block;
    width: 83%;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-family: Arial, sans-serif;
    font-size: 16px;
    outline: none;
  }
`;
const ContentInputBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 90%;
  height: 350px;
  margin: auto;
  & textarea {
    display: block;
    width: 96%;
    height: 100%;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-family: Arial, sans-serif;
    font-size: 16px;
    outline: none;
    resize: none;
  }
`;

const ModalFooter = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  & button {
    width: 47%;
    display: inline-block;
    border-radius: 20px;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    font-family: Arial, sans-serif;
    border: none;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    height: 40px;
  }
`;

export {
  ModalContainer,
  Body,
  ModalHeader,
  ModalMiddle,
  ContentInputBox,
  InputBoxTop,
  NameInputBox,
  TitleInputBox,
  ModalFooter,
  UpdateBody
};
