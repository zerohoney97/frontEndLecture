import React from "react";
import "./header.css";
import img from "./hambugur.png";
const CalanderHeader1 = ({ setIsClick, isClick }) => {
  return (
    <div className="header1-container">
      <div>7월 달력</div>
      <img
        onClick={() => {
          setIsClick(!isClick);
          console.log(isClick);
        }}
        style={{ cursor: "pointer" }}
        src={img}
        alt="버거 버튼"
      />
    </div>
  );
};
const CalanderHeader2 = () => {
  return (
    <div className="header2-container">
      <div className="sunday">일</div>
      <div>월</div>
      <div>화</div>
      <div>수</div>
      <div>목</div>
      <div>금</div>
      <div className="saturday">토</div>
    </div>
  );
};

export { CalanderHeader1, CalanderHeader2 };
