import React, { useEffect, useState } from "react";
import "./tile.css";
import die from "../die.jpeg";
import akane from "../akane.jpeg";
const GameTile = ({ tile, mine, setResult }) => {
  let i = 0;
  const [selected, setSelected] = useState("");
  const [safeArr, setSafeArr] = useState([]);
  const validateMine = (e, key) => {
    if (mine.includes(parseInt(e.target.className))) {
      document.querySelector(`#id${key}`).innerHTML =
        `<img className="" src=${die} alt="" />`;
      console.log("go");
        setTimeout(() => {
          setSelected("go");
          setResult("펑");
        }, 700);
      //   setSelected("go");
      //   setResult("펑");
    }

    setSelected(key);
    setSafeArr([...safeArr, key]);
  };
  return (
    <div className="tile-container">
      {tile.map((row, rowIndex) => {
        return (
          <div className="row">
            {row.map((col, colIndex) => {
              if (mine.includes(i)) {
                i++;

                return (
                  <div className="col" key={`${rowIndex}${colIndex}`}>
                    {selected === "go" ? (
                      <img className={i - 1} src={die} alt="" />
                    ) : (
                      <div
                        onClick={(e) => {
                          validateMine(e, `${rowIndex}${colIndex}`);
                        }}
                        className={i - 1}
                        id={`id${rowIndex}${colIndex}`}
                      >
                        ?
                      </div>
                    )}
                  </div>
                );
              } else {
                i++;

                return (
                  <div className="col" key={`${rowIndex}${colIndex}`}>
                    {selected === `${rowIndex}${colIndex}` ||
                    safeArr.includes(`${rowIndex}${colIndex}`) ? (
                      <img
                        key={`${rowIndex}${colIndex}`}
                        className={i - 1}
                        src={akane}
                        alt=""
                      />
                    ) : (
                      <div
                        onClick={(e) => {
                          validateMine(e, `${rowIndex}${colIndex}`);
                        }}
                        className={i - 1}
                      >
                        ?
                      </div>
                    )}
                  </div>
                );
              }
            })}
          </div>
        );
      })}
    </div>
  );
};

export default GameTile;
