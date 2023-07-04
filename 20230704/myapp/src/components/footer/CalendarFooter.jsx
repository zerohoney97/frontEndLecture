import React from "react";
import "./footer.css";
const CalanderFooter = () => {
  return (
    <div className="footer-container">
      <div className="tel-address">
        <h2>대표 전화:082-8282-8282 대리운전~~</h2>
        <h3>비상 전화:비둘기야 밥먹자 9999-9999</h3>
      </div>
      <div className="name-etc">
        <span>이치고 프로덕션(주)</span>
        <span>대표:이무헌</span>
        <span>서울시 강남구 어딘가</span>
        <span>사업자 등록번호 1234-1234-432</span>
      </div>
      <div className="warning">
        <span>지나친 달력 클릭은 손목 터널 증후군을 유발 할 수 있습니다.</span>
      </div>
    </div>
  );
};

export default CalanderFooter;
