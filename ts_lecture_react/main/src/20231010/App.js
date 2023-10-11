import React, { useEffect, useState } from "react";
import useWeb3 from "./hooks/web3.hook";
import abi from "./abi/ERC20.json";
import Web3 from "web3";
function App() {
  const { user, web3 } = useWeb3();
  const [ERC20Contract, setERC20Contract] = useState(null);
  const [network, setNetwork] = useState(null);
  const [accounts, setAccounts] = useState([]);

  const [token, setToken] = useState("0");
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [networkId, setNetworkId] = useState("0x539");
  useEffect(() => {
    if (web3 !== null) {
      if (ERC20Contract) return;
      const ERC20 = new web3.eth.Contract(
        abi,
        "0xAC7da4aF2E5C3A26B049B265BFe89d0B601b8a34",
        { data: "" }
      );
      console.log(ERC20);
      setERC20Contract(ERC20);
    }
  }, [web3]);
  useEffect(() => {
    // 이벤트 등록 네트워크가 변경되면 발생하는 이벤트 등록
    window.ethereum.on("chainChanged", (chainId) => {
      if (chainId === "0x539") {
        alert("가나쉬에 연결");
        setNetworkId(chainId);

        getAccounts();
      } else if (chainId === "0xaa36a7") {
        alert("세폴리온에 연결");
        setNetworkId(chainId);

        getSepAccounts();
      }
    });

    // 지갑이 변경되면 실행할 이벤트 등록
    window.ethereum.on("accountsChanged", (account) => {
      console.log("지갑 변경됨", account);
      if (networkId === "0x539") {
        console.log(networkId);
        getAccounts();
      } else if (networkId === "0xaa36a7") {
        console.log(networkId);
        getSepAccounts();
      } else {
        console.log(networkId, "네트워크 아이디");
      }
    });
    if (!ERC20Contract) {
      return;
    }

    // 컨트랙트 인스턴스가 있으면 실행시키지 않고
    // 네트워크가 정상적일 때 실행시켜도 되겠다.
  }, [network]);
  const switchNet = async () => {
    // 해당 네트워크가 맞는지 요청
    // 메타마스크로 요청
    // wallet_switchEthereumChain == chainId가 맞는지 확인 매개변수로 전달한 chainId가 맞는지
    // 0x539우리가 설정한 chainId 1337
    const net = await window.ethereum.request({
      jsonrpc: "2.0",
      method: "wallet_switchEthereumChain",
      params: [{ chainId: networkId }],
    });
    if (networkId === "0x539") {
      getAccounts();
    } else if (networkId === "0xaa36a7") {
      getSepAccounts();
    }
    // net값이 null이 반환되면 해당 네트워크에 있다는 뜻.
    setNetwork(net || true);
  };

  // 전달받은 매개변수 (지갑주소) 의 잔액을 보여주는 함수
  const getToken = async (account) => {
    if (!ERC20Contract) {
      return;
    }
    let result = web3.utils
      .toBigInt(await ERC20Contract.methods.balanceOf(account).call())
      .toString(10);
    result = await web3.utils.fromWei(result, "ether");
    return result;
  };

  // 해당 계정의 이더리움을 가져오는 함수
  const getETH = async (account) => {
    if (!ERC20Contract) {
      return;
    }
    let ETHResulut = await web3.eth.getBalance(account);
    console.log(ETHResulut, "가져온 이더리움 계좌 잔액");
    ETHResulut = web3.utils.fromWei(ETHResulut, "ether");
    console.log(ETHResulut, "가져온 이더리움 계좌 이더변환");
    return ETHResulut;
  };

  // 메타마스크의 모든 지갑을 보여줄 함수
  const getAccounts = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    // 배열을 돌릴 때 map에서 일어나는 promise반환값을 다 처리하고 넘어가기
    // promise.all  요청이 다 끝나면 진행

    const accountsCom = await Promise.all(
      accounts.map(async (account) => {
        const token = await getToken(account);
        const eth = await getETH(account);
        return { account, token, eth };
      })
    );
    // console.log(await getToken(accounts[0]),'getAccounts');
    setToken(await getToken(accounts[0]));

    setAccounts(accountsCom);
  };

  // sepholion 잔액조회

  const getSepAccounts = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log("세폴리온 계좌 함수 실행");
    const accountsCom = await Promise.all(
      accounts.map(async (account) => {
        console.log(account, "세폴리온 map");
        const eth = await getETH(account);
        return { account, eth };
      })
    );
    setAccounts(accountsCom);
  };

  // 지갑에서 다른 지갑으로 토큰 전송할 함수
  const transfer = async () => {
    await ERC20Contract.methods
      .transfer(
        value.replaceAll(" ", ""),
        await web3.utils.toWei(value2, "ether")
      )
      .send({
        from: user.account,
      });
    if (networkId === "0x539") {
      getAccounts();
    } else if (networkId === "0xaa36a7") {
      getSepAccounts();
    }
  };
  // 0xAC7da4aF2E5C3A26B049B265BFe89d0B601b8a34

  // 0xD1b0b915Ee4c470C02B445dE2cfEA715848bfa06
  if (user.account === null) {
    return "지갑 연결하셈";
  }
  return (
    <div>
      <button onClick={switchNet}>토큰 컨트랙트 연결</button>
      <div> 지갑 주소:{user.account}</div>
      <h2> 토큰 보유량:{token}</h2>
      {accounts.map((item, index) => {
        return (
          <div key={index}>
            계정:{item.account},
            <br />
            토큰량:{item.token}
            <br />
            이더리움 양:{item.eth}
          </div>
        );
      })}
      <div>
        <label>누구한테 보낼거임? </label>
        <input
          onChange={(e) => {
            setValue(e.target.value);
          }}
        ></input>
        <label>토큰수 </label>
        <input
          onChange={(e) => {
            setValue2(e.target.value);
          }}
        ></input>
      </div>
      <button onClick={transfer}>보내기</button>
      계정들의 이더리움 잔액 보여주는 함수 만들어서 보여주자
    </div>
  );
}

export default App;
