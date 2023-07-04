import React, { useState } from "react";
import "./body.css";
const CalanderBody = ({ isClick }) => {
  const keyNumArr = [
    [25, 26, 27, 28, 29, 30, 1],
    [2, 3, 4, 5, 6, 7, 8],
    [9, 10, 11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20, 21, 22],
    [23, 24, 25, 26, 27, 28, 29],
    [30, 31, 1, 2, 3, 4, 5],
  ];

  const [selected, setSelected] = useState(0);
  const dateClickHandler = (key) => {
    setSelected(key);
  };

  return (
    <div className="body-container">
      {keyNumArr.map((week, index) => {
        if (index === 0) {
          return (
            <div className="week">
              {week.map((day, indexDay) => {
                if (
                  indexDay === 0 ||
                  indexDay === 1 ||
                  indexDay === 2 ||
                  indexDay === 3 ||
                  indexDay === 4 ||
                  indexDay === 5
                ) {
                  return (
                    <div
                      key={`${index},${indexDay}`}
                    
                      className="not-here"
                      onClick={() => {
                        console.log(`${(index, indexDay)}`);
                        dateClickHandler();
                      }}
                    >
                      {day}
                    </div>
                  );
                } else if (indexDay === week.length - 1) {
                  return (
                    <div
                      key={`${index},${indexDay}`}
                      style={
                        selected == `${index}${indexDay}`
                          ? { borderTop: "1px solid violet" }
                          : {}
                      }
                      className={isClick ? "sat" : "normal"}
                      onClick={() => {
                        dateClickHandler(`${index}${indexDay}`);
                      }}
                    >
                      {day}
                    </div>
                  );
                } else if (indexDay === 0) {
                  return (
                    <div
                      key={`${index},${indexDay}`}
                      style={
                        selected == `${index}${indexDay}`
                          ? { borderTop: "1px solid violet" }
                          : {}
                      }
                      className={isClick ? "sun" : "normal"}
                      onClick={() => {
                        dateClickHandler(`${index}${indexDay}`);
                      }}
                    >
                      {day}
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={`${index},${indexDay}`}
                      style={
                        selected == `${index}${indexDay}`
                          ? { borderTop: "1px solid violet" }
                          : {}
                      }
                      className="normal"
                      onClick={() => {
                        dateClickHandler(`${index}${indexDay}`);
                      }}
                    >
                      {day}
                    </div>
                  );
                }
              })}
            </div>
          );
        } else if (index === 5) {
          return (
            <div className="week">
              {week.map((day, indexDay) => {
                if (
                  indexDay === 2 ||
                  indexDay === 3 ||
                  indexDay === 4 ||
                  indexDay === 5 ||
                  indexDay === 6
                ) {
                  return (
                    <div
                      key={`${index},${indexDay}`}
                   
                      className="not-here"
                      onClick={() => {
                        dateClickHandler(`${index}${indexDay}`);
                      }}
                    >
                      {day}
                    </div>
                  );
                } else if (indexDay === week.length - 1) {
                  return (
                    <div
                      key={`${index},${indexDay}`}
                      style={
                        selected == `${index}${indexDay}`
                          ? { borderTop: "1px solid violet" }
                          : {}
                      }
                      className={isClick ? "sat" : "normal"}
                      onClick={() => {
                        dateClickHandler(`${index}${indexDay}`);
                      }}
                    >
                      {day}
                    </div>
                  );
                } else if (indexDay === 0) {
                  return (
                    <div
                      key={`${index},${indexDay}`}
                      style={
                        selected == `${index}${indexDay}`
                          ? { borderTop: "1px solid violet" }
                          : {}
                      }
                      className={isClick ? "sun" : "normal"}
                      onClick={() => {
                        dateClickHandler(`${index}${indexDay}`);
                      }}
                    >
                      {day}
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={`${index},${indexDay}`}
                      style={
                        selected == `${index}${indexDay}`
                          ? { borderTop: "1px solid violet" }
                          : {}
                      }
                      className="normal"
                      onClick={() => {
                        dateClickHandler(`${index}${indexDay}`);
                      }}
                    >
                      {day}
                    </div>
                  );
                }
              })}
            </div>
          );
        } else {
          return (
            <div className="week">
              {week.map((day, indexDay) => {
                if (indexDay === week.length - 1) {
                  return (
                    <div
                      key={`${index},${indexDay}`}
                      style={
                        selected == `${index}${indexDay}`
                          ? { borderTop: "1px solid violet" }
                          : {}
                      }
                      className={isClick ? "sat" : "normal"}
                      onClick={() => {
                        dateClickHandler(`${index}${indexDay}`);
                      }}
                    >
                      {day}
                    </div>
                  );
                } else if (indexDay === 0) {
                  return (
                    <div
                      key={`${index},${indexDay}`}
                      style={
                        selected == `${index}${indexDay}`
                          ? { borderTop: "1px solid violet" }
                          : {}
                      }
                      className={isClick ? "sun" : "normal"}
                      onClick={() => {
                        dateClickHandler(`${index}${indexDay}`);
                      }}
                    >
                      {day}
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={`${index},${indexDay}`}
                      style={
                        selected == `${index}${indexDay}`
                          ? { borderTop: "1px solid violet" }
                          : {}
                      }
                      className="normal"
                      onClick={() => {
                        dateClickHandler(`${index}${indexDay}`);
                      }}
                    >
                      {day}
                    </div>
                  );
                }
              })}
            </div>
          );
        }

        // return (
        //   <div className="week">
        //     {week.map((day, indexDay) => {
        //       if (index === 0) {
        //         console.log(index);
        //         return (
        //           <div key={`${index},${indexDay}`} className="not-here">
        //             {day}
        //           </div>
        //         );
        //       } else if (indexDay === week.length - 1) {
        //         return (
        //           <div
        //             key={`${index},${indexDay}`}
        //             className={isClick ? "sat" : "normal"}
        //           >
        //             {day}
        //           </div>
        //         );
        //       } else if (indexDay === 0) {
        //         return (
        //           <div
        //             key={`${index},${indexDay}`}
        //             className={isClick ? "sun" : "normal"}
        //           >
        //             9
        //           </div>
        //         );
        //       } else {
        //         return (
        //           <div key={`${index},${indexDay}`} className="normal">
        //             3
        //           </div>
        //         );
        //       }
        //     })}
        //   </div>
        // );
      })}
      {/* <div className="week">
        <div className="not-here">25</div>
        <div className="not-here">26</div>
        <div className="not-here">27</div>
        <div className="not-here">28</div>
        <div className="not-here">29</div>
        <div className="not-here">30</div>
        <div className={isClick ? "sat" : "normal"}>1</div>
      </div>
      <div className="week">
        <div className={isClick ? "sun" : "normal"}>2</div>
        <div className="normal">3</div>
        <div className="normal">4</div>
        <div className="normal">5</div>
        <div className="normal">6</div>
        <div className="normal">7</div>
        <div className={isClick ? "sat" : "normal"}>8</div>
      </div>
      <div className="week">
        <div className={isClick ? "sun" : "normal"}>9</div>
        <div className="normal">10</div>
        <div className="normal">11</div>
        <div className="normal">12</div>
        <div className="normal">13</div>
        <div className="normal">14</div>
        <div className={isClick ? "sat" : "normal"}>15</div>
      </div>
      <div className="week">
        <div className={isClick ? "sun" : "normal"}>16</div>
        <div className="normal">17</div>
        <div className="normal">18</div>
        <div className="normal">19</div>
        <div className="normal">20</div>
        <div className="normal">21</div>
        <div className={isClick ? "sat" : "normal"}>22</div>
      </div>
      <div className="week">
        <div className={isClick ? "sun" : "normal"}>23</div>
        <div className="normal">24</div>
        <div className="normal">25</div>
        <div className="normal">26</div>
        <div className="normal">27</div>
        <div className="normal">28</div>
        <div className={isClick ? "sat" : "normal"}>29</div>
      </div>
      <div className="week">
        <div className={isClick ? "sun" : "normal"}>30</div>
        <div className="normal">31</div>
        <div className="not-here">1</div>
        <div className="not-here">2</div>
        <div className="not-here">3</div>
        <div className="not-here">4</div>
        <div className="not-here">5</div>
      </div> */}
    </div>
  );
};

export default CalanderBody;
