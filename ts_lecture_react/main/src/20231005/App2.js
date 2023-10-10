import React, { useEffect, useState } from "react";
import useWeb3 from "./hooks/web3.hook";
import abi from "./abi/BaseBall.json";
function App2() {
  const { user, web3 } = useWeb3();
  const [ticket, setTicket] = useState("0");
  const [baseballContract, setBaseballContract] = useState(null);
  //   우리가 정한 정답
  const [value, setValue] = useState("0");
  const [reward, setReward] = useState("0");
  const [progress, setProgress] = useState("0");

  //   게임이 진행중인지 여부
  const [message, setMessage] = useState("");
  //   컨트랙트 배포자만 알 수 있는값
  const [random, setRandom] = useState("000");
  useEffect(() => {
    if (web3 !== null) {
      console.log(web3);
      if (baseballContract === null) {
        const Baseball = new web3.eth.Contract(
          abi,
          "0x94fbEc4e1EaB5b5f2B4bF86E94786d97C5CC1251",
          {
            data: "",
          }
        );
        console.log(Baseball);
        setBaseballContract(Baseball);
      }
    }
  }, [web3]);

  useEffect(() => {
    if (baseballContract !== null) {
      getTicket();
    } else {
      console.log(baseballContract);
    }
  }, [baseballContract]);

  const getTicket = async () => {
    if (baseballContract !== null) {
      console.log(baseballContract);
      const result = web3.utils
        .toBigInt(await baseballContract.methods.getTicketPrice().call())
        .toString(10);

      setTicket(await web3.utils.fromWei(result, "ether"));
    }
  };

  const getReward = async () => {
    if (baseballContract !== null) {
      const result = web3.utils
        .toBigInt(await baseballContract.methods.getReward().call())
        .toString(10);

      setReward(await web3.utils.fromWei(result, "ether"));
    }
  };

  const getPlaying = async () => {
    if (baseballContract !== null) {
      const playing = web3.utils
        .toBigInt(await baseballContract.methods.getPlaying().call())
        .toString(10);
      console.log(playing);
      setMessage(playing);
    }
  };

  const getProgress = async () => {
    if (baseballContract !== null) {
      const progress = web3.utils
        .toBigInt(await baseballContract.methods.getProgress().call())
        .toString(10);
      setProgress(progress);
    }
  };

  const getRandom = async () => {
    if (baseballContract !== null) {
      const random = web3.utils
        .toBigInt(await baseballContract.methods.getRandom().call())
        .toString(10);

      setRandom(random);
    }
  };

  const gameStart = async () => {
    if (value.length < 3) {
      alert("숫자 3개 입력해라");
      return;
    }
    await baseballContract.methods.gameStart(Number(value)).send({
      from: user.account,
      value: web3.utils.toWei("5", "ether"),
    });
    render();
  };

  const render = () => {
    getTicket();
    getProgress();
    getReward();
    getPlaying();
  };
  useEffect(() => {
    if (baseballContract !== null) {
      render();
    }
  }, [baseballContract]);

  const restart = async () => {
    const result = await getPlaying();
    if (result === "0") {
      alert("아직 게임이 안 끝났습니다.");
    } else {
      await baseballContract.methods.initGame().send({
        from: user.account,
      });
    }
  };
  useEffect(() => {
    console.log(message, "asd");
  }, [message]);
  if (user.account === null) {
    return "메타마스크 지갑 연결 하세요";
  }

  return (
    <div>
      <div>돈:{user.balnace}</div>
      <div>티켓 가격:{ticket}</div>
      <div>현재 게임 진행도:{progress}</div>
      <div>총 상금:{reward}</div>
      <div>진행중:{message === "0" ? "게임중" : "게임 종료"}</div>
      <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></input>
      <div>정답:{random}</div>
      <button onClick={gameStart}>게임시작</button>
      <button onClick={getRandom}>어드민</button>
      <button onClick={restart}>재시작</button>
    </div>
  );
}

export default App2;
