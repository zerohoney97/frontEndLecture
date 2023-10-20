import React, { useEffect, useState } from "react";
import Web3 from "web3";
function useWeb3() {
  const [user, setUser] = useState({
    account: "",
    balance: "",
  });

  const [web3, setWeb3] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then(async ([data]) => {
          const webProvider = new Web3(window.ethereum);
        
          setWeb3(webProvider);

          setUser({
            account: data,
            balance: webProvider.utils.toWei(
              await webProvider.eth.getBalance(data),
              "ether"
            ),
          });
          //   웹 메타마스크 지갑 다 뜰거고
          //  그 지갑에 있는 토큰 양을 다 보여줄거고
          // 컨트랙트를 배포한 네트워크가 맞는지 아니면 네트워크 변경할수 있게 함수 실행
          // 지갑을 바꾸면 바꾼 지갑내용으로 브라우저에 보일 수 있게
        });
    } else {
      alert("메타 마스크 설치해주세요");
    }
  }, []);

  return { user, web3 };
}

export default useWeb3;
