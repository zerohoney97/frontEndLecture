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

const BoardInsertContainer = styled.div`
  width: 800px;
  height: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
  width: 80%;
`;

const TitleInputLabel = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 5px;
`;

const TitleInput = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 14px;
`;

const ContentInputLabel = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 5px;
`;

const ContentInput = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 14px;
  vertical-align: top;
  resize: none;
`;

const InsertButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color:gray;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

export {
    BoardInsertContainer,
  Body,
  ContentInput,
  ContentInputLabel,
  InputGroup,
  InsertButton,
  TitleInput,
  TitleInputLabel,
};
