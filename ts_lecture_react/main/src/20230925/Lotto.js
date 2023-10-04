import React, { useEffect, useState } from "react";
import Web3 from "web3";

const Lotto = ({ web3, account }) => {
  const [lottoArr, setLottoArr] = useState([]);
  const [isInput, setIsInput] = useState(false);
  const [inputData, setInputData] = useState("");
  const [userLottoArr, setUserLottoArr] = useState([]);
  const lottoAbi = [
    { inputs: [], stateMutability: "nonpayable", type: "constructor" },
    {
      inputs: [],
      name: "getLottoArr",
      outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      name: "lottoArr",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_lottoNum1", type: "uint256" },
        { internalType: "uint256", name: "_lottoNum2", type: "uint256" },
        { internalType: "uint256", name: "_lottoNum3", type: "uint256" },
        { internalType: "uint256", name: "_lottoNum4", type: "uint256" },
        { internalType: "uint256", name: "_lottoNum5", type: "uint256" },
        { internalType: "uint256", name: "_lottoNum6", type: "uint256" },
      ],
      name: "setLottoArr",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];
  // "0x410ef30cf0c65fb9a13abd0dacad048b6d67f904"
  useEffect(() => {
    const tempArr = [];
    for (let index = 0; index < 6; index++) {
      const selectedInteger = Math.floor(Math.random() * 45) + 1;
      tempArr.push(selectedInteger);
    }
    setLottoArr(tempArr);
  }, []);
  const getLottoArr = async () => {
    const lottoAbiData = web3.eth.abi.encodeFunctionCall(lottoAbi[1]);
    const data = await web3.eth.call({
      to: "0x410ef30cf0c65fb9a13abd0dacad048b6d67f904",
      gas: "3000000",
      data: lottoAbiData,
    });
    const decodedData = web3.eth.abi.decodeParameter("uint256[]", data);
    const newDecodedData = decodedData.map((el) => {
      return Number(el);
    });
    setUserLottoArr(newDecodedData);
    setIsInput(true);
  };
  const lottoHandler = async () => {
    const tempUserLottoArr = inputData.split(" ");

    if (tempUserLottoArr.length < 6) {
      alert("어허");
    } else {
      const userLottoArr = tempUserLottoArr.splice(0, 6);
      for (let index = 0; index < userLottoArr.length; index++) {
        userLottoArr[index] = parseInt(userLottoArr[index]);
      }
      console.log(userLottoArr[0]);
      const lottoAbiData = web3.eth.abi.encodeFunctionCall(lottoAbi[3], [
        userLottoArr[0],
        userLottoArr[1],
        userLottoArr[2],
        userLottoArr[3],
        userLottoArr[4],
        userLottoArr[5],
      ]);
      const data = await web3.eth.sendTransaction({
        from: account,
        to: "0x410ef30cf0c65fb9a13abd0dacad048b6d67f904",
        gas: "3000000",
        data: lottoAbiData,
      });
      console.log(data);
      getLottoArr();
    }
  };

  return (
    <div>
      <label>
        로또 번호를 입력해주세요(공백으로 숫자를 구분합니다. 자동없다)
      </label>
      <input
        type="text"
        onChange={(e) => {
          setInputData(e.target.value);
        }}
      />
      <button onClick={lottoHandler}>인생역전하러 가기</button>

      <div>
        <button onClick={getLottoArr}>
          블록체인에 저장된 나의 로또 번호 확인
        </button>
        <br></br>
        <ul>
          {isInput &&
            userLottoArr.map((el) => {
              return <li>{el}</li>;
            })}
        </ul>
        <br></br>
        <h2>이번주 로또 번호</h2>
        <ul>
          {isInput &&
            lottoArr.map((el) => {
              return <li>{el}</li>;
            })}
        </ul>
      </div>
    </div>
  );
};

export default Lotto;
