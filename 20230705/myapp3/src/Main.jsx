import React, { useEffect, useState } from "react";
import "./main.css";
import GameTile from "./tile/GameTile";
const Main = () => {
  // 지뢰
  const [tile, setTile] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [mine, setMine] = useState([]);
  const [result, setResult] = useState("");

  const locationReload = () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res();
      }, 500);
    });
  };

  const makeMine = () => {
    let temp = [];
    for (let index = 0; index < 3; index++) {
      let ranNum = Math.floor(Math.random() * 9);
      if (temp.includes(ranNum)) {
        index--;
      } else {
        temp.push(ranNum);
      }
    }
    setMine([...temp]);
  };

  useEffect(() => {
    makeMine();
    if (result === "펑") {
      alert("터지셨군요...");

      window.location.reload();
    }
  }, [result]);

  return (
    <div className="container ">
      <GameTile tile={tile} mine={mine} setResult={setResult} />
    </div>
  );
};

export default Main;
