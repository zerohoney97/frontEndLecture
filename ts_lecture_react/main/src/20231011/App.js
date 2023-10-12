import React, { useEffect, useState } from "react";
import useWeb3 from "./hooks/web3.hook";
import abi from "./abi/Poketmon.json";
function App() {
  const { user, web3 } = useWeb3();
  const [contract, setContract] = useState(null);
  const { token, setToken } = useState(0);
  const [account, setAccount] = useState([]);
  const [trainer, setTrainer] = useState([]);
  const [selectedPoketmon, setSelectedPoketmon] = useState();
  const [toAccount, setToAccount] = useState("");
  const img = {
    width: "200px",
    height: "200px",
  };
  useEffect(() => {
    if (web3 !== null) {
      if (contract) {
        return;
      }
      const poketmon = new web3.eth.Contract(
        abi,
        "0xb8E555170A3BFF70d923aa04e24C7D08dCCBf955",
        { data: "" }
      );
      setContract(poketmon);
    }
  }, [web3]);

  //   해당 지갑의 포켓몬 조회
  const getPoketmon = async (account) => {
    const result = await contract.methods.getPoketmon().call({ from: account });
    console.log(result);
    return result;
  };

  // 지갑의 토큰 양 조회
  const getToken = async (account) => {
    if (!contract) {
      return;
    }
    let result = web3.utils
      .toBigInt(await contract.methods.balanceOf(account).call())
      .toString(10);

    result = await web3.utils.fromWei(result, "ether");
    return result;
  };

  //   메타 마스크 계정들 조회
  const getAccount = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const _accounts = await Promise.all(
      accounts.map(async (account) => {
        const token = await getToken(account);
        const poketmon = await getPoketmon(account);
        // 추가로 어떤 포켓몬도 있는지 추가할 부분
        return { account, token, poketmon };
      })
    );
    setAccount(_accounts);
  };
  const getNewPoketmon = async () => {
    await contract.methods.buyPoketmon().send({
      from: user.account,
    });
  };

  const getUsersWhoHaveDrawn = async () => {
    const result = await contract.methods.getPoketmonUsers().call({
      from: user.account,
    });
    console.log(result);
    setTrainer(result);
  };

  // 포켓몬 트레이드 시스템
  const tradePoketmon = async () => {
    await contract.methods.tradePoketmon(toAccount, selectedPoketmon).send({
      from: user.account,
    });
  };
  // 1.포켓몬 랜덤으로 뽑을 수 있는 버튼
  // 2. 한 번이라도 뽑은 계정만 모으고 어떤 포켓몬을 가지고 있는지 보여주기
  // 3.포켓몬 거래(소유권) 함수 작성
  // 4.포켓몬 대전 판돈(선택)
  useEffect(() => {
    if (!contract) {
      return;
    }
    getAccount();
  }, [contract]);

  useEffect(() => {
    console.log(selectedPoketmon);
  }, [selectedPoketmon]);

  if (user.account === null) {
    return "지갑 연결하세요";
  }

  return (
    <div>
      <div>토큰 보유량:{token}</div>
      {account.map((el, index) => {
        return (
          <div key={index}>
            계정:{el.account} <br />
            토큰 값:{el.token}
            <div> 포켓몬들</div>
            <div style={{ display: "flex" }}>
              {el.poketmon.map((el2, index2) => {
                return (
                  <div key={index2}>
                    {el2.name}: <img style={img} src={el2.url} alt="포켓몬" />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
      <div style={{ width: "100%", height: "500px", margin: "auto" }}>
        <img
          src="https://mblogthumb-phinf.pstatic.net/20160326_233/poi8969_1458975983221ymkBv_JPEG/cafe_naver_com_20160326_152644.jpg?type=w2"
          alt="오박사"
        />{" "}
        <br />
        <button onClick={getNewPoketmon}>너의 포켓몬을 골라보려어어엄!</button>
      </div>

      <div>
        <h2>포켓몬 트레이너들 보기</h2>
        <button onClick={getUsersWhoHaveDrawn}>
          스바라시한 트레이너들 보기
        </button>
        {trainer &&
          trainer.map((el, index) => {
            return (
              <ol key={index}>
                <li>{el.account}</li>
              </ol>
            );
          })}
      </div>

      <div style={{ width: "100%", height: "400px", margin: "auto" }}>
        <h2>포켓몬 입양 보내기</h2>
        <div>
          당신이 세상에서 전부인 불쌍한 포켓몬을 입양보내는 시스템 입니다.
        </div>
        <div>입양 보낼(ㅠㅠ) 포켓몬 선택하기</div>
        <label>
          피카츄
          <input
            name="radio"
            type="radio"
            value={"pikachu"}
            onChange={(e) => {
              setSelectedPoketmon(e.target.value);
            }}
          />
        </label>
        <label>
          파이리
          <input
            name="radio"
            type="radio"
            value={"Charmander"}
            onChange={(e) => {
              setSelectedPoketmon(e.target.value);
            }}
          />
        </label>
        <label>
          꼬북칩
          <input
            name="radio"
            type="radio"
            value={"kobuk"}
            onChange={(e) => {
              setSelectedPoketmon(e.target.value);
            }}
          />
        </label>
        <br />
        <br />
        <br />
        <label>당신보다 훌륭한 주인의 wallet입력하기</label>
        <input
          onChange={(e) => {
            setToAccount(e.target.value);
          }}
        />
        <button onClick={tradePoketmon}>입양 ㄱㄱ</button>
      </div>
    </div>
  );
}

export default App;
