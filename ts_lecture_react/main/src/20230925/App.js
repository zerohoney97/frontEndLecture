import { useEffect, useState } from "react";
import Web3 from "web3";

function App() {
  // 브루우저에서 이더리움 블록체인 상호작용
  // 브라우저에서 메타마스크 확장 프로그램을 통해 네트워크에 상호작용을 할 수 있다.
  //  트랜잭션을 발생시키면 외부 소유 계정 정보를 가지고 있다.
  // 트랜잭션을 발생시키면 서명의 정보가 필요한데, 개인키를 직접 전달을 하는게 아니고
  // 메타마스크 안에 안전하게 보관이 되어있다.

  // 원격 프로시저 호출을 통해 컨트랙트의 함수를 실행 시킬 수 있고
  // 네트워크의 메서드도 사용을 해서 계정의 정보나 등등 로직을 사용할 수 있다.

  // 데이터 베이스를 가지고 로그인 구현을 하면
  // 아이디 비밀번호 입력해서 중앙화 데이터 베이스에 값이 저장되고 있고

  // 사용자가 로그인 했을 때 프로세스를
  // 지갑 로그인으로 가져가고 탈중앙화된 (어플리케이션 로그인 처리 방식)

  const [account, setAccount] = useState("");
  const [web3, setWeb3] = useState(new Web3(window.ethereum));
  const [balance, setBalance] = useState(0);
  const [bin, setBin] = useState("");
  const [counter, setCounter] = useState(0);
  const abi = [
    { inputs: [], stateMutability: "nonpayable", type: "constructor" },
    {
      inputs: [],
      name: "getValue",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "_value", type: "uint256" }],
      name: "setValue",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "subValue",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];
  useEffect(() => {
    (async () => {
      // 배열의 구조분해 할당
      // window
      const [data] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(data);
      // 0x0639A1f4acd43a6488A0A3865dD9230B850BaBf1
      // 현재 연결한 지갑 주소의 주소
      // 네트워크 web3연결
      setAccount(data.toString());
    })();
  }, [account]);

  const balanceBtn = async () => {
    const balance = await web3.eth.getBalance(account);
    console.log(balance);
    const _balance = await web3.utils.fromWei(balance, "ether");
    setBalance(_balance);
  };

  const deployCA = async () => {
    console.log(bin);

    // console.log(web3.eth.sendTransaction);
    web3.eth
      .sendTransaction({
        from: account,
        gas: "3000000",
        data: "0x" + bin,
      })
      .then(console.log);
    // console.log(deploy, "asd");
  };

  const getCounter = async () => {
    const data = web3.eth.abi.encodeFunctionCall(abi[1]);
    const addValue = await web3.eth.call({
      to: "0xc64777857edf4bc08bc7235b9d082a4b5fe005ed",
      gas: "3000000",
      gasLimit: "1000000000",
      data,
    });
    if (addValue === "0x") {
      console.log(addValue);
      setCounter(0);
    } else {
      console.log(parseInt(addValue, 16));
      // const result = await web3.utils.toDecimal(parseInt(addValue, 16));
      // console.log(result, "리절트");
      setCounter(parseInt(addValue, 16));
    }
  };

  const addCounter = async () => {
    const data = web3.eth.abi.encodeFunctionCall(abi[2], [counter + 1]);
    const addValue = await web3.eth.sendTransaction({
      from: account,
      to: "0xc64777857edf4bc08bc7235b9d082a4b5fe005ed",
      gas: "3000000",
      data,
    });
    console.log(addValue);
    setCounter(counter + 1);
  };

  // 카운트앱
  // 스마트 컨트랙트 배포

  // 트랜잭션으로 송금
  // 잔액 송금

  return (
    <div className="App">
      {/* 지갑의 내용을 가지고 계정 조회 */}
      <br />
      {account || "로그인 하셈"}
      <br />

      {balance || "잔액 조회 해야해"}

      <button
        onClick={() => {
          balanceBtn();
        }}
      >
        잔액조회
      </button>

      <div>
        <br></br>
        <label>컨트랙트 bin 파일 업로드</label>
        <br></br>
        <textarea
          onChange={(e) => {
            // console.log(e.target.value)
            setBin(e.target.value);
          }}
        ></textarea>
        <br></br>
        <button onClick={deployCA}>내가 만든 소중하 컨트랙트 배포</button>
      </div>
      <br />
      <div>
        <div>{counter}</div>
        <button onClick={getCounter}>조회</button>
        <button onClick={addCounter}>증가</button>
        {/* <button onClick={counterAdd}>증가</button>  */}
      </div>
    </div>
  );
}

export default App;
