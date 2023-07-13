import { styled } from "styled-components";

const Body = styled.body`
  font-family: Arial, sans-serif;
  background-color: #f5f5f7;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BoardMainContainer = styled.div`
  width: 800px;
  height: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const BoardTitle = styled.h1`
  width: 80%;
  height: 40px;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  border: 3px solid #ebebf0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translate(-50%);
`;
const BoardMiddleContainer = styled.div`
  width: 100%;
  height: 40px;
  position: absolute;
  top: 80px;
  left: 0;
`;
const BoardWriter = styled.p`
  font-size: 20px;
  color: #666;
  margin-bottom: 10px;
  position: absolute;
  right: 220px;
  transform: translate(0, -50%);
`;
const BoardContent = styled.p`
  width: 80%;
  height: 450px;
  margin: auto;
  border: 3px dotted #ebebf0;
  font-size: 16px;
  margin-bottom: 20px;
  position: absolute;
  top: 170px;
  left: 50%;
  transform: translate(-50%);
`;
const BoardTime = styled.p`
  font-size: 14px;
  color: #888;
  position: absolute;
  right: 50px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 40px;
  position: absolute;
  top: 120px;
  left: 0;
`;

const ModifyBtn = styled.button`
  width: 13%;
  height: 100%;
  position: absolute;
  right: 150px;
  color: #555;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  &:hover{
    background-color: #939499;
  }
`;
const DeleteBtn = styled.button`
  width: 13%;
  height: 100%;
  position: absolute;
  right: 20px;
  color: #555;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  &:hover{
    background-color: #939499;
  }
`;

export {
  BoardContent,
  BoardMainContainer,
  BoardTime,
  BoardTitle,
  BoardWriter,
  Body,
  BoardMiddleContainer,
  ButtonContainer,
  ModifyBtn,
  DeleteBtn
};
