import { useState, useEffect } from "react";
import Web3 from "web3";

// 커스텀 훅은 use를 붙여야한다.
const useWeb3 = () => {
  // 현재 접속한 메타마스크 지갑 정보를 담을 변수
  const [user, setUser] = useState({
    account: "",
    balnce: "",
  });
  //   네트워크와 연결한 web3 인스턴스를 담을 변수
  const [web3, setWeb3] = useState(null);

  useEffect(() => {
    // 이더리움 객체가 있는지 확인, 메타마스크 설치시 추가됨
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then(async ([data]) => {
          // 요청하고 응답받을시 받은 값의 첫번째 값
          const web3Provider = new Web3(window.ethereum);
          setWeb3(web3Provider);
          setUser({
            account: data,
            // web3Provider.utils.toWei 요청을 보내고
            // 매개변수로
            // web3Provider.eth.getBalance(data) 현재 지갑의 잔액을 조회
            // 단위가 wei이므로 ether로 변경
            // ether 단위로 변경을 하는데
            balnce: web3Provider.utils.toWei(
              await web3Provider.eth.getBalance(data),
              "ether"
            ),
          });
        });
    } else {
      alert("메타 마스크 설치");
    }
  }, []);

  return {
    user,
    web3,
  };
};

export default useWeb3;
