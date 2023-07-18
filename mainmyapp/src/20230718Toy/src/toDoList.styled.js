import { styled } from "styled-components";

const TodoListContainer = styled.div`
  margin: auto;
  width: 500px;
  height: 900px;
  border: 1px solid;
`;

const TodoListHeader = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ToDoListMiddle = styled.div`
  width: 100%;
  height: 600px;
  border: 1px solid red;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TodoListFooter = styled.div`
  width: 100%;
  height: 150px;
  border: 1px solid red;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InsertButton = styled.div`
      width: 40%;
    height: 40%;
    /* display: inline-block; */
    border-radius: 20px;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    font-family: Arial,sans-serif;
    border: none;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  & button:hover {
    background-color: #0056b3;
  }
`;

export { TodoListContainer, TodoListHeader, ToDoListMiddle, TodoListFooter,InsertButton };

const ToDoContentContainer = styled.div`
  width: 90%;
  height: 40px;
  border: 1px solid blue;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin: 10px;
  justify-content: space-between;
  padding: 5px;
`;

const UtilBtnContainer = styled.div`
  width: 33%;
  display: flex;
  justify-content: space-between;
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
  & button:hover {
    background-color: #0056b3;
  }
`;

export { ToDoContentContainer, UtilBtnContainer };
