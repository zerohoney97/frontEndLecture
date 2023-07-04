// 달력 하나 만들기
// 7월 달력 하나 만들어보기

// 달력 헤더=> 타이틀, 햄버거 버튼,요일
// 달력 바디=> 달력 날짜=>헤더 리본(컴포넌트),숫자
// 달력 푸터=>본인 이름에 회사명 경일 아카데미

// 함수형 컴포넌트
// 버튼 누르면 달력 보이기

// 그리고 빨간날은 표시안하고 있다가
// 빨간날 보기 버튼 누르면 빨간날들 보이기
// 해당 날짜 누르면 색 변하기

import React, { useEffect, useState } from "react";
import "./calender.css";
import { CalanderHeader1, CalanderHeader2 } from "./header/CalendarHeader";
import CalanderBody from "./body/CalendarBody";
import CalanderFooter from "./footer/CalendarFooter";
const Calander = ({ isDisplay }) => {
  const [isClick, setIsClick] = useState(false);

  return (
    <div className={isDisplay ? "container visible" : "container"}>
      <CalanderHeader1 isClick={isClick} setIsClick={setIsClick} />
      <CalanderHeader2 />
      <CalanderBody isClick={isClick} />
      <CalanderFooter />
    </div>
  );
};

export default Calander;
