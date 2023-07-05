import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

// 리액트는 페이지가 하나인데 어떻게 여러개의 페이지를 보여줄까?
// index.html 한 개로 페이지를 보여주는데
// 페이지를 컴포넌트로 구성을 하고 하위 컴포넌트들을 모아서 페이지의 형태로 구색을 맞춰서
// 브라우저에 보여준다
// 페이지가 전환된다는 것은 페이지 컴포넌트를 조건마다 바꿔서 보여주면 되겠다.
// 브라우저가 새로고침 되지않고 내용만 교체되는 구조
// 조건은 브라우저의 url에 따라 페이지 컴포넌트를 맞춰서 보여주면 된다.
// 결국 페이지 이동은 눈속임

// react router라는 라이브러리를 사용할 것
// npm install react-router-dom@6

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
