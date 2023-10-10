import React, { useEffect, useState } from "react";
import Web3 from "web3";
const useWeb3 = () => {
  const [user, setUser] = useState({
    account: "",
    balnace: "",
  });

  const [web3, setWeb3] = useState(null);
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum
        .request({
          method: "eth_requestAccounts",
        })
        .then(async ([data]) => {
          const webProvider = new Web3(window.ethereum);
          setWeb3(webProvider);
          setUser({
            account: data,
            balnace: webProvider.utils.toWei(
              await webProvider.eth.getBalance(data),
              "ether"
            ),
          });
        });
    } else {
      alert("메타마스크 설치");
    }
  }, []);
  return { user, web3 };
};

export default useWeb3;
