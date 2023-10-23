import { useEffect, useState } from "react";
import useWeb3 from "./hooks/web3.hook";
import axios from "axios";
import abi from "./abi/nftTest.json";
const App = () => {
  const [file, setFile] = useState(null);
  const [contract, setContract] = useState(null);
  const [IPFShash, setIPFShash] = useState([]);
  const [toAccount, setToAccount] = useState();
  const { user, web3 } = useWeb3();

  // useEffect(()=>{
  //   console.log(file);
  // }, [file]);

  useEffect(() => {
    if (web3 !== null) {
      if (contract) return;
      const contractSTART = new web3.eth.Contract(
        abi,
        "0xff4E64AF21f9d8Fd9bdb3791a5041Ac529840f72",
        { data: "" }
      );
      setContract(contractSTART);
    }
  }, [web3]);

  const upload = async () => {
    const fileData = new FormData();
    fileData.append("file", file);
    try {
      // FileToIPFS
      /* const resp = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", fileData, {headers : {
        "Content-Type" : "multipart/form-data",
        pinata_api_key : "",
        pinata_secret_api_key : ""
      },});
      console.log("resp:", resp); */

      // JSON
      const resp2 = await axios.post(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        fileData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            pinata_api_key: "",
            pinata_secret_api_key:
              "",
          },
        }
      );
      // console.log("resp2:", resp2);
      console.log(resp2.data.IpfsHash);

      let obj = {
        name: "objCar",
        description: "NFT description",
        image:
          "https://ivory-traditional-cod-350.mypinata.cloud/ipfs/" +
          resp2.data.IpfsHash,
        attributes: [],
      };

      const resp3 = await axios.post(
        "https://api.pinata.cloud/pinning/pinJSONToIPFS",
        obj,
        {
          headers: {
            "Content-Type": "application/json",
            pinata_api_key: "",
            pinata_secret_api_key:
              "",
          },
        }
      );
      console.log(resp3.data.IpfsHash);

      let test1 = await contract.methods.minting(resp3.data.IpfsHash).send({
        from: user.account,
      });
      // CA로 컨트랙트를 조회해서 인스턴스화 시키고
      // 객체화 시켰을때 원격 프로시저 호출 편하게 메서드로 지원해준다.
      console.log(test1);
    } catch (error) {
      console.log(error);
    }
  };

  const getIPFShash = async () => {
    const totalSupply = await contract.methods.getTotalSupply().call();
    const totalSupplyString = totalSupply.toString();
    const nftIndex = [];
    const tempArr = [];

    for (let index = 0; index < totalSupplyString; index++) {
      const temp = await contract.methods.getOwnerOf(index).call();

      if (user.account === temp.toLowerCase()) {
        nftIndex.push(index);
      }
    }

    for (const ele of nftIndex) {
      const temp2 = await contract.methods.tokenURI(ele).call();
      const url = `https://gateway.pinata.cloud/ipfs/${temp2}`;
      const response = await fetch(url);
      const data = await response.json();
      const splitData = data.image.split("/");
      console.log(splitData[4], "이미지 경로");
      tempArr.push({ img: splitData[4], index: ele });
    }
    setIPFShash(tempArr);
  };

  const transfer = async (to, index) => {
    if (to.length !== 42) {
      alert("올바른 지갑주소를 입력해 주세요");
    } else {
      const transfer = await contract.methods.transferFrom(to, index).send({
        from: user.account,
      });
      console.log(transfer);
    }
  };

  return (
    <>
      <label>IPFS에 파일 업로드</label>
      <input
        type="file"
        onChange={(e) => {
          setFile(e.target.files[0]);
        }}
      />
      <button onClick={upload}>파일 업로드</button>
      <button onClick={getIPFShash}>nft가져오기</button>
      <label>nft를 받을 지갑주소 입력</label>
      <input
        onChange={(e) => {
          setToAccount(e.target.value);
        }}
      />
      {IPFShash &&
        IPFShash.map((a) => {
          console.log(a);
          return (
            <img
              style={{ cursor: "pointer" }}
              onClick={() => {
                transfer(toAccount, a.index);
              }}
              src={`https://ipfs.io/ipfs/${a.img}`}
              alt="이미지"
            />
          );
        })}
    </>
  );
};

export default App;

// ERC 배포할때 하나의 json
// 같은 내용으로 NFT를 발행하고 있는데
// react에서 파일을 생성해서 IPFS에 업로드하고
// 객체 만들기 전에 이미지 먼저 올리고 해시주소 가지고

// NFT 이름 입력
// NFT 설명 입력
// NFT 이미지 경로
// ------

// 새로운 nft 민팅

// 리액트 페이지에 본인의 NFT 내용도 같이 보여줘 보세요.
// 본인이 가지고 있는 tokenID를 조회해서
// tokenURI 함수를 실행시키면 ipfs json의 경로가 뜨고
// json의 값을 요청보내서 가져오면 그안에 NFT의 내용이 포함되어있으니까
// 화면에 뿌려주면 끝.

//ipfs에 이미지 업로드 => 파일의 경로가 ipfs에 hash 값을 가진 주소가 생기고,
// 이미지를 응답
// 객체가 필요한데, 객체의 내용을 받아야함.

// 주소 1 이미지가 저장되어있는 경로
// 주소1 이미지

// 주소2번 객체의 내용이 저장되어 있는 경로
