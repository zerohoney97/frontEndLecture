import React, { useEffect, useState } from "react";
import useWeb3 from "./hooks/web3.hook";
import abi from "./abi/Counter.json";
import Web3 from "web3";
const App = () => {
  const { user, web3 } = useWeb3();

  const [count, setCount] = useState(0);

  //   CA 컨트랙트 주소에 상태 변수를 조회하는 함수를 작성

  const getCount = () => {
    // web3있는지 확인
    if (web3 === null) return;

    // 배열을 순회하면서 값을 찾음
    // 순회하는 요소는 객체 data
    const getValueData = abi.find((data) => {
      return data?.name === "getValue";
    });
    const data = web3.eth.abi.encodeFunctionCall(getValueData, []);
    // data실행시킬 내용이 담겨있음
    // 원격 프로시저 호출
    web3.eth
      .call({
        to: "0x2931bfA49238F45B269CaA7Bf5880aE876fd4d4A",
        data,
      })
      .then((data) => {
        // 16진수에서 10진수로 변경
        const result = web3.utils.toBigInt(data).toString(10);
        setCount(result);
      });
  };
  //   값을 블록체인 네트워크에 요청해서 상태변수를 변경하는 함수
  const increment = async () => {
    const incrementData = abi.find((data) => data.name === "increment");
    const data = web3.eth.abi.encodeFunctionCall(incrementData, []);
    // 접속한 지갑의 주소
    // useWeb3훅에서 지갑의 정보를 받아왔음
    const from = user.account;
    const result = await web3.eth.sendTransaction({
      from,
      to: "0x2931bfA49238F45B269CaA7Bf5880aE876fd4d4A",
      data,
    });
    console.log(result);
    getCount();
  };

  const decrement = async () => {
    const decrementData = abi.find((data) => data.name === "decrement");
    const data = web3.eth.abi.encodeFunctionCall(decrementData, []);
    const result = await web3.eth.sendTransaction({
      from: user.account,
      to: "0x2931bfA49238F45B269CaA7Bf5880aE876fd4d4A",
      data,
    });
    console.log(result);
    getCount();
  };
  useEffect(() => {
    // 최초의 값 조회
    if (web3 !== null) {
      getCount();
    }
  }, [web3]);

  if (user.account === "") {
    return "지갑 로그인 하셈";
  }

  return (
    <div>
      <h2>카운트:{count}</h2>
      <button onClick={increment}>증가</button>
      <button onClick={decrement} >감소</button>
    </div>
  );
};

export default App;
