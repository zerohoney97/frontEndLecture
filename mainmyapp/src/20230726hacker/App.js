/* App.jsx 파일 */

import React, { useEffect, useState } from "react";
import useWeb3 from "./src/hooks/useWeb3";
import Counter from "./src/component/Counter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { mintJusticeTokenContract } from "./src/contracts/index";
import Main from "./src/component/main";
import Chart from "./src/component/Chart";
function App() {
  const [account, setAccount] = useState("");
  // nft raw한 데이터
  const [nftInfo2, setNftInfo2] = useState("");
  // 하나하나의 객체로 정리돼서 완성된 객체 배열
  const [nftArr, setNftArr] = useState([]);

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
    if (account !== "") {
      console.log(account);
      const nftInfo = await mintJusticeTokenContract.methods
        .getAllUserNft(account)
        .call();
      console.log(nftInfo);
      console.log(await mintJusticeTokenContract.methods.getMsgSender().call());
      setNftInfo2(nftInfo);
    }
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

  const rawNftToObject = () => {
    const tempArr = [...nftArr];
    nftInfo2["0"].forEach((el, index) => {
      tempArr.push({
        img: nftInfo2["0"][index],
        caseNum: nftInfo2["1"][index],
        caseName: nftInfo2["2"][index],
        date: nftInfo2["3"][index],
        sentence: nftInfo2["4"][index],
      });
    });
    setNftArr(tempArr);
  };
  useEffect(() => {
    if (nftInfo2 !== "") {
      rawNftToObject();
    }
  }, [nftInfo2]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Main account={account} nftInfo2={nftInfo2} />}
        />
        <Route
          path="/chart"
          element={<Chart account={account} nftArr={nftArr} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
