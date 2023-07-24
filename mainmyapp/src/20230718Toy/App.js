import React, { createContext, useContext, useState } from "react";
import ToDoList from "./src/ToDoList";
import ToDoPop from "./src/ToDoPop";
import { Body } from "./src/toDopop.styled";
// todolist
// 컴포넌트: 할일 리스트 부모 컴포넌트
// 내용 컴포넌트들
// 전역 내용관리
// 작성 컴포넌트 (팝업)

// 할 일 리스트 게시판 제목 ,사용자 이름변경
// 제목 변경시 안의 내용은 렌더링 x

// 안의 내용이 렌더링되는건 할일 리스트
// 부모컴포넌트 안의 내용이 추가 되었을때
export const TodoObj = createContext();
const App = () => {
  const [todo, setTodo] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [index, setIndex] = useState();
  const todoObj = {
    todo,
    setTodo,
    isModal,
    setIsModal,
    index,
    setIndex,
  };
  function dfs(graph, node, visited, component) {
    visited[node] = true;
    component.push(node);
    console.log(visited);

    for (const neighbor of graph[node]) {
      if (!visited[neighbor]) {
        dfs(graph, neighbor, visited, component);
      }
    }
  }

  function findConnectedComponents(graph) {
    const visited = {};
    const connectedComponents = [];

    for (const node in graph) {
      if (!visited[node]) {
        const component = [];
        dfs(graph, node, visited, component);
        connectedComponents.push(component);
      }
    }

    return connectedComponents;
  }

  // Example usage:
  const adjacencyList = {
    1: [2, 3, 4],
    2: [4],
    3: [4],
  };

  const connectedComponents = findConnectedComponents(adjacencyList);
  console.log(connectedComponents);

  return (
    <TodoObj.Provider value={todoObj}>
      {isModal ? (
        <Body>
          <ToDoList></ToDoList>
          <ToDoPop></ToDoPop>
        </Body>
      ) : (
        <>
          <ToDoList></ToDoList>
          <ToDoPop></ToDoPop>
        </>
      )}
    </TodoObj.Provider>
  );
};

export default App;
