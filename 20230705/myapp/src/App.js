import { useEffect, useState } from "react";
import "./App.css";
import Block from "./component/Block";
import { gameImg } from "./img";
// 추억의 자바스크립트
// 가위바위보
// 플레이어 하나
// 컴퓨터 하나
// 컴포넌트로 만들고
// 컴퓨터로 랜덤 가위바위 보 중에 하나를 내고
// 플레이어는 선택 할 수 있게

// 플레이어 컴퓨터
// 가위 가위 => 무승부
// 가위 바위=>패
// 가위 보=>승

// 바위 바위=>무승부
// 바위 보=>패
// 바위 가위=>승

// 보 보=>무승부
// 보 가위=>패
// 보 바위=>승

function App() {
  // 컴퓨터와 유저가 사용할 가위 바위 보의 객체를 하나 만들어주자
  // 선택 값을 담아 놓을 객체
  const scissors = "가위";
  const rock = "바위";
  const paper = "보";

  // 선택값을 다루고 있어
  // select 객체 안에 데이터가 다 들어있으면
  // select 동작을 하는 프로그램을 작성할 때
  // select 객체안에 있는 값은 전부 select 동작을 하기위해 만든 것이라고 알 수 있음

  // selet 컴퓨터와 유저가 가위 바위 보를 냈을 때 필요한 데이터들을 모아둘 객체
  const select = {
    scissor: {
      name: "가위",
      img: gameImg,
      imgStyle: {
        width: "100%",
        objectFit: "none",
        objectPosition: "left",
        height: "260px",
      },
    },
    rock: {
      name: "바위",
      img: gameImg,
      imgStyle: {
        width: "100%",
        objectFit: "none",
        objectPosition: "center",
        height: "260px",
      },
    },
    paper: {
      name: "보",
      img: gameImg,
      imgStyle: {
        width: "100%",
        objectFit: "none",
        objectPosition: "right",
        height: "260px",
      },
    },
  };

  // 유저가 선택한 값은 주시하자 만약 선택하면 데이터 바뀐 상태로 다시 그려줘야하기 때문에
  // 유저의 선택 useState
  const [userSelect, setUserSelect] = useState(null);
  // 컴퓨터의 선택
  const [comSelect, setComSelect] = useState(null);

  // 승패 결과를 담을 useState
  const [result, setResult] = useState("");

  function userClick(_select) {
    // 선택한 객체를 상태변수에 담아주자
    setUserSelect(select[_select]);
    // 컴퓨터는 랜덤으로 선택을 시켜줘야 하는데

    // 플레이어 선택 이후에 컴퓨터도 랜덤한 값을 가지고 가위바위보를 선택 시키자
    let arr = Object.keys(select);
    console.log(arr);

    // 소수점 제외 시키고 랜덤한 정수값 0~2
    let comRandom = Math.floor(Math.random() * 3);

    // comRandom램덤한 값
    setComSelect(select[arr[comRandom]]);

    let player = select[_select];
    let com = select[arr[comRandom]];
    if (player.name === com.name) {
      // 처음에 무승부 거르고
      setResult("무승부");
    } else if (player.name === "가위") {
      let result = com.name === "보" ? "이겨따!" : "져따!";
      setResult(result);
    } else if (player.name === "바위") {
      let result = com.name === "보" ? "져따!" : "이겨따!";
      setResult(result);
    } else if (player.name === "보") {
      let result = com.name === "가위" ? "져따!" : "이겨따!";
      setResult(result);
    }
  }

  useEffect(() => {
    console.log(userSelect);
  }, [userSelect]);

  return (
    <>
      <div className="App">
        <Block data={userSelect} name={"유저"} result={result} />
        <Block data={comSelect} name={"컴퓨터"} result={result} />
      </div>
      <div>
        {/* {버튼 여기에} */}
        <button
          onClick={() => {
            userClick("scissor");
          }}
        >
          가위
        </button>
        <button
          onClick={() => {
            userClick("rock");
          }}
        >
          바위
        </button>
        <button
          onClick={() => {
            userClick("paper");
          }}
        >
          보
        </button>
      </div>
    </>
  );
}

export default App;
