/* App.jsx 파일 */

import React, { useEffect, useState } from "react";
import useWeb3 from "./src/hooks/useWeb3";
import Counter from "./src/component/Counter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { mintJusticeTokenContract } from "./src/contracts/index";
import Main from "./src/component/main";
function App() {
  const [account, setAccount] = useState("");
  const [nftInfo2, setNftInfo2] = useState("");

  const getAccount = async () => {
    try {
      if (window.ethereum) {
        const [accounts] = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts);
      } else {
        console.log(window.ethereum);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const getNftInfo = async () => {
    console.log(account)
    const nftInfo = await mintJusticeTokenContract.methods
      .getAllUserNft(account)
      .call();
    console.log(nftInfo);
    console.log(await mintJusticeTokenContract.methods.getMsgSender().call());
    setNftInfo2(nftInfo);
  };
  useEffect(() => {
    getAccount();
  });
  useEffect(() => {
    if (account !== "") {
      getNftInfo();
    } else {
    }
  }, [account]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Main account={account} nftInfo2={nftInfo2} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
