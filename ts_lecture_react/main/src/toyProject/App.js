import React, { useEffect } from "react";
import useWeb3 from "./hook/useweb3.hook";
import axios from "axios";
import { Route, Router, Routes } from "react-router-dom";
import Login from "./login/Login";
import Main from "./main/Main";
function App() {
  const { user, web3 } = useWeb3();

  if (user.account === null) {
    return "지갑연결";
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login user={user} web3={web3} />} />
        <Route path="/main" element={<Main user={user} web3={web3}/>} />
      </Routes>
    </div>
  );
}

export default App;
