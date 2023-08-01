/* Counter.jsx 파일 */

import React, { useEffect, useState } from "react";
import EthSwap from "../contracts/EthSwap.json";

const Counter = ({ web3, account }) => {
  const [count, setCount] = useState(0);
  const [deployed, setDeployed] = useState(null);

  const increment = async () => {
    // 인자값으로 트랜잭션을 발생시킬 계정을 넣어준다.
    const result = await deployed.methods.increment().send({ from: account });

    if (!result) return;

    const current = await deployed.methods.current().call();
    setCount(current);
  };

  const decrement = async () => {
    const result = await deployed.methods.decrement().send({ from: account });

    if (!result) return;

    const current = await deployed.methods.current().call();
    setCount(current);
  };

  // Truffle 에서는 deployed() 를 사용해 배포된 컨트랙트를 가져왔었다.
  // Web3 에서는 new web3.eth.Contract() 를 사용한다.

  useEffect(() => {
    (async () => {
      if (deployed) return;

      // Contract를 호출할 때 필요한 값들을 인자값으로 전달
      // 인자값 2개 , (abi, CA)
      const Deployed = new web3.eth.Contract(
        EthSwap.abi,
        "0xb3f9b86E6f0034dDAE116265A7dfDf09CCF138c9"
      );

      // const count = await Deployed.methods.current().call();

      // setCount(parseInt(count));
      // console.log(Deployed)
      // setDeployed(Deployed);
    })();
  }, []);

  return (
    <div>
      <h1>{account}</h1>
      <h2>Counter : {count}</h2>
      <h1
        onClick={() => {
          const Deployed = new web3.eth.Contract(
            EthSwap.abi,
            "0x2B00119Ef282E8705d8A1ab56D616f942f3b0d57"
          );

          console.log(
            Deployed.methods
              .getAmountToken()
              .call({ from: account, value: 1 })
              .then((res) => {
                console.log(res);
              })
          );
        //   console.log(
        //     Deployed.methods
        //       .valueToken()
        //       .call()
        //       .then((res) => {
        //         console.log(res);
        //       })
        //   );
          //   // console.log(Deployed.methods);
            Deployed.methods.buyToken().send({
              from: account,
              value: 10000000000000000000,
            });
        }}
      >
        송금
      </h1>
    </div>
  );
};

export default Counter;
