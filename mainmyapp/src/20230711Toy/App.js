import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import SignUp from "./src/components/layout/signUp/SignUp";
import SignUp from "./src/components/layout/signUp/SignUp";
import Login from "./src/components/layout/login/Login";
import Main from "./src/components/layout/main/Main";
import BoardInsert from "./src/components/layout/boardInsert/BoardInsert";
import BoardDetail from "./src/components/layout/boardDetail/BoardDetail";
import BoardModify from "./src/components/boardModify/BoardModify";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/insert" element={<BoardInsert />} />
          <Route path="/main/:id" element={<BoardDetail />} />
          <Route path="/modify/:id" element={<BoardModify />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
