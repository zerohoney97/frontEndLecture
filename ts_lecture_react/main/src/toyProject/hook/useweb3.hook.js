import React, { useEffect, useState } from "react";
import Web3 from "web3";

function useWeb3() {
  const [user, setUser] = useState({
    account: "",
    balance: "",
  });
  const [web3, setWeb3] = useState(null);
  useEffect(() => {
    if (!window.ethereum) {
      alert("지갑을 만드세요옹");
    } else {
      window.ethereum
        .request({
          method: "eth_requestAccounts",
        })
        .then(async ([data]) => {
          const tempWeb3 = new Web3(window.ethereum);
          setWeb3(tempWeb3);
          console.log("asd");

          setUser({
            account: data,
            balance: tempWeb3.utils.toWei(
              await tempWeb3.eth.getBalance(data),
              "ether"
            ),
          });
          console.log("유저의 계좌", data);
        });
    }
  }, []);

  return { user, web3 };
}

export default useWeb3;
