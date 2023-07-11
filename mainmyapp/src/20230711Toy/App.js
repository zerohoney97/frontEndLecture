import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import SignUp from "./src/components/layout/signUp/SignUp";
import SignUp from "./src/components/layout/signUp/SignUp";
import Login from "./src/components/layout/login/Login";
import Main from "./src/components/layout/main/Main";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
