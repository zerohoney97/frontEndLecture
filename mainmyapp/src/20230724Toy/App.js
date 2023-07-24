import React from "react";
import MainBoard from "./src/boards/MainBoard";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import SignUp from "./src/user/SignUp";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/board" element={<MainBoard></MainBoard>} />
        <Route path="/" element={<SignUp></SignUp>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
