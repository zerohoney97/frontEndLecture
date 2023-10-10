import React, { useEffect, useState } from "react";
// 0xE7fD30081A91880da26984e2f5b0e90D17DfDdc6
import useWeb3 from "./hooks/web3.hook";

import abi from "./abi/Counter.json";

export default function App() {
  const { user, web3 } = useWeb3();
  const [count, setCount] = useState(0);
  const [countContract, setCountContract] = useState(null);
  useEffect(() => {
    if (web3 !== null) {
      if (countContract === null) {
        //  web3.eth.Contract:네트워크에 배포되어있는 컨트랙트를 조회하고 인스턴스로 생성해둔다.
        // 메서드를 통해서 네트워크에 상호작용 할 수 있다.

        //  web3.eth.Contract(abi,CA,option)

        const Counter = new web3.eth.Contract(
          abi,
          "0xDc752d941Dd1d891D25191740FF39ACA1160d941",
          { data: "" }
        );

        // 이후에 디폴트 옵션을 추가하고 싶다면
        // Counter.options.from=''
        console.log(Counter);
        setCountContract(Counter);
      }
    }
  }, [web3]);

  const getValue = async () => {
    if (countContract === null) {
      return;
    }
    console.log(await countContract.methods.getValue().call());
    // const result = web3.utils
    //   .toBigInt(await countContract.methods.getValue().call())
    //   .toString(10);

    // setCount(result);
  };

  useEffect(() => {
    if (countContract !== null) {
      getValue();
    }
  }, [countContract]);

  const increment = async () => {
    console.log(user.account);
    await countContract.methods.increment().send({
      from: user.account,
      data: countContract.methods.increment().encodeABI(),
    });
    getValue();
  };
  const decrement = async () => {
    await countContract.methods.dcrement().send({
      from: user.account,
      data: countContract.methods.dcrement().encodeABI(),
      gas: "300000000",
    });
    getValue();
  };

  if (user.account === null) {
    return "연결된 지갑이 없어요";
  }
  return (
    <>
      {" "}
      <div>{user.account}</div>
      <div>카운터:{count}</div>
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
    </>
  );
}
