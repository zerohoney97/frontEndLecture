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

const BoardMainTitle = styled.h1`
  text-align: center;
  color: #333;
`;

const BoardHeader = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-bottom: 10px;
`;

const BoardHeaderItem1 = styled.span`
  margin-left: 5px;
  width: 12%;
  display: flex;
  justify-content: center;
`;
const BoardHeaderItem2 = styled.span`
  width: 33%;
  display: flex;
  justify-content: center;
`;
const BoardHeaderItem3 = styled.span`
  width: 38%;
  display: flex;
  justify-content: center;
`;
const BoardHeaderItem4 = styled.span`
  width: 11%;
  display: flex;
  justify-content: center;
`;

const BoardList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
  height: 60%;
`;

const BoardItem = styled.li`
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  display: flex;
  height: 40px;
  align-items: center;
  cursor: pointer;
`;

const BoardNum = styled.h3`
  font-size: 17px;
  margin: 0;
  padding: 0;
  color: #333;
  margin-left: 5px;
  width: 10%;
  display: flex;
  justify-content: center;
`;

const BoardTitle = styled.h3`
  font-size: 18px;
  margin: 0;
  padding: 0;
  color: #333;
  width: 40%;
  display: flex;
  justify-content: center;
`;

const BoardWriter = styled.h3`
  font-size: 15px;
  margin: 0;
  padding: 0;
  color: #333;
  width: 35%;
  display: flex;
  justify-content: center;
`;

const BoardDate = styled.h3`
  font-size: 15px;
  margin: 0;
  padding: 0;
  color: #333;
  width: 20%;
  display: flex;
  justify-content: center;
`;
const BoardInsertButton = styled.button`
  display: block;
  margin-top: 20px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: gray;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  width: 130px;
  position: absolute;
  right: 15px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

const PaginationContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Pagination = styled.div`
  width: 70%;
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 50px;

`;

const PaginationButton = styled.button`
  display: inline-block;
  padding: 10px 20px;
  margin-right: 10px;
  border: none;
  border-radius: 5px;
  background-color: gray;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;
export {
  Body,
  BoardMainContainer,
  BoardMainTitle,
  BoardItem,
  BoardList,
  BoardTitle,
  BoardNum,
  BoardWriter,
  BoardDate,
  BoardHeader,
  BoardHeaderItem1,
  BoardHeaderItem2,
  BoardHeaderItem3,
  BoardHeaderItem4,
  BoardInsertButton,
  PaginationButton,
  Pagination,
  PaginationContainer,
};
